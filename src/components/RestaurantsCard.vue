<template>
  <div class="container">

    <div class="card-custom">

      
      <router-link style="text-decoration: none; color: black;" :to="{ name: 'restaurants.show', params: { slug: restaurant.slug } }">
        
        <!-- immagine ristorante -->
        <img class="restaurant-logo img-fluid" :src="restaurant.img_restaurant" alt="">
        <!-- categorie del ristorante singolo -->
        <h4 class="card-subtitle mb-3"></h4>
        <h3 class="card-title">{{ restaurant.name }}</h3>
        <p class="card-text">{{ restaurant.address }}</p>
        <ul v-if="restaurant.categories && restaurant.categories.length > 0" class="individual-restaurant list-unstyled d-flex gap-3">
          <li v-for="cat in restaurant.categories" :key="cat.id" class="mb-2">{{ cat.name }}</li>
        </ul>
      
      </router-link>

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
.card-custom {
  margin-bottom: 1rem;
}

.individual-restaurant{
  font-family: 'Baloo Bhaijaan 2 Variable', sans-serif;
  text-transform: uppercase;
}

.card-title {
  font-family: 'Fredoka One', sans-serif;
  font-size: 2rem;
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
