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

<style lang="scss" scoped>
.footer {
  background-color: limegreen;
  padding: 20px;
  text-align: center;
}

.footer-text {
  color: white;
  font-size: 16px;
  margin: 0;
}

.footer-links {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.footer-column {
  flex: 1;
  margin-right: 30px;
}

.footer-column h3 {
  color: white;
  font-size: 18px;
  margin-bottom: 10px;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column li {
  margin-bottom: 8px;
  font-size: 14px;
}

.footer-column li a {
  color: white;
  text-decoration: none;
  cursor: pointer;
}

.footer-column li a:hover {
  color: black;
}
</style>