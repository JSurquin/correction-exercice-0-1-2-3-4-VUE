<script>
// Importe le composant qui gère la liste et le formulaire
import TaskList from '../components/TaskList.vue';
// Vue « page » : assemble les parties de l'écran des tâches
export default {
    // Nom du composant (debug / réutilisation)
    name: 'Tasks',
    // Composants enregistrés pour ce fichier
    components: {
        // Liste des tâches + formulaire d'ajout
        TaskList,
    }
}
</script>

<template>
    <!-- Affiche TaskList comme contenu unique de la page -->
    <TaskList />
</template>
