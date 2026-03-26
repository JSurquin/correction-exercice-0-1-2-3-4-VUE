<script>
import TaskItem from './TaskItem.vue';
import TaskForm from './TaskForm.vue';
export default {
    name: 'TaskList',
    components: {
        TaskItem,
        TaskForm,
    },
    data(){
        return {
            tasks: [],
        }},
    methods: {
        addTask(task) {
            this.tasks.push(task);
        },
        editTask(task) {
            taskToEdit = this.tasks.find(t => t.id === task.id)
            taskToEdit.title = task.title;
            taskToEdit.description = task.description;
            taskToEdit.completed = task.completed;
            this.tasks = [...this.tasks];
        },
        deleteTask(task) {
            this.tasks = this.tasks.filter(t => t.id !== task.id);
        },
    },
}
</script>

<template>
    <div style="box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1); border-radius: 10px; padding: 10px;">
    <TaskForm @addTask="addTask" />
    <br/>
    <TaskItem @editTask="editTask" @deleteTask="deleteTask" v-for="task in tasks" :task="task" />
</div>
</template>