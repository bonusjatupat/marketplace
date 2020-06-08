<template>
  <div id="Index">
    <PromotionSlide />
    <div class="main-container">

      <!-- Your Favorite -->
      <div v-if="favProducts.length >= 1" class="container-fluid product-fav">
        <h2>
          Your NocNoc
          <span class="text-fav">Favorite(s)</span>
        </h2>
      </div>
      <!-- Favorites' Cards --> 
      <div class="row row-cols-1 row-cols-md-5 product-all">
        <ProductCard v-for="product in favProducts" :key="product.id" :product="product" />
      </div>
      <div v-if="favProducts.length >= 1"><p></p></div>
      
      <!-- NocNoc's Products! -->
      <div class="container-fluid title-all">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-2">
            <img src="../assets/images/choices.png" class="img-choices">
          </div>
          <div class="col-xs-12 col-sm-12 col-md-10">
            <h2>NocNoc's Products!</h2>
            <p>NocNoc's Highly Rated And Well-Priced Product That Is Ready For You.</p>
          </div>
        </div>
      </div>
      <!-- Products' Cards -->
      <div class="row row-cols-1 row-cols-md-5 product-all">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>

    </div>
  </div>
</template>

<script>
import PromotionSlide from "../components/PromotionSlide"
import ProductCard from "../components/ProductCard"

export default {
  name: "Index",
  components: {
    PromotionSlide,
    ProductCard
  },
  computed: {
    products() {
      return this.$store.state.product.products
    },
    favProducts() {
      var favProducts = this.$store.state.product.products.filter(product => product.favorite == true)
      return favProducts
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
.img-choices {
  width: 200px;
  height: 80px;
}
.title h2 {
  margin-top: .5rem;
  margin-bottom: 0rem;
}
.product-all {
  margin-top: 1rem;
  margin-left: .1rem;
  margin-right: .1rem;
}
.text-fav {
  color: #FA6337;
}
</style>
