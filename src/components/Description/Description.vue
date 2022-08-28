<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="dresciption">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      A simple calculator where you can perform basic operations
      <a target="_blank" href="https://github.com/Beaves83/calculator_vue3">GitHub</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.dresciption h1,
.dresciption h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .dresciption h1,
  .dresciption h3 {
    text-align: left;
  }
}
</style>
