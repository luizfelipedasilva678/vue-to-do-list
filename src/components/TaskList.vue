<script setup lang="ts">
  import { ref } from 'vue';
  import { type Task } from '@/typings/task';
  const tasks = ref<Task[]>([]);
</script>

<template>
  <ul class="tasks">
    <template
      v-for="task in tasks"
      :key="task.id"
    >
      <li class="tasks__item">{{ task.name }}</li>
      <li class="tasks__item">
        <button class="tasks__btn">➕</button>
      </li>
      <li class="tasks__item">
        <button class="tasks__btn">➖</button>
      </li>
    </template>
  </ul>
</template>
