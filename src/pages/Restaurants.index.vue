<template>
  <Hero />
  <Restaurants />
</template>
  
<script>

import Restaurants from '../components/Restaurants.vue';
import Hero from '../components/Hero.vue';

export default {
  components: {
    Restaurants,
    Hero,


  }

}
</script>
  
<style scoped></style>