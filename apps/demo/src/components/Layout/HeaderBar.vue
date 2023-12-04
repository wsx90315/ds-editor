<template>
  <div class="header_bar_wrapper">
    <div class="header_bar_content">
      <div class="filename_view">
        Drafts / My Product
      </div>

      <div class="header_bar_buttonGroup">
        button..
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
.header_bar_wrapper {
  height: 60px;
  background: $white;
  border: 1px solid $grey;
  z-index: 8;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;

  .header_bar_content {
    padding: 14px 28px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    
  }
  .filename_view {
    height: 32px;
  }
}
</style>