<template>
    <DefaultLayout>
        <div class="container">
        <h1>sono la home</h1>
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

</style>