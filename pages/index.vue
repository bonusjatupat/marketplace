<template>
  <div id="Index">
    <PromotionSlide />
    <div class="main-container">

      <!-- NocNoc's Products! -->
      <div class="container-fluid padding title">
        <div class="row padding">
          <div class="col-xs-12 col-sm-12 col-md-2">
            <img src="../assets/images/choices.png" class="img-choices">
          </div>
          <div class="col-xs-12 col-sm-12 col-md-10">
            <h2>NocNoc's Products!</h2>
            <p>NocNoc's Highly Rated And Well-Priced Product That Is Ready For You.</p>
          </div>
        </div>
      </div>

      <!-- Fav Products -->
      

      <!-- Products' Cards -->
      <div class="row row-cols-1 row-cols-md-5 product-cards">
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
.product-cards {
  margin-top: 1rem;
  margin-left: .1rem;
  margin-right: .1rem;
}
</style>
