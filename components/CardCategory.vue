<template>
  <div id="CardCategory">
      <div class="col mb-4 mt-4 card-category" type="button">
          <nuxt-link :to="'/categories/'">
            <img :src="require(`@/assets/categories/${category.image}`)" alt="img" class="img-category">
          </nuxt-link>
          <p>{{category.name}}</p>
      </div>
  </div>
</template>

<script>
export default {
    name: "CardCategory",
    props: ["category"]
}
</script>

<style scoped>
.card-category {
    text-align: center;
}
.img-category {
    width: 120px;
    height: 90px;
}
p {
    margin-top: 1rem;
    font-weight: bold;
    font-size: 14px;
}
</style>