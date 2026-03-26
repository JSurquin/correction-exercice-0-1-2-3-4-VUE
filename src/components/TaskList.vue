<script>
// Affiche une ligne de tâche (carte)
import TaskItem from './TaskItem.vue';
// Formulaire pour ajouter une tâche à la liste
import TaskForm from './TaskForm.vue';
// Conteneur : état de la liste + actions ajout / édition / suppression
export default {
    // Nom du composant
    name: 'TaskList',
    // Sous-composants utilisés dans le template
    components: {
        // Carte d'une tâche
        TaskItem,
        // Zone de saisie nouvelle tâche
        TaskForm,
    },
    // Tableau réactif des tâches affichées
    data(){
        return {
            // Liste vide au chargement ; remplie via addTask
            tasks: [],
        }},
    // Fonctions qui modifient tasks
    methods: {
        // Ajoute une tâche reçue depuis TaskForm
        addTask(task) {
            this.tasks.push(task);
        },
        // Met à jour une tâche existante après édition depuis TaskItem
        editTask(task) {
            taskToEdit = this.tasks.find(t => t.id === task.id)
            taskToEdit.title = task.title;
            taskToEdit.description = task.description;
            taskToEdit.completed = task.completed;
            this.tasks = [...this.tasks];
        },
        // Retire une tâche de la liste par son id
        deleteTask(task) {
            this.tasks = this.tasks.filter(t => t.id !== task.id);
        },
    },
}
</script>

<template>
    <!-- Bloc englobant liste + formulaire -->
    <div style="box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1); border-radius: 10px; padding: 10px;">
    <!-- Écoute addTask pour appeler la méthode addTask du parent -->
    <TaskForm @addTask="addTask" />
    <!-- Séparateur visuel entre formulaire et cartes -->
    <br/>
    <!-- Une carte par tâche ; édition et suppression remontées au parent -->
    <TaskItem @editTask="editTask" @deleteTask="deleteTask" v-for="task in tasks" :task="task" />
</div>
</template>
