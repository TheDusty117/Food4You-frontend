<template>
  <header class="header-style py-3 bg-slate-100">


    <div class="container nav">

      <div class="nav__item">
        <img class="main-logo" src="../../public/img/Logo Food4You shadow.png" alt="">
        <router-link style="text-decoration: none; color: inherit;" :to="{ name: 'home' }">
          <span class="nav-element">
            Food4You
          </span>
        </router-link>
      </div>

      <ul class="nav__menu mb-0">
        <li>
          <router-link style="text-decoration: none; color: inherit;" :to="{ name: 'home' }">
            <span class="nav-element">
              Home
            </span>
          </router-link>
        </li>
        <li>
          <router-link style="text-decoration: none; color: inherit;" :to="{ name: 'restaurants.index' }">
            <span class="nav-element">
              Ristoranti
            </span>
          </router-link>
        </li>
        <li>
          <router-link style="text-decoration: none; color: inherit;" :to="{ name: 'register' }">
            <span class="nav-element">
              Registrati
            </span>
          </router-link>
        </li>
        <li>
          <router-link style="text-decoration: none; color: inherit;" :to="{ name: 'login' }">
            <span class="nav-element">
              Login
            </span>
          </router-link>
        </li>
      </ul>

    </div>

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

  components: {
    Hero,
  },

  mounted() {
    console.log('nav bar mounted hook')
  }
}
</script>

<style lang="scss" scoped>
.main-logo {
  width: 90px
}

header {
  top: 0;
  height: 124px;
  position: sticky;
  font-family: 'Modak', sans-serif;
  z-index: 5;

  .nav-element {
    text-transform: uppercase;
  }

  .nav__item {
    font-size: 38px;
    color: white;
    text-shadow: rgb(0, 0, 0) 2px 5px 10px;

  }

  router-link {
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

  li {
    list-style: none;
    font-family: 'Modak', sans-serif;
    font-size: 28px;
    color: white;
    text-shadow: rgb(0, 0, 0) 2px 5px 10px;

  }
}

header {
  background-color: #44B925;

}
</style>