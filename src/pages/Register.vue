<template>
 <section>
    <div class="container text-center">
        <div class="row justify-content-around pt-5">

            <h1 class="title">Registra il tuo ristorante</h1>


            <div class="info rounded-4 col-6 col-12 my-3">
                <ul class="my-3">
                    <li class="my-3">Unisciti alla community</li>
                    <li class="my-3">Inserisci i tuoi piatti</li>
                    <li class="my-3">Ricevi ordini da tutta Roma</li>
                </ul>
            </div>
                
            

            <button class="rounded-4 risto px-4 my-3" @click="searchRegister">
                <h2 class="my-auto">
                    Registrati
                </h2>
            </button>

            <div class="info my-5">
                <p> Hai già un account? Allora fai il 
                    <router-link  :to="{ name: 'login' }"><a href="">login</a></router-link>
                    </p>
            </div>
            

        </div>
        
    </div>
</section>

    
</template>

<script>


    export default {

        methods:{
            searchRegister(){
                window.location.href = 'http://127.0.0.1:8000/register'
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
    min-height: 50vh;
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