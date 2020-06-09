<template>
  <div id="Index">
    <PromotionSlide />
    <div class="main-container">

      <!-- Your Favorite -->
      <div v-if="favProducts.length >= 1" class="container-fluid product-fav">
        <h2>Your NocNoc <span class="text-fav">Favorite(s)</span></h2>
      </div>
      <div class="row row-cols-sm-2 row-cols-md-3 row-cols-lg-5 product-card">
        <ProductCard v-for="product in favProducts" :key="product.id" :product="product" />
      </div>
      <div v-if="favProducts.length >= 1"><p></p></div>

      <!-- Recommended Products -->
      <HeaderCard
        icon="choices_orange.png"
        header="Recommended Products"
        subHeader="NocNoc has selected some products that might suit your profile"
      />
      <div class="row row-cols-sm-2 row-cols-md-3 row-cols-lg-5 product-card">
        <ProductCard v-for="product in recommendedProducts" :key="product.id" :product="product" />
      </div>
      
      <!-- NocNoc's Products! -->
      <HeaderCard
        icon="choices_blue.png"
        header="NocNoc's Products!"
        subHeader="NocNoc's Highly Rated And Well-Priced Product That Is Ready For You."
      />
      <div class="row row-cols-sm-2 row-cols-md-3 row-cols-lg-5 product-card">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>

    </div>
  </div>
</template>

<script>
import PromotionSlide from "../components/PromotionSlide"
import HeaderCard from "../components/HeaderCard"
import ProductCard from "../components/ProductCard"

export default {
  name: "Index",
  components: {
    PromotionSlide,
    ProductCard,
    HeaderCard
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
.product-card {
  margin-top: 1rem;
  margin-left: .1rem;
  margin-right: .1rem;
}
.text-fav {
  color: #FA6337;
}
</style>
