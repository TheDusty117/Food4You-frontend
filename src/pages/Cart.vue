<template>
    <div class="container">
        <div class="grid">
            <div v-for="(food, index) in getLocalFood" :key="index" class="card">
                <div v-if="food">

                    <p>
                        {{ food.name }}
                    </p>
                    <p>
                        {{ food.price }}

                    </p>
                    <button @click="RemoveFoodToCart(index, food)">
                        Delete food

                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import store from '../store'

export default {
    data() {
        return {
            store
        }
    },
    methods: {
        RemoveFoodToCart(index, food) {
            // localStorage.clear()
            console.log(food)
            localStorage.removeItem('foods')
            store.NewFood.splice(index, 1)
        }
    },
    computed: {
        getLocalFood() {
            // localStorage.setItem('foods', JSON.stringify(this.store.NewFood))
            return JSON.parse(localStorage.getItem('foods'));
        },
    }
}
</script>

<style lang="scss" scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(3, 3fr);
    gap: 20px;
}

img {
    aspect-ratio: 12/9;
    height: 200px;
}

.card {
    padding: 10px;
    border: 3px solid;
}
</style>