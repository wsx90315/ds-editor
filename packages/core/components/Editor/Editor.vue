<template>
  <div>
    {{ test }}
    <p
      v-for="i in 5"
      id="p-text"
      :key="i"
    >
      {{ i }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
const test = reactive({ a: 1, blur: 1 });
</script>
