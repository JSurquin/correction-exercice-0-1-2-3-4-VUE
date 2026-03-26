<script>
// Carte : affiche une tâche et émet édition ou suppression
export default {
    // Événements vers TaskList
    emits: ['editTask', 'deleteTask'],
    // Données injectées par le parent (objet tâche)
    props: {
        task: {
            // Type attendu : objet JavaScript
            type: Object,
            // Obligatoire pour afficher la carte
            required: true,
        }
    }
}
</script>

<template>
    <!-- Carte avec ombre et espacement interne -->
    <div style="box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1); border-radius: 10px; padding: 10px;">
        <!-- Bloc texte : détails de la tâche -->
        <div style="margin-bottom: 10px;">
        <!-- Affiche le titre de la prop task -->
        <p>Title: {{ task.title }}</p>
        <!-- Affiche la description -->
        <p>Description: {{ task.description }}</p>
        <!-- Affiche l'état complété (booléen) -->
        <p>Completed: {{ task.completed }}</p>
        </div>
        <!-- Zone des boutons d'action -->
        <div style="display: grid; flex-direction: row; gap: 10px;">
        <!-- Émet editTask avec l'objet tâche courant -->
        <button style="width: 100%; padding: 10px; border: 1px solid gray; border-radius: 5px; background-color: #007bff; color: white; cursor: pointer;" @click="$emit('editTask', task)">Modifier</button>
        <!-- Émet deleteTask pour retirer cette tâche côté liste -->
        <button style="width: 100%; padding: 10px; border: 1px solid gray; border-radius: 5px; background-color: #dc3545; color: white; cursor: pointer;" @click="$emit('deleteTask', task)
        ">Supprimer</button>
        </div>
    </div>
</template>
