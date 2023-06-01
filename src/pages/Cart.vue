<template>
    <div class="container">


        <div class="grid">

  

            <div  v-for="(food, index) in store.Cart" :key="index" class="card">
                
                <p>
                    {{ food.name }}
                </p>
                <p>
                    {{ food.price }}
                </p>
                
                <button @click="RemoveFoodToCart(index, food)">
                    Delete food
                    
                </button>

                <div  v-for="(food, index) in getLocalFood" :key="index"></div>
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
            
            
            // localStorage.removeItem('foods')
            if (this.store.Cart.length > index) {
                this.store.Cart.splice(index, 1);
                localStorage.setItem('foods', JSON.stringify(this.store.Cart));
            }
            
        }
    },
    computed: {
        getLocalFood() {
            
            const storedData = localStorage.getItem('foods');
            this.store.Cart = JSON.parse(storedData) || [];
            // if (storedData) {
            //     this.store.Cart = JSON.parse(storedData);
            // }
            // localStorage.setItem('foods', JSON.stringify(this.store.NewFood))
           // return JSON.parse(localStorage.getItem('foods'));
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