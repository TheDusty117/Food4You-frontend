<template>
  <div class="card-deck">
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">{{ restaurant.name }}</h3>
        <p class="card-text">{{ restaurant.address }}</p>

        <h4 class="card-subtitle mb-3">Categoria</h4>
        <ul v-if="restaurant.categories && restaurant.categories.length > 0" class="list-unstyled">
          <li v-for="cat in restaurant.categories" :key="cat.id" class="mb-2">{{ cat.name }}</li>
        </ul>

        <router-link :to="{ name: 'restaurants.show', params: { slug: restaurant.slug } }"
          class="btn btn-primary">Apri</router-link>
      </div>
    </div>
  </div>
</template>

  
<script>
export default {
  props: {
    restaurant: {
      type: Object,
      required: true,
    }
  },
  mounted() {
    console.log(this.restaurant.category)
  },
}
</script>
  
<style lang="scss" scoped>
.card {
  width: 18rem;
  margin-bottom: 1rem;
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
}

.card-subtitle {
  font-size: 1.2rem;
  font-weight: bold;
  color: #777;
}

.btn-primary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0069d9;
  border-color: #0062cc;
}
</style>
