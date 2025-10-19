vue
<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="blue-title">{{ msg }}</h1>
    <h3 class="subtitle">
      Методическая копилка для школьных учителей
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 600;
  font-size: 2.2rem;
  position: relative;
  margin-bottom: 1rem;
}

.blue-title {
  color: #00bcd4;
}
.subtitle {
  font-size: 1.1rem;
  color: var(--color-text); /* Такой же цвет как у ссылок в навигации */
  font-weight: 400;
  line-height: 1.4;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
  
  h1 {
    font-size: 2.4rem;
  }
}
</style>