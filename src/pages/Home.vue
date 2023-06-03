<template >
    <DefaultLayout>
        <div class="">
            <Restaurants></Restaurants>        
        </div>
    </DefaultLayout>
</template>

<script>
import Restaurants from '../components/Restaurants.vue';

export default {
    components: {
        Restaurants,
    }
}
</script>

<style lang="scss">
.container {
    max-width: 960px;
    margin: 0 auto;
}

.mt-5 {
    margin-top: 3rem;
}

.bg-lightest-orange {
    background-color: #FEEBD7;
    /* Cambia il colore arancione chiarissimo a tua scelta */
}
</style>
