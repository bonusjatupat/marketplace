<template>
  <div id="CardProduct">
      <div class="col mb-4">
          <div class="card h-100">
            <nuxt-link :to="'/products/'+product.id">
              <img :src="require(`@/assets/products/${product.id}.jpg`)" class="card-img-top" alt="img">
            </nuxt-link>
            <div class="card-body">
              <!-- product's name -->
              <h5 class="card-title">{{ product.description }}</h5>
              <!-- product's price -->
              <p class="card-text">
                <span class="text-price">฿{{ discountPrice }}</span>
                /{{ product.unit }}</p>
              <!-- product's sale price -->
              <div v-if="product.onSale != 0">
                <p class="mt-1 mb-0">
                  <span class="text-price-ori">฿{{ productPrice }}</span>
                  <span class="text-discount">-{{ product.onSale }}%</span>
                </p>
              </div>
              <div v-else>
                <p style="height:.67em"></p>
              </div>
            </div>
            <div class="card-footer">  
              <span v-for="i in product.star" :key="i"><ion-icon name="star" class="ic-star"/></span>
              <span class="text-sold">{{ product.soldNumber }} sold</span>
            </div>
          </div>
        </div>
  </div>


    <!--<div class="d-flex justify-content-between align-items-center">
      <div class="ic-heart">
      <div v-if="product.favorite">
        <ion-icon name="heart" class="ic-heart" @click="onClickFavorite(product.id)"></ion-icon>
      </div>
      <div v-else>
        <ion-icon name="heart-outline" class="ic-heart" @click="onClickFavorite(product.id)"></ion-icon>
      </div>
      </div>
    </div>-->
</template>

<script>
export default {
    name: "CardProduct",
    props: ["product"],
    computed: {
      discountPrice() {
        var price = 0;
        if (this.product.onSale != 0) {
          price = Number(parseFloat(this.product.price * ((100-this.product.onSale)/100)).toFixed(2)).toLocaleString('en', {minimumFractionDigits: 0});
        } else {
          price = Number(parseFloat(this.product.price).toFixed(2)).toLocaleString('en', {minimumFractionDigits: 0});
        }
        return price;
      },
      productPrice() {
        return Number(parseFloat(this.product.price).toFixed(2)).toLocaleString('en', {minimumFractionDigits: 0});
      }
    },
    methods: {
        onClickFavorite(id) {
            this.$store.commit('product/favorite', id)
        }
    }  
}
</script>

<style scoped>
.card {
  width: 240px;
}
.card-title {
  margin-top: -1rem;
  margin-left: -.7rem;
  font-size: 15px;
  font-weight: bold;
  height: 2.4em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
}
.card-body {
  padding-bottom: 1rem;
}
.card-text {
  margin-left: -.7rem;
  margin-bottom: -.2rem;
  margin-top: -.2rem;
  font-size: 13px;
  font-weight: lighter;
  line-height: 1.2rem;
}
.text-price {
  color: #FA6337;
  font-weight: bold;
  font-size: 16px;
}
.text-price-ori {
  margin-left: -.7rem;
  text-decoration: line-through;
  color: #808080;
  font-weight: lighter;
  font-size: 13px;
}
.text-discount {
  background-color: #F02749;
  color: white;
  font-weight: lighter;
  font-size: 13px;
  padding: 4px;
}
.ic-heart {
  position: absolute;
  font-size: 30px;
  right: 4px;
  bottom: 21px;
  color: #FA6337;
  cursor: pointer;
}
.ic-star {
  color: rgb(235, 203, 25);
  font-size: 13px;
  margin-right: 2px;
}
.text-sold {
  position: absolute;
  font-weight: lighter;
  font-size: 11px;
  right: 8px;
  bottom: 8px;
}
.card-footer {
  padding: 4px;
  padding-left: 8px;
}
</style>

  