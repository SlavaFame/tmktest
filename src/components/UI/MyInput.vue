<template>
    <input 
        type="text"
        class="searchBox-input" 
        :placeholder="placeholder"
        v-model="searchQuery"
    >
</template>
  
<script lang="ts">
export default {
    name:'my-input',
    props:{},
    data(){
        return {
            placeholder:'Поиск по названию статуса, например "В работе"',
        }
    }
  }
</script>

<style lang="scss">
.searchBox {
    position: relative;
    display: flex;
    width: 100%;
    
    &-input {
      width: 100%;
      height: 3rem;
      padding: 2rem 0 2rem 2rem;
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 1.9rem;
      position: relative;
      background: url(@/assets/img/search.svg) 99% / 2rem no-repeat;
      border: 0.2rem solid var(--grey);
      border-radius: 0.3rem;
    }
}
</style>