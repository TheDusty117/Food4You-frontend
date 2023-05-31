<template >
    <DefaultLayout>
        <div class="">
            <div class="container">
                <h1 class="mt-5">Sono la home</h1>
                <Restaurants></Restaurants>
            </div>
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
