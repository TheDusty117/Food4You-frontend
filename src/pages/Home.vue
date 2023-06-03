<template >
    <section>

    
    <DefaultLayout>
        
        <Hero/>

        
            <div class="container text-center">
            <div class="row justify-content-around">

                <h1 class="title">Scegli un nostro servizio</h1>

                <div class="col-6 d-flex justify-content-around">
                    <router-link  :to="{ name: 'register' }">
                    <button class="rounded-4 risto px-4">
                        <h2 class="my-auto">Ho un ristorante</h2>
                        
                    </button>
                    </router-link>
                </div>
                
                <div class="col-6 d-flex justify-content-around">
                    <router-link  :to="{ name: 'restaurants.index' }">
                        <button class="rounded-4 cibo px-4">
                            <h2 class="my-auto">Ho bisogno di cibo</h2>
                            
                        </button>
                    </router-link>
                </div>
                   
                   
                
                
            </div>
        </div>
        
        
        
    </DefaultLayout>
</section>
</template>

<script>
import Hero from '../components/Hero.vue';
//FONT CICCIOTTO
import '@fontsource/modak';
//FONT SEMICICCIOTTO (OTTIMO PER NOMI RISTO/PIATTI/COSE IMPORTANTI)
import '@fontsource/fredoka-one';
//FONT REGOLARE NORMALE (descrizioni/dettagli e cose medio/piccole)
// Supports weights 400-800
import '@fontsource-variable/baloo-bhaijaan-2';
export default {
    components: {
        Hero,
    }
}
</script>

<style lang="scss">
.container {
    max-width: 960px;
    margin: 0 auto;
}

.title{
    font-family: 'Modak', sans-serif;
    text-transform: uppercase;
    font-size: 48px;
    color: #ffffff;
}

.mt-5 {
    margin-top: 3rem;
}

.bg-lightest-orange {
    background-color: #FEEBD7;
    /* Cambia il colore arancione chiarissimo a tua scelta */
}

section{
    height: 100vh;
}

button {
    height: 72px;   
}

h2{
    font-family: 'Fredoka-one', sans-serif;
    text-transform: uppercase;
    font-size: 48px;
    font-weight: 800;
    color: #ffffff;
}

.risto{
    background-color: rgb(247, 164, 44);
}
.cibo{
    background-color: rgb(68, 185, 37);
}
</style>
