<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <!-- Gruppo di carte rappresentanti i cibi nel carrello -->
        <div class="card-deck">
          <!-- Itera attraverso gli elementi del carrello -->
          <div v-for="(food, index) in cart" :key="index" class="card mb-3 mt-3"
            :style="{ transitionDelay: `${index * 0.1}s` }">
            <div class="card-body">
              <div class="card-title">
                <!-- Nome e quantità del cibo -->
                <h5>{{ food.name }}</h5>
                <div class="quantity-controls">
                  <!-- Pulsante per aumentare la quantità del cibo nel carrello -->
                  <button @click="increaseQuantity(index)" class="btn btn-success m-2">+</button>
                  <h6>{{ food.quantity }}</h6>
                  <!-- Pulsante per diminuire la quantità del cibo nel carrello -->
                  <button @click="decreaseQuantity(index)" class="btn btn-danger m-2">-</button>
                </div>

              </div>
              <!-- Prezzo del cibo -->
              <p class="card-text">€ {{ calculatePrice(food) }}</p>
              <div class="button-group">


              </div>
            </div>
          </div>
        </div>
        <!-- Messaggio di avviso quando il carrello è vuoto -->
        <div v-if="isCartEmpty" class="alert alert-info mt-3">
          Il carrello è vuoto.
        </div>
        <!-- Totale da pagare -->
        <div class="card no-shadow mt-3">
          <div class="card-body">
            <h5 class="card-title">Totale da pagare</h5>
            <p class="card-text">€ {{ totalToPay }}</p>
          </div>
        </div>
        <!-- Pulsante per svuotare il carrello -->
        <button @click="clearCart" class="btn btn-warning m-3">Svuota il carrello</button>
        <!-- Pulsante per tornare alla pagina dei ristoranti -->
        <button @click="confirmAbandonCart" class="btn btn-outline-dark mt-5 mb-5">Torna ai ristoranti</button>

        <!-- Componente per la finestra di dialogo di conferma per lo svuotamento del carrello -->
        <ConfirmDialog v-if="showConfirmClearDialog" @confirm="confirmClearCart" @cancel="cancelClearCart">
          Sei sicuro di voler svuotare il carrello?
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
      cart: [], // Array che contiene i cibi nel carrello
      showConfirmClearDialog: false, // Flag per mostrare la finestra di dialogo di conferma per lo svuotamento del carrello
    }
  },
  mounted() {
    this.initializeCart(); // Inizializza il carrello caricando i dati dal localStorage
  },
  methods: {
    removeFoodFromCart(index) {
      const food = this.cart[index];
      food.removing = true;
      setTimeout(() => {
        // Rimuove il cibo dal carrello
        this.cart.splice(index, 1);
        // Salva i dati aggiornati nel localStorage
        localStorage.setItem('foods', JSON.stringify(this.cart));
      }, 300);
    },
    increaseQuantity(index) {
      const food = this.cart[index];
      // Aumenta la quantità del cibo nel carrello
      food.quantity += 1;
      // Salva i dati aggiornati nel localStorage
      localStorage.setItem('foods', JSON.stringify(this.cart));
    },
    decreaseQuantity(index) {
      const food = this.cart[index];
      if (food.quantity > 1) {
        // Diminuisce la quantità del cibo nel carrello
        food.quantity -= 1;
        // Salva i dati aggiornati nel localStorage
        localStorage.setItem('foods', JSON.stringify(this.cart));
      } else {
        this.removeFoodFromCart(index);
      }
    },
    clearCart() {
      this.showConfirmClearDialog = true; // Mostra la finestra di dialogo di conferma per lo svuotamento del carrello
    },
    confirmClearCart() {
      this.cart = []; // Svuota il carrello
      localStorage.removeItem('foods'); // Rimuove i dati dal localStorage
      this.showConfirmClearDialog = false; // Nasconde la finestra di dialogo di conferma
    },
    cancelClearCart() {
      this.showConfirmClearDialog = false; // Nasconde la finestra di dialogo di conferma
    },
    initializeCart() {
      const storedData = localStorage.getItem('foods');
      if (storedData) {
        this.cart = JSON.parse(storedData); // Carica i dati dal localStorage nel carrello
      }
    },
    calculateTotalPrice() {
      let total = 0;
      this.cart.forEach((food) => {
        // Calcola il prezzo totale sommando il prezzo di ogni cibo moltiplicato per la quantità
        total += parseFloat(food.price) * food.quantity;
      });
      return total.toFixed(2);
    },
    calculatePrice(food) {
      if (food.quantity > 1) {
        // Calcola il prezzo del cibo moltiplicando il prezzo per la quantità se la quantità è maggiore di 1
        return (parseFloat(food.price) * food.quantity).toFixed(2);
      } else {
        return food.price;
      }
    },
    confirmAbandonCart() {
      // Reindirizza l'utente alla pagina dei ristoranti
      this.$router.push('/restaurants');
    },
  },
  computed: {
    isCartEmpty() {
      return this.cart.length === 0; // Verifica se il carrello è vuoto
    },
    totalToPay() {
      return this.calculateTotalPrice(); // Calcola il totale da pagare
    },
  },
}
</script>

<style lang="scss" scoped>
.no-shadow {
  box-shadow: none !important;
}

.card-body {
  border-radius: 15px;
}

.quantity-controls {
  display: flex;
  align-items: baseline;
}


.card-body:last-child {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 10px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.card {
  border-radius: 15px;
  transition: opacity 0.3s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.remove-animation {
  opacity: 0;
}

.card-deck {
  margin-bottom: 55px;
}

.button-group {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.card-text {
  font-family: 'Fredoka One', 'sans-serif';
}

.card-text:last-child {
  font-size: 30px;
}

.btn {
  margin: 0.5rem;
}

@media (max-width: 575px) {
  .container {
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
