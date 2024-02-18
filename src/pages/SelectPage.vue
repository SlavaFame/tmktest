<template>

    <div class="container">
        <my-input 
            v-model="searchQuery" 
        />
        <select-list 
            :options="searchOptions"
            v-model="picked"
        />
    </div>
</template>

<script lang="ts">
    import SelectList from '@/components/UI/SelectList.vue';
    import MyInput from '@/components/UI/MyInput.vue';

    export default {
        components: {
            SelectList, MyInput
        },
        
        data() {
            return {
                picked:'',
                searchQuery:'',
                
                options: [
                    { id:1, title:'Ожидает оценки', status:'waitingReview' },
                    { id:2, title:'Оценена, ожидает подтверждения оценки', status:'waitingСonfirmation' },
                    { id:3, title:'Оценка отклонена', status:'rejected' },
                    { id:4, title:'Оценка подтверждена, ожидает принятия в разработку', status:'awaitingDevelopment' },
                    { id:5, title:'В очереди к исполнению', status:'inQueue' },
                    { id:6, title:'Пауза', status:'onPause' },
                    { id:7, title:'В работе', status:'atWork' },
                    { id:8, title:'Тестирование менеджером', status:'checkingManager' },
                    { id:9, title:'На проверку на тесте', status:'testing' },
                ]
            }
        },
        computed: {
            searchOptions(){
                return this.options.filter(option => {
                    return option.title.toLowerCase().includes(this.searchQuery.toLowerCase());
                })
            }
        }
    }
</script>