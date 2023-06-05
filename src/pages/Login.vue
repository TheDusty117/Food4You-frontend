<template>
    <section>
       <div class="container text-center">
           <div class="row justify-content-around py-5">
   
               <h1 class="title">Gestisci il tuo ristorante</h1>
   
   
               
               
   
               <button class="rounded-4 risto px-4 my-3" @click="searchRegister">
                   <h2 class="my-auto">
                       Log in
                   </h2>
               </button>
   
               <div class="info">
                   <p> Non hai ancora un account? Allora 
                       <router-link  :to="{ name: 'register' }"><a href="">registrati</a></router-link>
                       </p>
               </div>
               
   
           </div>
           
       </div>
   </section>
   
       
   </template>
<script>


    export default {


        methods:{
            searchLogin(){
                window.location.href = 'http://127.0.0.1:8000/login'
            }
        },

        components: {

     
        }
    }
</script>

<style lang="scss" scoped>
section{
    background-image: url('../../public/img/black-n-white-bg-filters.png');
    background-size: cover;
    min-height: 60vh;
}

.title{
    font-family: 'Modak', sans-serif;
    text-transform: uppercase;
    font-size: 48px;
    color:rgb(247, 164, 44);
}

.risto{
    background-color: rgb(247, 164, 44);
}

.container{
    height: 100%;
}

.info{
    background-color: black;
    color: #ffffff;
    font-size: 36px;
    ul{
        list-style-type: none;
        padding: 0;
    }
}

h2{
    font-family: 'Fredoka-one', sans-serif;
    text-transform: uppercase;
    font-size: 48px;
    font-weight: 800;
    color: #ffffff;
}

@media screen and (max-width: 1000px) {


.title {
  font-size: 36px;
}

button {
  height: 100px;
}

h2 {
  font-size: 36px;
}
}
</style>