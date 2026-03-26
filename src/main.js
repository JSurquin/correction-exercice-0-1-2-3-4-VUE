// Importe la fonction qui crée l'instance d'application Vue 3
import { createApp } from 'vue'
// Feuille de styles globale de l'application
import './style.css'
// Composant racine App.vue
import App from './App.vue'

// Monte l'app sur l'élément #app du index.html
createApp(App).mount('#app')
