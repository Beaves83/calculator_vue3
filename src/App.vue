<script setup>
import Description from "./components/Description/Description.vue";
import Calculator from "./components/Calculator/Calculator.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <Description msg="Simple calculator" />
    </div>
  </header>

  <main>
    <Calculator />
  </main>
</template>

<style scoped>
main {
  background: linear-gradient(
    to bottom right,
    rgb(71, 131, 180),
    rgb(181, 208, 216)
  );
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
