<template>
    <DefaultLayout>
      <template v-if="loading === false">
        <div class="container py-4">
  
          <h1 class="text-3xl font-bold">
            {{ restaurants.name }}
          </h1>
          <h2>{{  restaurants.user.name }}</h2>
          <p class="bg-amber-400 px-3 rounded-full w-max" v-if="restaurants.category">{{ restaurants.category.name }}</p>
  
          <ul class="flex gap-2 items-center flex-wrap">
            <li class="italic text-slate-500" v-for="category in restaurants.categories" :key="category.slug">{{ category.name }}</li>
          </ul>
        </div>
  
  

  
      </template>

    </DefaultLayout>
  </template>

<script>
import DefaultLayout from '../layouts/Default.vue';
import RestaurantsCard from '../components/RestaurantsCard.vue';
    export default {
        components: {
      DefaultLayout,
      RestaurantsCard,
    },
    }
</script>

<style lang="scss" scoped>

</style>