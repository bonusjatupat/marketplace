<template>
  <div id="Index">
    <PromotionSlide />
    <div class="main-container">

      <!-- Your Favorite -->
      <div v-if="favProducts.length >= 1" class="container-fluid">
        <h2>Your NocNoc <span class="text-fav">Favorite(s)</span></h2>
      </div>
      <div class="row row-cols-sm-2 row-cols-md-3 row-cols-lg-5 container-card">
        <CardProduct v-for="product in favProducts" :key="product.id" :product="product" />
      </div>
      <div v-if="favProducts.length >= 1"><p></p></div>

      <!-- Work Hard, Shop Harder -->
      <div class="container-fluid">
        <h2>Work Hard, Shop Harder</h2>
      </div>
      <div class="row row-cols-sm-3 row-cols-md-4 row-cols-lg-6 container-card">
        <CardCategory v-for="category in categories" :key="category.id" :category="category" />
      </div>

      <!-- Recommended Products -->
      <HeaderCard
        icon="choices_orange.png"
        header="Recommended Products"
        subHeader="NocNoc has selected some products that might suit your profile"
      />
      <div class="row row-cols-sm-2 row-cols-md-3 row-cols-lg-5 container-card">
        <CardProduct v-for="product in recommendedProducts" :key="product.id" :product="product" />
      </div>
      
      <!-- NocNoc's Products! -->
      <HeaderCard
        icon="choices_blue.png"
        header="NocNoc's Products!"
        subHeader="NocNoc's Highly Rated And Well-Priced Product That Is Ready For You."
      />
      <div class="row row-cols-sm-2 row-cols-md-3 row-cols-lg-5 container-card">
        <CardProduct v-for="product in products" :key="product.id" :product="product" />
      </div>

    </div>
  </div>
</template>

<script>
import PromotionSlide from "../components/PromotionSlide"
import HeaderCard from "../components/HeaderCard"
import CardProduct from "../components/CardProduct"
import CardCategory from "../components/CardCategory"

export default {
  name: "Index",
  components: {
    PromotionSlide,
    CardProduct,
    HeaderCard,
    CardCategory
  },
  computed: {
    products() {
      return this.$store.state.product.products
    },
    favProducts() {
      var favProducts = this.$store.state.product.products.filter(product => product.favorite == true)
      return favProducts
    },
    recommendedProducts() {
      return this.$store.state.product.recommendedProducts
    },
    categories() {
      return this.$store.state.product.categories
    }
  }
}
</script>

<style scoped>
.main-container {
  padding-left: 4rem;
  padding-right: 4rem;
  margin-top: 1rem;
}
.container-card {
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: .1rem;
  margin-right: .1rem;
}
.text-fav {
  color: #FA6337;
}
</style>
