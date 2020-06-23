<template>
  <div id="Product">

    <!-- Product Information-->
    <div class="container-fluid main-container">
      <div class="row">
        <!-- Product's Image -->
        <div class="col-xs-12 col-sm-12 col-md-4">
          <img :src="require(`@/assets/products/${product.id}.jpg`)" alt="img" class="img-product" />
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
          <img :src="require(`@/assets/images/choices_orange.png`)" class="img-choices"/>
          <h3>{{ product.description }}</h3>
          <p>
            <span v-for="i in product.star" :key="i">
              <ion-icon name="star" class="ic-star"></ion-icon>
            </span>
            | {{ product.soldNumber }} Sold | 
            <mark v-if="product.stockNumber >= 1" class="text-stock-green">{{ product.stockNumber }} In Stock</mark>
            <mark v-else class="text-stock-red">Out of Stock</mark>
          </p>
          <div class="price-box">
            <p><span class="text-price">฿{{ productPrice }}</span> /{{ product.unit }}</p>
          </div>
          <div v-if="product.specification.length >= 1">
            <p class="font-weight-bold">Highlight Specifications</p>
            <ul v-for="spec in product.specification" :key="spec">
              <li>{{ spec }}</li>
            </ul>
          </div>
        </div>
        <!-- Check Out Card -->
        <div class="col-xs-12 col-sm-12 col-md-3">
          <div class="card card-cart" style="width: 18rem;">
            <div class="card-body">
              <p class="card-title font-weight-bold">Package Quantity</p>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <button class="btn btn-outline-secondary" type="button" @click="onClickDecreaseQuatity">-</button>
                </div>
                <input type="number" class="form-control text-center" placeholder="1" v-model="quatity" min=1>
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="button" @click="onClickIncreaseQuatity">+</button>
                </div>
              </div>
              <p class="text-total">
                {{quatity}} Each 
                <span>= ฿{{totalPrice}}</span>
              </p>
              <button type="button" class="btn btn-secondary btn-add-cart">
                <ion-icon class="align-middle" name="cart-outline"></ion-icon>
                <span class="align-middle">Add to Cart</span>
              </button>
            </div>
          </div>
          <!-- Policy -->
          <div class="card card-policy" style="width: 18rem; margin-top: 1rem;">
            <div class="card-body">
              <p class="card-title font-weight-bold">
                <ion-icon class="align-middle" name="document-text-outline"></ion-icon>
                <span class="align-middle">Policy & Returns</span>
              </p>
              <p class="card-text">7 days easy return only if the item is sealed and in original condition</p>
              <hr>
              <p class="card-text">Tax invoice is applicable</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr>
    
    <!-- Other Products -->
    <div class="layout-other-products">
      <h2>Other <span class="text-nocnoc">NocNoc</span> Products</h2>
      <div class="row row-cols-sm-2 row-cols-md-3 row-cols-lg-5 product-card">
        <CardProduct v-for="product in otherProducts" :key="product.id" :product="product" />
      </div>
    </div>
  

  </div>
</template>

<script>
import HeaderCard from "../../../components/HeaderCard"
import CardProduct from "../../../components/CardProduct"

export default {
  name: "Product",
  components: {
    HeaderCard,
    CardProduct
  },
  data() {
    return {
      quatity: 1
    }
  },
  computed: {
    product() {
      var product = this.$store.state.product.products.find(product => product.id === this.$route.params.id);
      return product;
    },
    otherProducts() {
      var products = this.$store.state.product.products.filter(product => product.id != this.$route.params.id);
      return products;
    },
    productPrice() {
      var price = Number(parseFloat(this.product.price).toFixed(2)).toLocaleString('en', {minimumFractionDigits: 0});
      return price;
    },
    totalPrice() {
      var totalPrice = Number(parseFloat(parseInt(this.quatity) * parseInt(this.product.price)).toFixed(2)).toLocaleString('en', {minimumFractionDigits: 0});
      return totalPrice;
    }
  },
  methods: {
    onClickFavorite(id) {
      this.$store.commit("product/favorite", id);
    },
    onClickIncreaseQuatity() {
      this.quatity += 1;
    },
    onClickDecreaseQuatity() {
      if(this.quatity > 1) this.quatity -= 1;
    }
  }
};
</script>

<style scoped>
#Product {
  background-color: rgb(240, 240, 240);
  padding-bottom: 2rem
}
hr {
  margin-left: 4rem;
  margin-right: 4rem;
  text-align: center;
}
.main-container {
  padding-top: 3rem;
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
  color: #F02749;
  font-weight: bold;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.text-price {
  color: #F02749;
  font-weight: bold;
  font-size: 32px;
  margin-left: 1rem;
}
.text-total {
  background-color: rgb(240, 240, 240);
  padding: .3rem;
  margin-top: -.3rem;
}
.text-total span {
  color: red;
  font-size: 12px;
}
.text-stock-green {
  background-color: green;
  color: #ffffff;
}
.text-stock-red {
  background-color: red;
  color: #ffffff;
}
.input-group {
  margin-top: -.5rem;
}
.btn-add-cart {
  width: 100%;
}
.text-nocnoc {
  color: #343ab4
}
.layout-other-products {
  margin-left: 4rem;
  margin-right: 4rem;
  margin-top: 2rem;
}
.product-card {
  margin-top: 2rem;
}
.card-policy ion-icon {
  font-size: 20px;
}
.card-policy .card-text {
  font-size: 13px;
  color: #696969;
}
.card-policy hr {
  width: 100%;
  align-content: center;
  margin-left: 0;
}
</style>
