<template>
  <div class="searchBox">
    <div class="resultsBox">
      <option-item 
          v-for="(option) in options"
          :key="option"
          :option="option"
      >
      </option-item>
    </div>
  </div>
</template>

<script lang="ts">
import OptionItem from "@/components/UI/OptionItem.vue";

export default {
    name: 'my-select',
    components: {
      OptionItem
    },
    props: {
        options: {
            type: Array,
            required: true
        } 
    }
}
</script>

<style lang="scss" scoped>
.resultsBox {
    display: flex;
    flex-direction: column;
    position: absolute;
    inset: 0;
    z-index: 1;
    box-shadow: 0 0.2rem 0.4rem 0 rgba(32, 33, 36, 0.28);
    border-radius: 0 0 0.3rem 0.3rem;

    &-item {
      display: flex;
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 1.9rem;
      width: 100%;
      padding: 0.75rem 0 0.75rem 2rem;
      cursor: pointer;
    }
}

/* All States */
.waitingReview {
  background-color: var(--yellow);
}
.waitingСonfirmation {
  background-color: var(--purple);
  color: var(--white);
}
.rejected {
  background-color: var(--brown);
  color: var(--white);
}
.awaitingDevelopment {
  color: var(--green);
}
.inQueue {
  color: var(--black);
}
.onPause {
  background-color: var(--grey);
  color: var(--white);
}
.atWork {
  color: var(--blue);
}
.checkingManager {
  background-color: var(--light-grey);
  color: var(--green);
}
.testing {
  background-color: var(--orange);
  color: var(--black);
}
</style>