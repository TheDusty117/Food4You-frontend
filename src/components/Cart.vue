<template>
    <div>
      <h2>Carrello</h2>
      <ul>
        <li v-for="(item, foodId) in cart" :key="foodId">
          {{ item.food.name }} - Quantità: {{ item.quantity }}
          <button @click="removeFromCart(foodId)">Rimuovi</button>
        </li>
      </ul>
      <button @click="checkout">Checkout</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        cart: {},
      };
    },
    mounted() {
      this.getCartFromLocalStorage();
      this.loadCart();
    },
    methods: {
      saveCartToLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
      },
      getCartFromLocalStorage() {
        const cartData = localStorage.getItem('cart');
        if (cartData) {
          this.cart = JSON.parse(cartData);
        }
      },
      loadCart() {
        axios.get('/api/cart')
          .then(response => {
            this.cart = response.data.cart;
            this.saveCartToLocalStorage();
          })
          .catch(error => {
            console.log(error);
          });
      },
      removeFromCart(foodId) {
        axios.delete(`/api/cart/${foodId}`)
          .then(response => {
            this.loadCart();
          })
          .catch(error => {
            console.log(error);
          });
      },
      checkout() {
        // Implementa la logica per il checkout del carrello
      },
    },
  };
  </script>
  