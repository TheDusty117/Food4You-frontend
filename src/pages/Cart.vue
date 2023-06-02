<template>
    <div class="container">
        <div v-if="this.store.Cart.length <= 0">
            <h1>Nessun Elemento</h1>
        </div>

        <div v-else class="grid">
            <div v-for="(food, index) in store.Cart" :key="index" class="card">
                <p>{{ food.name }}</p>
                <p>{{ food.price }}</p>
                <button @click="RemoveFoodToCart(index, food)">
                    Delete food
                </button>
            </div>
        </div>
    </div>

    <div>
        <PaymentForm />
    </div>
</template>
  
<script>
import store from '../store'

import PaymentForm from '../components/PaymentForm.vue'
export default {


    components: {
        PaymentForm
    },


    data() {
        return {
            store
        }
    },
    mounted() {
        this.getLocalFood()
    },
    methods: {
        RemoveFoodToCart(index, food) {
            this.store.Cart.splice(index, 1);
            localStorage.setItem('foods', JSON.stringify(this.store.Cart));
        },
        getLocalFood() {
            const storedData = localStorage.getItem('foods');
            if (storedData) {
                this.store.Cart = JSON.parse(storedData);
            }
        },
    },
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