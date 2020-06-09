<template>
  <div id="Product">
    <div class="container-fluid main-container">
      <div class="row">
        <!-- Product's Image -->
        <div class="col-xs-12 col-sm-12 col-md-4">
          <img :src="require(`../../../assets/products/${product.id}.jpg`)" alt="img" class="img-product" />
          <div class="text-center">
            <button type="button" class="btn btn-light" @click="onClickFavorite(product.id)">
              <span v-if="product.favorite">
                <ion-icon name="heart" class="ic-heart align-middle"></ion-icon>
              </span>
              <span v-else>
                <ion-icon name="heart-outline" class="ic-heart align-middle"></ion-icon>
              </span>
              <span class="font-weight-bold align-middle">Add to Favorite</span>
            </button>
          </div>
        </div>
        <!-- Product's Info -->
        <div class="col-xs-12 col-sm-12 col-md-5 content">
          <img src="../../../assets/images/choices_orange.png" class="img-choices"/>
          <h3>{{product.description}}</h3>
          <p>
            <span v-for="i in product.star" :key="i">
              <ion-icon name="star" class="ic-star"></ion-icon>
            </span>
            | {{product.soldNumber}} Sold | 
            <mark v-if="product.stockNumber >= 1" class="text-stock-green">{{product.stockNumber}} In Stock</mark>
            <mark v-else class="text-stock-red">Out of Stock</mark>
          </p>
          <div class="price-box">
            <p><span class="text-price">฿{{product.price}}</span> /{{product.unit}}</p>
          </div>
          <div v-if="product.specification.length >= 1">
            <p class="font-weight-bold">Highlight Specifications</p>
            <ul v-for="spec in product.specification" :key="spec">
              <li>{{ spec }}</li>
            </ul>
          </div>
        </div>
        <!-- Check Out Card -->
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
      var product = this.$store.state.product.products.find(product => product.id === this.$route.params.id);
      return product;
    }
  },
  methods: {
    onClickFavorite(id) {
      this.$store.commit("product/favorite", id);
    }
  }
};
</script>

<style scoped>
#Product {
  background-color: rgb(240, 240, 240);
}
.main-container {
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-left: 4rem;
  padding-right: 4rem;
}
.img-product {
  width: 100%;
  height: auto;
}
.img-choices {
  width: 70px;
  height: 30px;
}
.content h3 {
  margin-top: 1rem;
}
.content ul {
  line-height: .7rem;
}
.btn-light:hover {
  background-color: transparent;
  border: transparent;
}
.ic-heart {
  font-size: 30px;
  color: #fa6337;
  cursor: pointer;
}
.ic-star {
  color: #fa6337;
  font-size: 11px;
  margin-left: 4px;
}
.price-box {
  background-color: #ffffff;
  padding-top: 1rem;
}
.price-box p {
  color: #fa6337;
  font-weight: bold;
}
.text-price {
  color: #fa6337;
  font-weight: bold;
  font-size: 32px;
  margin-left: 1rem;
}
.text-stock-green {
  background-color: green;
  color: #ffffff;
}
.text-stock-red {
  background-color: red;
  color: #ffffff;
}
</style>
