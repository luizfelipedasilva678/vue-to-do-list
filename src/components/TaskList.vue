<script setup lang="ts">
  import { ref, type PropType } from 'vue';
  import { type Task } from '@/typings/task';

  const emit = defineEmits(['addTask', 'deleteTask']);
  const taskName = ref('');

  function addTask() {
    emit('addTask', taskName.value);
    taskName.value = '';
  }

  defineProps({
    tasks: { type: Object as PropType<Task[]>, required: true }
  });
</script>

<template>
  <div class="tasks">
    <ul class="tasks__list">
      <template
        v-for="task in tasks"
        :key="task.id"
      >
        <li class="tasks__li">
          <p class="tasks__task-name">{{ task.name }}</p>
          <div class="tasks__task-actions">
            <button
              class="tasks__btn"
              @click="$emit('deleteTask', task.id)"
            >
              ➖
            </button>
          </div>
        </li>
      </template>
    </ul>
    <div class="tasks__register">
      <input
        type="text"
        placeholder="Type the name of the task"
        v-model="taskName"
        class="tasks__input"
      />
      <button
        class="tasks__btn-register"
        @click="addTask"
      >
        Add task
      </button>
    </div>
  </div>
</template>

<style scoped>
  .tasks__list {
    list-style: none;
    padding: 0;
    font-size: 1.6em;
  }

  .tasks__li {
    display: flex;
    justify-content: space-between;
  }

  .tasks__btn {
    border: none;
    cursor: pointer;
    background: transparent;
  }

  .tasks__register {
    margin-top: 1.6em;
    height: 3.4em;
    max-height: 3.4em;
  }

  .tasks__btn-register {
    font-size: 1.6em;
    height: 100%;
    border: none;
    margin-left: 0.5em;
    cursor: pointer;
    border-radius: 0.2em;
    padding: 0.5em;
  }

  .tasks__input {
    height: 100%;
    display: inline-block;
    border-radius: 0.5em;
    border: solid 0.1em #000;
  }
</style>
