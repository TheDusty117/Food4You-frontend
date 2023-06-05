<template>
  <header @click="toggleMenu" class="header-style bg-slate-100">

    <div  class="container nav">

      <div  class="nav__item">
        <img  class="main-logo" src="../../public/img/Logo Food4You shadow.png" alt="">
        <router-link style="text-decoration: none; color: inherit;" :to="{ name: 'home' }">
          <span class="mobile nav-element">
            Food4You
          </span>
        </router-link>
      </div>

      
        <!-- <div class="burger-icon nav__burger"  @click="toggleMenu"></div> -->
      

      <ul class="nav__menu" :class="{ 'nav__menu--open': isMenuOpen }">
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
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style lang="scss" scoped>

.main-logo {
  width: 90px;
}

header {
  
  z-index: 999;
  top: 0;
  padding-top: 16px;
  min-height: 120px;
  position: sticky;
  font-family: 'Modak', sans-serif;
  
  .nav-element {
    text-transform: uppercase;
  }
  
  .nav__item {
    font-size: 38px;
    color: white;
    text-shadow: rgb(0, 0, 0) 2px 5px 10px;
    .main-logo {
      
    }
  }
  
  .nav__burger {
    display: none;
    cursor: pointer;
    padding: 10px;
    .burger-icon {
      width: 30px;
      height: 3px;
      background-color: white;
      margin: 6px 0;
      transition: all 0.3s ease;
    }
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
    text-shadow: rgb(0, 0, 0) 0 2px 4px rgba(0, 0, 0, 0.2);
  }
}

header {
  background-color: #44B925;
}

@media screen and (max-width: 1000px) {
  header {

    .mobile{
      display: none;
    }
    .nav {
      justify-content: center ;
    }
 
    .nav__menu {
      display: none;
      flex-direction: column;
      align-items: flex-start;
      padding-top: 2rem;
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background-color: #44B925;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
      transition: all 0.3s ease;
      opacity: 0;
      visibility: hidden;
      
      &.nav__menu--open {
        display: flex;
        opacity: 1;
        visibility: visible;
      }
      
      li {
        margin-bottom: 1rem;
      }

      .nav__item{
        align-self: center;
      }

    }
    
    .nav__burger {
      display: block;
    }
  }
}

</style>


