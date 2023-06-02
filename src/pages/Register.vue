<template>
    <div class="container">
        <h1>TI STIAMO REINDIRIZZANDO</h1>
        <button class="btn btn-success">

            <div @click="submitSearchRegister">REGISTRATI</div>
        </button>
    </div>
</template>

<script>


export default {
    components: {

    },
    methods: {
        submitSearchRegister() {
            // Esegui azione di ricerca
            window.location.href = 'http://127.0.0.1:8000/register' //+ encodeURIComponent(this.searchQuery);
        },
    }
}
</script>

<style lang="scss"></style>