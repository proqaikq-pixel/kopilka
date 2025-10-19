<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Логотип Кабинета Методиста" class="logo" src="@/assets/Logo m&k.png" width="270px" height="200px" />

    <div class="wrapper">
      <HelloWorld msg="Кабинет Методиста" />

      <nav>
        <RouterLink to="/">Главная</RouterLink>
        <RouterLink to="/about">О проекте</RouterLink>
        <RouterLink to="/forum">Педагогический форум</RouterLink>
        <RouterLink to="/materials">Банк методических материалов</RouterLink>
      </nav>
    </div>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-width: 300px;
  background-color: #f8f9fa;
  border-right: 1px solid #e9ecef;
}

.logo {
  display: block;
  margin: 0 auto 1rem;
}

nav {
  width: 100%;
  font-size: 16px;
  text-align: center;
  margin-top: 1rem;
}

nav a {
  display: block;
  padding: 0.75rem 1rem;
  border-left: 4px solid transparent;
  text-decoration: none;
  color: var(--color-text);
  transition: all 0.3s ease;
  margin: 0.25rem 0;
}

nav a:hover {
  background-color: #e9ecef;
  border-left-color: #42b883;
}

nav a:first-of-type {
  border-left: 4px solid transparent;
}

nav a.router-link-active {
  color: #00bcd4; /* Голубой цвет как у заголовка */
  font-weight: bold;
  background-color: #e3f2fd; /* Светло-голубой фон */
  border-left-color: #008c9e; /* Голубая левая граница */
}

@media (min-width: 1024px) {
  body {
    min-height: 100vh;
    margin: 0;
  }

  #app {
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    padding: 0;
  }

  header {
    position: sticky;
    top: 0;
    height: 100vh;
    overflow-y: auto;
    padding: 1rem;
    width: 300px;
    flex-shrink: 0;
  }

  main {
    flex: 1;
    padding: 2rem;
    overflow-y: auto;
  }

  .logo {
    margin: 1rem auto;
  }

  nav {
    text-align: left;
    margin-top: 2rem;
  }
}

@media (max-width: 1023px) {
  #app {
    flex-direction: column;
  }
  
  header {
    width: 100%;
    height: auto;
    position: static;
  }
  
  nav a {
    display: inline-block;
    margin: 0 0.5rem;
    border-left: none;
    border-bottom: 3px solid transparent;
  }
  
  nav a.router-link-active {
    border-left: none;
    border-bottom-color: #42b883;
  }
}
</style>