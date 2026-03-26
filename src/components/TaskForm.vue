<script>
export default {
    emits: ['addTask'],
    data(){
        return {
            title: '',
            description: '',
            completed: false,
        }
    },
    methods: {
        handleTaskSubmit() {
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
    <div style="box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1); border-radius: 10px; padding: 10px;">
        <form @submit.prevent="handleTaskSubmit">
            <div style="display: flex; flex-direction: column; gap: 10px;">
            <input style="width: 100%; padding: 10px; border: 1px solid gray; border-radius: 5px;" type="text" v-model="title" placeholder="Title" />
            <input style="width: 100%; padding: 10px; border: 1px solid gray; border-radius: 5px;" type="text" v-model="description" placeholder="Description" />
            <button style="width: 100%; padding: 10px; border: 1px solid gray; border-radius: 5px; background-color: #007bff; color: white; cursor: pointer;" type="submit">Ajouter une tâche</button>
            </div>
        </form>
    </div>
</template>