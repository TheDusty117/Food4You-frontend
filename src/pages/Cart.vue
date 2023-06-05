<template>
  <div class="background-img pt-5 pb-5">
    <div class="container px-5 mn-5">
      <div class="row">
        <div class="col-md-12">
          <div class="card-deck">
            <div v-for="(food, index) in cart" :key="index" class="card mb-3 mt-5"
              :style="{ transitionDelay: `${index * 0.1}s` }">
              <div class="card-body">
                <h5 class="card-title">{{ food.name }} ({{ food.quantity }} unità)</h5>
                <p class="card-text">€ {{ food.price }}</p>
                <div class="">
                  <button @click="removeFoodFromCart(index)" class="btn btn-danger m-2">Cancella cibo</button>
                  <button @click="removeOneFoodFromCart(index)" class="btn btn-primary m-2">Rimuovi quantità</button>
                </div>
              </div>
            </div>
          </div>
          <div v-if="isCartEmpty" class="alert alert-info mt-3">
            Il carrello è vuoto.
          </div>
          <div class="card mt-3">
            <div class="card-body">
              <h5 class="card-title">Totale da pagare</h5>
              <p class="card-text">€ {{ totalToPay }}</p>
            </div>
          </div>
          <button @click="clearCart" class="btn btn-secondary m-3">Svuota il carrello</button>
          <button @click="confirmAbandonCart" class="btn btn-secondary mt-5 mb-5">Torna ai ristoranti</button>
          <PaymentForm />
          <ConfirmDialog v-if="showConfirmClearDialog" @confirm="confirmClearCart" @cancel="cancelClearCart">
            Sei sicuro di voler svuotare il carrello?
          </ConfirmDialog>
        </div>
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
      showConfirmClearDialog: false,
    }
  },
  mounted() {
    this.initializeCart();
  },
  methods: {
    removeFoodFromCart(index) {
      const food = this.cart[index];
      food.removing = true;
      setTimeout(() => {
        this.cart.splice(index, 1);
        localStorage.setItem('foods', JSON.stringify(this.cart));
      }, 300);
    },
    removeOneFoodFromCart(index) {
      const food = this.cart[index];
      if (food.quantity > 1) {
        food.quantity -= 1;
      } else {
        food.removing = true;
        setTimeout(() => {
          this.cart.splice(index, 1);
          localStorage.setItem('foods', JSON.stringify(this.cart));
        }, 300);
      }
      localStorage.setItem('foods', JSON.stringify(this.cart));
    },
    clearCart() {
      this.showConfirmClearDialog = true;
    },
    confirmClearCart() {
      this.cart = [];
      localStorage.removeItem('foods');
      this.showConfirmClearDialog = false;
    },
    cancelClearCart() {
      this.showConfirmClearDialog = false;
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
      this.$router.push('/restaurants');
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
.background-img {
  background-image: url('./public/img/black-n-white-bg-filters.png');
  background-position: center;
  height: 100vh;
}

.card {
  border-radius: 15px;
  transition: opacity 0.3s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.remove-animation {
  opacity: 0;
}

.container {
  background-color: rgba(247, 164, 44, 0.7);
  border-radius: 15px;
}

.card-deck {
  margin-bottom: 20px;
}
</style>
