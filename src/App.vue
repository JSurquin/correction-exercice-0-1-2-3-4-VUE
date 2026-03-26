<script>
// Importe la vue principale qui affiche la liste des tâches
import Tasks from './views/Tasks.vue';
// Définition du composant racine monté dans #app
export default {
  // Identifiant du composant pour les outils de développement
  name: 'App',
  // Déclare les composants utilisables dans le template
  components: {
    // Composant de la page des tâches
    Tasks,
  }
}
</script>

<template>
  <!-- Rend la page Tasks à la racine de l'application -->
  <Tasks />
</template>
