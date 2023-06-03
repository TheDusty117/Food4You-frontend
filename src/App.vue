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
  <Header></Header>
  <router-view></router-view>
  <Footer></Footer>
</template>

<style >

.title {
  padding: 2rem 0;
}

#app{
  background-color: rgb(255, 255, 255);
}


</style>
