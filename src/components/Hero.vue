<template>
  <div class="hero">
    
  </div>
</template>

<script>
import '@fontsource/modak';
  export default {
    
  }
</script>


<style lang="scss" scoped>

  .hero{
    background-image: url("../../public/img/HERO DEF.png");
      height: 50vh;
      width: 100vw;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 50%;
  }

  @media screen and (max-width: 1000px){
    .hero{
      background-image: url("../../public/img/HERO DEF.png");
      height: 50vh;
      width: 100vw;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 50%;
    }

  }

  @media screen and (max-width: 700px){
    .hero{
      background-image: url("../../public/img/HERO DEF.png");
      height: 25vh;
      width: 100vw;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 50%;
    }

  }

</style>