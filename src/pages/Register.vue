<template>

    <div class="container">
        <button @click="searchRegister">Register</button>

    </div>

    
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

<style lang="scss">

</style>