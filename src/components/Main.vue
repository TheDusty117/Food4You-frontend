<template>
  <div class="container">
    <h1>SONO MAIN</h1>
    <Restaurants/>
    <Cart/>
   </div>
</template>

<script>
  import Restaurants from './partials/Restaurants.vue';
  import Cart from './Cart.vue';

  export default {
    components: {
      Restaurants,
      Cart
    }
  }
</script>

<style lang="scss" scoped>

</style>