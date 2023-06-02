<template>
  <header class="header-style py-3 bg-slate-100">

    
    <div class="container nav">
      
      <div class="nav__item">
        <img class="main-logo" src="../../public/img/Logo Food4You shadow.png" alt="">
        <router-link style="text-decoration: none; color: inherit;" :to="{ name: 'home' }">Food4You</router-link>
      </div>
      
      <ul class="nav__menu">
        <li>
            <router-link style="text-decoration: none; color: inherit;" :to="{ name: 'home' }">Home</router-link>
        </li>
        <li>
          <router-link style="text-decoration: none; color: inherit;" :to="{ name: 'restaurants.index' }">Ristoranti</router-link>
        </li>
        <li>
          <router-link style="text-decoration: none; color: inherit;" :to="{ name: 'register' }">Registrati</router-link>
        </li>
        <li>
          <router-link style="text-decoration: none; color: inherit;" :to="{ name: 'login' }">Login</router-link>
        </li>
      </ul>
      
    </div>
    <Hero/>
  </header>
</template>

<script>
//FONT CICCIOTTO
import '@fontsource/modak';
//FONT SEMICICCIOTTO (OTTIMO PER NOMI RISTO/PIATTI/COSE IMPORTANTI)
import '@fontsource/fredoka-one';
//FONT REGOLARE NORMALE (descrizioni/dettagli e cose medio/piccole)
// Supports weights 400-800
import '@fontsource-variable/baloo-bhaijaan-2';


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

<style lang="scss" scoped>

.main-logo{
  width: 90px
}

header{
  font-family: 'Modak', sans-serif;
  .main-logo{
    
  }
  .nav__item{
    font-size: 38px;
    color: white;
    text-shadow: rgb(0, 0, 0) 2px 5px 10px;
    .main-logo{
      
    }
  }
  router-link{
    text-decoration: none;
  }
}

.nav,

.nav__menu {
  display: flex;
  align-items: center;
  gap: 2rem;
  
}

.nav__menu {
  margin-left: auto;
  li{
    list-style: none;
    font-family: 'Modak', sans-serif;
    font-size: 28px;
    color: white;
    text-shadow: rgb(0, 0, 0) 2px 5px 10px;

  }
}

header{
  background-color: #44B925;
  border: 5px solid black;
}

</style>