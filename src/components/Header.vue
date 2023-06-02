<template>
  <header class="header-style py-3 bg-slate-100">

    
    <div class="container nav">
      
      <router-link :to="{ name: 'home' }">Food4You</router-link>
      
      <ul class="nav__menu">
        <li>
          <router-link :to="{ name: 'home' }">Home</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'restaurants.index' }">Ristoranti</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'register' }">Registrati</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'login' }">Login</router-link>
        </li>
      </ul>
      
    </div>
    <Hero/>
  </header>
</template>

<script>

import Hero from './Hero.vue';


export default {

  components:{
    Hero,
  },

  mounted() {
    console.log('nav bar mounted hook')
  }
}
</script>

<style scoped>
.nav,
.nav__menu {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav__menu {
  margin-left: auto;
}

header{
  background-color: black;
}

</style>