<template>
    <Header/>
    <main>
      <slot />
    </main>
    <Footer class="py-4 bg-slate-900 text-white">
      <div class="container">
        footer default layout
      </div>
    </Footer>
  </template>
  
  <script>
    import Header from '../components/Header.vue';
    import Footer from '../components/Footer.vue';
    export default {
      components: {
        Header,
        Footer,
      }
      
    }
  </script>
  
  <style lang="scss" scoped>
  
  </style>