<template>

        <div class="container">
         <h1>sono il login</h1>
            <button @click="searchLogin">Login</button>
        </div>

    
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