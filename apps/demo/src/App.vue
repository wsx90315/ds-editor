<template>
  <HeaderBar />

  <div class="content_wrapper">
    <SideBar />
    <RouterView />
  </div>
</template>

<script setup>
import HeaderBar from '@/components/Layout/HeaderBar.vue';
import SideBar from '@/components/Layout/SideBar.vue';

</script>
<style lang="scss">
.content_wrapper {
  position: relative;
  margin-top: 60px;
  min-height: calc(100vh - 60px);
  background: $grey-400;
}
</style>
