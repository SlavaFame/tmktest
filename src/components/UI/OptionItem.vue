<template>
    <div 
        :class="[ 'resultsBox-item', option.status ]"
        >
        {{ option.id + ". " + option.title }}
    </div> 
</template>

<script lang="ts">
export default {
    name: 'my-option',
    props: {
        option: {
            type: Object
        }
    }
}
</script>