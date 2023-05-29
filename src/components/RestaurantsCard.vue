<template>
    <div class="post-card">
      <router-link :to="{ name: 'restaurants.show', params: { slug: restaurants.slug } }">
        <h3>{{ restaurants.name }}</h3>
        <p>{{ restaurant.category ? restaurant.category.name : '-' }}</p>
        <ul class="tag-list" v-if="restaurant.category && restaurant.category.length > 0">
          <li class="tag" v-for="category in restaurant.category" :key="category.id">{{ category.name }}</li>
        </ul>
      </router-link>
    </div>
  </template>
  
  <script>

    export default {
      components: {
        
      },
      props: {
        restaurants: {
          type: Object,
          required: true
        }
      },
      mounted() {
        // console.log(this.post.category)
      },
    }
  </script>
  
  <style scoped>
  
  .tag-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    list-style: none;
  }
  
  .tag {
    padding: 0 1rem;
    line-height: 24px;
    font-size: 12px;
    border-radius: 999px;
    background: #a7a7a7;
  }
  </style>