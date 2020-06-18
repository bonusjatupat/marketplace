<template>
  <div id="Index">
    <PromotionSlide />
    <div class="main-container">

      <!-- Work Hard, Shop Harder -->
      <div class="container-fluid mt-4 sub-container">
        <div class="row">
          <h2 class="col-md-10">Work Hard, Shop Harder</h2>
          <p class="col-md-2 align-middle text-all-product" type="button">
            See All Products
            <ion-icon name="chevron-forward-outline" class="align-middle" />
          </p>
        </div>
        <div class="row row-cols-sm-3 row-cols-md-4 row-cols-lg-6 container-card">
          <CardCategory v-for="category in categories" :key="category.id" :category="category" />
        </div>  
      </div>

      <!-- Birthday Sale X Online Flooring -->
      <div class="container-fluid mt-4 sub-container container-birthday">
        <div class="row">
          <h2 class="col-md-10">Birthday Sale X Online Flooring</h2>
          <p class="col-md-2 align-middle text-all-product" type="button">
            See All Products
            <ion-icon name="chevron-forward-outline" class="align-middle" />
          </p>
        </div>
        <div id="ProductSlide" class="carousel slide container-card" data-ride="carousel" data-interval="false">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
                <CardProduct v-for="product in products.slice(0,5)" :key="product.id" :product="product" />
              </div>
            </div>

            <div class="carousel-item">
               <div class="row row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
                <CardProduct v-for="product in products.slice(6,11)" :key="product.id" :product="product" />
              </div>
            </div>
          </div>

          <a class="carousel-control-prev" href="#ProductSlide" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          </a>
          <a class="carousel-control-next" href="#ProductSlide" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
          </a>
        </div>
      </div>

      <!-- Recommended Products -->
      <div class="sub-container">
        <HeaderCard
          icon="choices_orange.png"
          header="Recommended Products"
          subHeader="NocNoc has selected some products that might suit your profile"
        />
        <div class="row row-cols-sm-2 row-cols-md-3 row-cols-lg-5 container-card">
          <CardProduct v-for="product in recommendedProducts" :key="product.id" :product="product" />
        </div>
      </div>
      
      <!-- NocNoc's Products! -->
      <div class="sub-container">
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
.container-card {
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: .1rem;
  margin-right: .1rem;
}
.text-fav {
  color: #FA6337;
}
.sub-container {
  padding-left: 6rem;
  padding-right: 6rem;
  padding-top: 1rem;
}
.container-birthday {
  background-color: #EBEBF7;
  padding-bottom: 1rem;
  padding-top: 3rem;
}
.text-all-product {
  color: #343ab4;
  font-weight: bold;
  font-size: 14px;
  
}
</style>
