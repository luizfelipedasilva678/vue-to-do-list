import type { Task } from '@/typings/task';
import type { Ref } from 'vue';

export function getLastId(tasks: Ref<Task[]>) {
  const newTasks = [...tasks.value];

  const sortedArray = newTasks.sort((a, b) => b.id - a.id);

  if (sortedArray[0]) {
    return sortedArray[0].id;
  }

  return 1;
}
