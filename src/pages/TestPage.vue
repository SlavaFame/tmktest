<template>
    <div class="container">
        <div class="test">

            <div v-for="question in questions"
                    :key="question.id"
                >
                <div class="test-item" 
                    v-if="question.show"
                    >
                    <div class="test-question">
                        <!-- {{ question.title }} -->
                        {{  getQuestion[number] }}
                    </div>
                
                    <div class="test-answers">
                        <div class="test-answers-item"
                            v-for="answers in question.answers"
                            :key="answers.id"
                            >
                            <input type="radio"       
                                :id="answers.id" 
                                :value="answers.text" 
                                v-model="picked"
                            >
                            <label 
                                :for="answers.id"
                                v-if="picked"
                                :class="answers.itsCorrect ? 'correct': 'wrong'"
                                @click="picked = answers.text"
                                >
                                {{ answers.text }}
                            </label>
                            <label 
                                :for="answers.id"
                                v-else
                                >
                                {{ answers.text }}
                            </label>
                            
                        </div>
                    </div>

                    <button 
                        class="btn-next" 
                        @click="number++"
                        v-if="number < 4"
                        >
                        Следующий вопрос
                    </button>

                    <div v-if="number == 4">Тест окончен. Правильные ответы: 0% </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            number:0,
            picked:'',
            questions:[
                {
                    id:1,
                    title:"Выберите столицу России",
                    show:true,

                    answers: [
                        { id:11, text:"Москва", itsCorrect:true },
                        { id:12, text:"Санкт-Петербург", itsCorrect:false },
                        { id:13, text:"Екатеринбург", itsCorrect:false },
                        { id:14, text:"Новосибирск", itsCorrect:false }
                    ]
                },
                {
                    id: 2,
                    title: "Выберите столицу США",
                    show: false,

                    answers: [
                        { id:21, text:"Вашингтон", itsCorrect:true },
                        { id:22, text:"Нью-Йорк", itsCorrect:false },
                        { id:23, text:"Лос-Анджелес", itsCorrect:false },
                        { id:24, text:"Бостон", itsCorrect:false }
                    ]
                },
                {
                    id: 3,
                    title: "Выберите столицу Австралии",
                    show: false,

                    answers: [
                        { id:31, text:"Сидней", itsCorrect:false },
                        { id:32, text:"Канберра", itsCorrect:true },
                        { id:33, text:"Мельбурн", itsCorrect:false },
                        { id:34, text:"Брисбен", itsCorrect:false }
                    ]
                },
                {
                    id: 4,
                    title: "Выберите столицу Италии",
                    show: false,

                    answers: [
                        { id:41, text:"Рим", itsCorrect:true },
                        { id:42, text:"Милан", itsCorrect:false },
                        { id:43, text:"Неаполь", itsCorrect:false },
                        { id:44, text:"Турин", itsCorrect:false }
                    ]
                },
            ]
        }
    },
    computed: {
        getQuestion: function () {
            return this.questions.map((i, index) => {
                return i.title;
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.test {
    &-question {
        margin-bottom: 3rem;
        font-size: 2rem;
        line-height: 2.1rem;
    }
    &-answers {
        &-item {
            margin-bottom: 2rem;
            display: flex;
            align-items: center;
            gap: 1.5rem;
        }
    }
}

label {
    cursor: pointer;
    padding: 0 2rem;
    &.correct {
        background-color: var(--green);
    }
    &.wrong {
        background-color: var(--red);
    }
}

.btn-next {
    cursor: pointer;
    padding: 1rem;
    margin-bottom: 2rem;
}
</style>