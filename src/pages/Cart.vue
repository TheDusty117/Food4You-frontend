<template>
  <div>
    <div v-for="(food, index) in store.Cart" :key="index" class="card">
      <p>{{ food.name }} ({{ food.quantity }} unità)</p>
      <p>{{ food.price }}</p>
      <button @click="RemoveFoodToCart(index, food)">Delete food</button>
      <button @click="RemoveOneFoodFromCart(index, food)">Remove One</button>
    </div>
    <div v-if="isCartEmpty" >
      Il carrello è vuoto.
    </div>
    <button @click="ClearCart">Svuota il carrello</button>
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
      this.initializeCart();
    },
    created() {
      this.initializeCart();
    },
  methods: {
      RemoveFoodToCart(index, food) {
        this.store.Cart.splice(index, 1);
        localStorage.setItem('foods', JSON.stringify(this.store.Cart));
      },
      RemoveOneFoodFromCart(index, food) {
        if (food.quantity > 1) {
          food.quantity -= 1; // Diminuisce la quantità di 1
        } else {
          this.store.Cart.splice(index, 1); // Rimuove completamente l'elemento dal carrello
        }
        localStorage.setItem('foods', JSON.stringify(this.store.Cart));
      },
      ClearCart() {
        this.store.Cart = []; // Rimuove tutti gli elementi dal carrello
        localStorage.removeItem('foods'); // Rimuove il carrello dal localStorage
      },
      initializeCart() {
        const storedData = localStorage.getItem('foods');
        if (storedData) {
          this.store.Cart = JSON.parse(storedData);
        }
      },
  },
  computed:{
    isCartEmpty() {
      //console.log(this.isCartEmpty)
    return this.store.Cart.length === 0; 
  },
    uniqueCart() {
    const uniqueItems = [];
    this.store.Cart.forEach((food) => {
      const existingItem = uniqueItems.find((item) => item.name === food.name);
      if (!existingItem) {
        uniqueItems.push(food);
      }
    });
    return uniqueItems;
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