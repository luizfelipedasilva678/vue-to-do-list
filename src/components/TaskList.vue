<script setup lang="ts">
import { ref } from 'vue';

const tasks = ref<{ name: string; id: number }[]>([]);
</script>

<template>
  <ul class="tasks">
    <li class="tasks__item" v-for="task in tasks" :key="task.id">{{ task.name }}</li>
  </ul>
</template>
