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
            // console.log(food,'ho eliminato un cibo dal carrello', store.Cart)
            // localStorage.removeItem('foods')
            this.store.Cart.splice(index, 1)
            // Ottieni i dati dal localStorage
            const storedData = localStorage.getItem('foods');
            // Parsa i dati in un array
            const storedFoods = JSON.parse(storedData) || [];
            // Rimuovi l'elemento dall'array storedFoods utilizzando l'indice
            storedFoods.splice(index, 1);
            // Salva nuovamente i dati aggiornati nel localStorage:
            localStorage.setItem('foods', JSON.stringify(storedFoods));
        }
    },
    computed: {
        getLocalFood() {
            // localStorage.setItem('foods', JSON.stringify(this.store.NewFood))
            return JSON.parse(localStorage.getItem('foods'));
        },
        removeAllFromCart(){
            food.removed = true;
            localStorage.removeItem('foods')
            return 
        }
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