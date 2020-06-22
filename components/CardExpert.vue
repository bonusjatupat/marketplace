<template>
  <div id="CardExpert">
      <div class="col">
        <div class="card h-100">
            <div class="card-body">
                <img :src="require(`@/assets/products/00001.jpg`)" class="card-img"/>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "CardExpert"
}
</script>

<style>
.card-body {
    padding: 0;
}
</style>