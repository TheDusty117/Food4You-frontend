<template>
  <div class="container">
    <h1>SONO HEADER</h1>
    <ul class="d-flex justify-content-between">
      <li>
        <router-link :to="{name:home}" class="nav-link">Ristoranti</router-link>
      </li>
      <li>
        <router-link :to="{name:register}" class="nav-link">Registrati</router-link>
      </li>
      <li>
        <router-link :to="{name:login}" class="nav-link">Login</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>