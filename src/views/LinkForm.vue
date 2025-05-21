<template>
  <form @submit.prevent="submitForm" class="space-y-6 max-w-xl mx-auto mt-10 p-6 border rounded shadow bg-white">
    <h2 class="text-2xl font-semibold text-gray-800">Create Short Link</h2>

    <div>
      <label class="block mb-1 text-sm font-medium text-gray-700">Original URL</label>
      <input
        v-model="form.original_url"
        type="url"
        placeholder="https://example.com"
        class="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
    </div>

    <div>
      <label class="block mb-1 text-sm font-medium text-gray-700">Custom Slug (optional)</label>
      <input
        v-model="form.slug"
        type="text"
        placeholder="my-custom-slug"
        class="w-full border border-gray-300 rounded px-4 py-2 text-sm"
      />
    </div>

    <div>
      <label class="block mb-1 text-sm font-medium text-gray-700">Expiration Date (optional)</label>
      <input
        v-model="form.expires_at"
        type="datetime-local"
        class="w-full border border-gray-300 rounded px-4 py-2 text-sm"
      />
    </div>

    <div>
      <label class="block mb-1 text-sm font-medium text-gray-700">Status</label>
      <select
        v-model="form.status"
        class="w-full border border-gray-300 rounded px-4 py-2 text-sm"
      >
        <option :value="0">Active</option>
        <option :value="1">Inactive</option>
        <option :value="2">Archived</option>
      </select>
    </div>

    <div>
      <button
        type="submit"
        class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </div>

    <div v-if="successMessage" class="text-green-700 text-sm mt-4">
      {{ successMessage }}
    </div>

    <div v-if="errorMessage" class="text-red-600 text-sm mt-4">
      {{ errorMessage }}
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const form = ref({
  original_url: '',
  slug: '',
  expires_at: '',
  status: 0,
})

const successMessage = ref('')
const errorMessage = ref('')

const submitForm = async () => {
  successMessage.value = ''
  errorMessage.value = ''
  try {
    const res = await axios.post('/api/v1/links', { link: form.value })
    successMessage.value = 'Short link created successfully!'
    form.value = {
      original_url: '',
      slug: '',
      expires_at: '',
      status: 0
    }
  } catch (err) {
    errorMessage.value = err.response?.data?.errors?.join(', ') || 'Something went wrong.'
  }
}
</script>
