<template>
  <div class="container">
    <h1>URL Shortener</h1>

    <input v-model="url" placeholder="Enter a long URL" />
    <button @click="shorten">Shorten</button>

    <div v-if="shortened">
      <p><strong>Shortened:</strong> {{ shortened }}</p>
    </div>

    <hr />

    <div>
      <h2>History</h2>
      <ul>
        <li v-for="link in links" :key="link.id">
          <a :href="link.original_url" target="_blank">{{ link.original_url }}</a> →
          <a :href="`http://localhost:3000/${link.slug}`" target="_blank">
            shorten link: {{ link.slug }}
          </a>
          ({{ link.click_count }} clicks)
          ({{ link.status }})
          ({{ link.expires_at }})
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const url = ref('')
const shortened = ref('')
const links = ref([])

const shorten = async () => {
  try {
    const res = await axios.post('/api/v1/links', { link: { original_url: url.value } })
    shortened.value = `http://localhost:3000/${res.data.slug}`
    await fetchLinks()
    url.value = ''
  } catch (e) {
    alert('Invalid URL')
  }
}

const fetchLinks = async () => {
  const res = await axios.get('/api/v1/links')
  links.value = res.data
}

onMounted(fetchLinks)
</script>
