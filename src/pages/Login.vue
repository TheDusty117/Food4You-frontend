<template>
    <section>
       <div class="container text-center">
           <div class="row justify-content-around pt-5">
   
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

<style lang="scss">

</style>