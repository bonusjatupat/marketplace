<template>
  <div id="Product">
    <div class="container-fluid main-container">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-4">
          <img
            :src="require(`../../../assets/products/${product.id}.jpg`)"
            alt="img"
            class="img-product"
          />
          <p></p>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-5 content">
          <img src="../../../assets/images/choices_orange.png" class="img-choices" />
          <h3>{{ product.description }}</h3>
          <p>
            <span v-for="i in product.star" :key="i">
                <ion-icon name="star" class="ic-star"></ion-icon>
            </span>
            | {{ product.soldAmount }} Sold | In Stock
          </p>
          <div class="price-box">
              <p><span class="text-price">฿{{ product.price }}</span>/{{ product.unit }}</p>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-3 check-card">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Product",
  computed: {
    product() {
      var product = this.$store.state.product.products.find(
        product => product.id === this.$route.params.id
      );
      return product;
    }
  }
};
</script>

<style scoped>
#Product {
  background-color: rgb(235, 232, 232);  
}
.main-container {
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-left: 4rem;
  padding-right: 4rem;
}
.img-product {
  width: 100%;
  height: 100%;
}
.img-choices {
  width: 70px;
  height: 30px;
}
.content h3 {
  margin-top: .5rem;
}
.ic-star {
  color: #fa6337;
  font-size: 11px;
  margin-left: 4px;
}
.price-box {
    background-color: #FFFFFF;
    padding-top: .1rem;
}
.text-price {
  color: #FA6337;
  font-weight: bold;
  font-size: 32px;
  margin-left: 1rem;
}
</style>
