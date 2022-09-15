<script setup>
const props = defineProps({
  text: { type: String, default: "0" },
  result: { type: String, default: "0" },
  error: { type: String, default: "" },
});
</script>

<template>
  <div class="screen">
    <div v-if="error" class="screen__error">{{ error }}</div>
    <div class="screen__top">{{ text }}</div>
    <div class="screen__content">{{ result }}</div>
  </div>
</template>

<style scoped>
.screen {
  width: 100%;
  height: 120px;
  text-align: right;
  padding-right: 1rem;
  padding-top: 0.5rem;
  background: white;
}

.screen__top {
  font-size: 1.5rem;
}

.screen__content {
  font-size: 2.4rem;
  width: 280px;
  text-overflow: ellipsis;
  overflow: hidden;
}

.screen__error {
  font-size: 0.7rem;
  color: red;
}
</style>
