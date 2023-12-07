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
        class="tasks__btn"
        @click="addTask"
      >
        Add task
      </button>
    </div>
  </div>
</template>
