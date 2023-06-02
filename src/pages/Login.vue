<template>
    <div class="container">
        <h1>TI STIAMO REINDIRIZZANDO</h1>
        <button class="btn btn-success">
            <div @click="submitSearchLogin">LOGIN</div>
        </button>
    </div>
</template>

<script>


export default {
    components: {


    },
    methods: {
        submitSearchLogin() {
            window.location.href = 'http://127.0.0.1:8000/login'
        }
    }
}
</script>

<style lang="scss"></style>