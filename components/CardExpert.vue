<template>
  <div id="CardExpert" type="button">
      <div class="col">
        <div class="card h-100">
            <div class="card-body">
                <img :src="require(`@/assets/products/00001.jpg`)" class="card-img"/>
                <h5 class="card-title">Disinfection Service</h5>
                <p class="card-text">Disinfection service cost starting from 1,500 baht for less than 500 sq.m.</p>
                <p class="text-contact align-middle">Contact Us <ion-icon class="align-middle" name="chevron-forward-outline"/></p>
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

<style scoped>
.card-body {
    padding: 0;
    color: white;
    text-align: left;
}
.card-title {
    margin-top: -8rem;
    margin-left: 1rem;
}
.card-text {
    margin-top: .5rem;
    margin-right: .5rem;
    margin-left: 1rem;
    font-size: 13px;
    font-weight: lighter;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
}
.text-contact {
    margin-top: .5rem;
    margin-left: 1rem;
    font-weight: lighter;
    font-size: 14px;
}
</style>