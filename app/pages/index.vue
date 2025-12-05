<template>
  <div class="container">
    <div class="form-wrapper">
      <h1>Demo Form</h1>
      
      <div class="config-section">
        <label>Endpoint URL:</label>
        <input 
          v-model="endpoint" 
          type="text" 
          placeholder="https://api.example.com/endpoint"
          class="input"
        />
      </div>

      <form @submit.prevent="submitForm" class="form">
        <div class="form-group">
          <label>Name:</label>
          <input 
            v-model="formData.name" 
            type="text" 
            required
            class="input"
          />
        </div>

        <div class="form-group">
          <label>Email:</label>
          <input 
            v-model="formData.email" 
            type="email" 
            required
            class="input"
          />
        </div>

        <div class="form-group">
          <label>Message:</label>
          <textarea 
            v-model="formData.message"
            class="textarea"
          ></textarea>
        </div>

        <button type="submit" :disabled="loading" class="button">
          {{ loading ? 'Enviando...' : 'Enviar' }}
        </button>
      </form>

      <div v-if="response" class="response">
        <p class="success">✓ Resposta recebida:</p>
        <pre>{{ JSON.stringify(response, null, 2) }}</pre>
      </div>

      <div v-if="error" class="error">
        ✗ Erro: {{ error }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const endpoint = ref('https://httpbin.org/post')
const loading = ref(false)
const response = ref<any>(null)
const error = ref('')

const formData = ref({
  name: '',
  email: '',
  message: ''
})

const submitForm = async () => {
  error.value = ''
  response.value = null
  
  if (!endpoint.value) {
    error.value = 'Por favor, configure um endpoint'
    return
  }

  loading.value = true
  
  try {
    const res = await fetch(endpoint.value, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData.value)
    })

    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    
    response.value = await res.json()
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Erro desconhecido'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: 2rem auto;
  padding: 1rem;
}

.form-wrapper {
  background: #f5f5f5;
  padding: 2rem;
  border-radius: 8px;
}

h1 {
  margin-top: 0;
}

.config-section {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ddd;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.input,
.textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  font-family: inherit;
  box-sizing: border-box;
}

.input:focus,
.textarea:focus {
  outline: none;
  border-color: #0066cc;
  box-shadow: 0 0 0 2px rgba(0, 102, 204, 0.1);
}

.button {
  width: 100%;
  padding: 0.75rem;
  background: #0066cc;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}

.button:hover:not(:disabled) {
  background: #0052a3;
}

.button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.response,
.error {
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 4px;
}

.success {
  color: #22863a;
  margin: 0 0 0.5rem 0;
}

.response {
  background: #f0f5f1;
  border: 1px solid #22863a;
}

.response pre {
  background: white;
  padding: 0.75rem;
  border-radius: 4px;
  overflow-x: auto;
  margin: 0;
  font-size: 0.85rem;
}

.error {
  background: #fef2f2;
  border: 1px solid #c33;
  color: #c33;
}
</style>