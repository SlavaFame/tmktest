<template>
  <NavBar></NavBar>
  <router-view/>
</template>

<script lang="ts">
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
:root {
  --white: white;
  --purple: #8900df;
  --brown: #733125;
  --green: #21bf21;
  --grey: grey;
  --light-grey: lightgrey;
  --blue: blue;
  --orange: #ec6608;
  --yellow: yellow; 
  --black: black;
  --red: #ff3e3e;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    outline: none;
}

html {
  font-size: 10px;
  line-height: 1.15;
}

#app {
  font-family: Ubuntu, sans-serif;
  color: var(--black);
  margin-top: 6rem;
  font-size: 1.6rem;
  line-height: 1.9rem;
}

.container {
    margin-right: auto;
    margin-left: auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem
}

.navbar {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 8rem;
  &-link {
    padding: 1rem 3rem;
    color: var(--black);
    cursor: pointer;
    &:hover {
      color: var(--white);
      background-color: var(--orange);
    }
  }
}

@media (min-width: 768px) {
    .container {
        width:750px
    }
}

@media (min-width: 992px) {
    .container {
        width:970px
    }
}

@media (min-width: 1200px) {
    .container {
        width:1170px
    }
}
</style>