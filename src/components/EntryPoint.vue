<script setup lang="ts">
  import TaskList from '@/components/TaskList.vue';
  import type { Task } from '@/typings/task';
  import { getLastId } from '@/utils/getLastId';
  import { computed, ref } from 'vue';

  const tasks = ref<Task[]>([{ name: 'Teste', id: 1 }]);

  const lastId = computed(() => getLastId(tasks));

  function removeTask(id: number) {
    const taskIndex = tasks.value.findIndex((t) => t.id == id);

    if (taskIndex !== -1) {
      tasks.value.splice(taskIndex, 1);
    }
  }

  function addTask(taskName: string) {
    tasks.value.push({ name: taskName, id: lastId.value + 1 });
  }
</script>

<template>
  <TaskList
    :tasks="tasks"
    @delete-task="removeTask"
    @add-task="addTask"
  />
</template>
