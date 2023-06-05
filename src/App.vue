<script>
import '@fontsource/modak';

// import Posts from './components/Restaurants.vue'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
    // Restaurants
  }
}

</script>

<template>
  <!-- <Header></Header> -->
  <router-view></router-view>
  <!-- <Footer></Footer> -->
</template>

<style >
.title {
  padding: 2rem 0;
}


#app {
  /* background-image: url('./public/img/black-n-white-bg-filters.png');
  background-position: center;
  background-repeat: no-repeat; */
  
}

</style>
