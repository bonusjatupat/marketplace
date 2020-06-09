<template>
  <div id="ProductCard">
      <div class="col mb-4">
          <div class="card h-100">
            <nuxt-link :to="'/products/'+product.id">
                <img :src="require(`../assets/products/${product.id}.jpg`)" class="card-img-top" alt="img">
            </nuxt-link>
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <div class="row">
                    <div class="col-8">
                        <p class="card-text"><span class="text-price">฿{{ product.price }}</span>/{{ product.unit }}</p>
                    </div>
                    <div class="col-4 ic-heart">
                        <div v-if="product.favorite">
                            <ion-icon name="heart" class="ic-heart" @click="onClickFavorite(product.id)"></ion-icon>
                        </div>
                        <div v-else>
                            <ion-icon name="heart-outline" class="ic-heart" @click="onClickFavorite(product.id)"></ion-icon>
                        </div>
                    </div>
              </div>
            </div>
            <div class="card-footer">  
                <span v-for="i in product.star" :key="i">
                    <ion-icon name="star" class="ic-star"></ion-icon>
                </span>
              <span class="text-sold">{{ product.soldNumber }} sold</span>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
export default {
    name: "ProductCard",
    props: ["product"],
    methods: {
        onClickFavorite(id) {
            this.$store.commit('product/favorite', id)
        }
    }
}
</script>

<style scoped>
.card-img-top {
  padding: 8px;
}
.card-title {
  margin-top: -1rem;
  margin-left: -.7rem;
  font-size: 15px;
  font-weight: bold;
}
.card-text {
  margin-left: -.7rem;
  margin-bottom: -.5rem;
  font-size: 13px;
  font-weight: lighter;
  line-height: 1.2rem;
}
.text-price {
  color: #FA6337;
  font-weight: bold;
  font-size: 18px;
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
  margin-left: 4px;
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