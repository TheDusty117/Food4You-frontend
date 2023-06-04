<template>
  <div class="container mt-5 mb-5 px-5 py-4">
    <div class="row">
      <div class="col-md-12">
        <div class="card-deck">
          <div v-for="(food, index) in cart" :key="index" class="card mt-3">
            <div class="card-body">
              <h5 class="card-title">{{ food.name }} ({{ food.quantity }} unità)</h5>
              <p class="card-text">€ {{ food.price }}</p>
              <button @click="removeFoodFromCart(index)" class="btn btn-danger m-2">Cancella cibo</button>
              <button @click="removeOneFoodFromCart(index)" class="btn btn-primary m-2">Rimuovi quantità</button>
            </div>
          </div>
        </div>
        <div v-if="isCartEmpty" class="alert alert-info mt-3">
          Il carrello è vuoto.
        </div>
        <div class="card mt-3">
          <div class="card-body green">
            <h5 class="card-title">Totale da pagare</h5>
            <p class="card-text">€ {{ totalToPay }}</p>
          </div>
        </div>
        <button @click="clearCart" class="btn btn-secondary m5-3 mx-3">Svuota il carrello</button>
        <button @click="confirmAbandonCart" class="btn btn-secondary mt-5 mb-5">Torna ai ristoranti</button>
        <PaymentForm />
        <ConfirmDialog v-if="showConfirmDialog" @confirm="abandonCart" @cancel="cancelAbandonCart">
          Sei sicuro di voler abbandonare il carrello?
        </ConfirmDialog>
      </div>
    </div>
  </div>
</template>

<script>
import PaymentForm from '../components/PaymentForm.vue'
import ConfirmDialog from '../components/ConfirmDialog.vue'

export default {
  components: {
    PaymentForm,
    ConfirmDialog,
  },
  data() {
    return {
      cart: [],
      showConfirmDialog: false,
    }
  },
  mounted() {
    this.initializeCart();
  },
  methods: {
    removeFoodFromCart(index) {
      this.cart.splice(index, 1);
      localStorage.setItem('foods', JSON.stringify(this.cart));
    },
    removeOneFoodFromCart(index) {
      const food = this.cart[index];
      if (food.quantity > 1) {
        food.quantity -= 1;
      } else {
        this.cart.splice(index, 1);
      }
      localStorage.setItem('foods', JSON.stringify(this.cart));
    },
    clearCart() {
      this.cart = [];
      localStorage.removeItem('foods');
    },
    initializeCart() {
      const storedData = localStorage.getItem('foods');
      if (storedData) {
        this.cart = JSON.parse(storedData);
      }
    },
    calculateTotalPrice() {
      let total = 0;
      this.cart.forEach((food) => {
        total += parseFloat(food.price) * food.quantity;
      });
      return total.toFixed(2);
    },
    confirmAbandonCart() {
      this.showConfirmDialog = true;
    },
    cancelAbandonCart() {
      this.showConfirmDialog = false;
    },
    abandonCart() {
      this.showConfirmDialog = false;
      this.$router.push('/restaurants'); // Assicurati di impostare il percorso corretto
    },
  },
  computed: {
    isCartEmpty() {
      return this.cart.length === 0;
    },
    totalToPay() {
      return this.calculateTotalPrice();
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  //border: 3px solid black;
  border-radius: 15px;
}




.container {
  background-color: #F7A42C;
  border-radius: 15px;
}
</style>
