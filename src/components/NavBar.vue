<template>
    <nav class="navbar container">
      <div class="navbar-link" @click="$router.push('/')">Главная</div>
      <div class="navbar-link" @click="$router.push('/select/')">Задание 1</div>
      <div class="navbar-link" @click="$router.push('/test/')">Задание 2</div>
    </nav>
</template>

<script lang="ts">
export default {
  name: 'my-navbar'
}
</script>