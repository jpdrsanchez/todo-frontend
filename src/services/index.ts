import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://www.todo-api.jotape.tech/api',
  headers: { 'Content-Type': 'application/json' }
})
