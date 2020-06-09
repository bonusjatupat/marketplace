<template>
  <div id="HeaderCard" class="container-fluid title">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-2">
        <img :src="require(`../assets/images/${icon}`)" class="card-img-top" alt="img">
      </div>
      <div class="col-xs-12 col-sm-12 col-md-10">
        <h2>{{header}}</h2>
        <p>{{subHeader}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderCard",
  props: ["header", "subHeader", "icon"]
};
</script>

<style scoped>
.title h2 {
  margin-top: .5rem;
  margin-bottom: 0rem;
}
.img-choices {
  width: 200px;
  height: 80px;
}
</style>
