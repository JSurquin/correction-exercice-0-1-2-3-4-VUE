<script>
export default {
    emits: ['editTask', 'deleteTask'],
    props: {
        task: {
            type: Object,
            required: true,
        }
    }
}
</script>

<template>
    <div style="box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1); border-radius: 10px; padding: 10px;">
        <div style="margin-bottom: 10px;">
        <p>Title: {{ task.title }}</p>
        <p>Description: {{ task.description }}</p>
        <p>Completed: {{ task.completed }}</p>
        </div>
        <div style="display: grid; flex-direction: row; gap: 10px;">
        <button style="width: 100%; padding: 10px; border: 1px solid gray; border-radius: 5px; background-color: #007bff; color: white; cursor: pointer;" @click="$emit('editTask', task)">Modifier</button>
        <button style="width: 100%; padding: 10px; border: 1px solid gray; border-radius: 5px; background-color: #dc3545; color: white; cursor: pointer;" @click="$emit('deleteTask', task)
        ">Supprimer</button>
        </div>
    </div>
</template>