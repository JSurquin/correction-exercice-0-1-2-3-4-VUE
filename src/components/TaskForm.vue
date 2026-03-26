<script>
// Formulaire d'ajout d'une tâche ; émet un événement vers le parent
export default {
    // Événements déclarés pour la doc et la validation des emits
    emits: ['addTask'],
    // Données réactives du formulaire (champs liés par v-model)
    data(){
        return {
            // Titre saisi par l'utilisateur
            title: '',
            // Description saisie par l'utilisateur
            description: '',
            // Case à cocher : tâche terminée ou non
            completed: false,
        }
    },
    // Méthodes appelées depuis le template
    methods: {
        // Construit l'objet tâche et le remonte au parent via addTask
        handleTaskSubmit() {
            // Émet la nouvelle tâche avec un id aléatoire et les champs du formulaire
            this.$emit('addTask', {
                id: Math.random(),
                title: this.title,
                description: this.description,
                completed: this.completed,
            });
        }
    }
}
</script>

<template>
    <!-- Conteneur visuel du formulaire (ombre et coins arrondis) -->
    <div style="box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1); border-radius: 10px; padding: 10px;">
        <!-- Soumission sans rechargement de page grâce à .prevent -->
        <form @submit.prevent="handleTaskSubmit">
            <!-- Colonne : champs empilés avec espacement -->
            <div style="display: flex; flex-direction: column; gap: 10px;">
            <!-- Champ titre lié à data.title -->
            <input style="width: 100%; padding: 10px; border: 1px solid gray; border-radius: 5px;" type="text" v-model="title" placeholder="Title" />
            <!-- Champ description lié à data.description -->
            <input style="width: 100%; padding: 10px; border: 1px solid gray; border-radius: 5px;" type="text" v-model="description" placeholder="Description" />
            <!-- Bouton qui déclenche le submit du formulaire -->
            <button style="width: 100%; padding: 10px; border: 1px solid gray; border-radius: 5px; background-color: #007bff; color: white; cursor: pointer;" type="submit">Ajouter une tâche</button>
            </div>
        </form>
    </div>
</template>
