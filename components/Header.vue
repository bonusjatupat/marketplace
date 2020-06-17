<template>
  <div id="Header">
    <nav class="navbar navbar-expand-md navbar-dark">
      <div class="container-fluid">
        <nuxt-link to='/' class="navbar-brand">
            <img src="../assets/images/logo.png" class="img-brand" />
        </nuxt-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search All Products" v-model="search"/>
                    <div class="input-group-append">
                        <button class="btn btn-light" type="button" id="search-button">
                            <ion-icon name="search-outline"></ion-icon>
                        </button>
                    </div>
                </div>
            </li>
            <li class="nav-item">
              <ion-icon name="cart-outline"></ion-icon></li>
            <li class="nav-item">
              <ion-icon name="person-circle-outline" type="button" data-toggle="modal" data-target="#exampleModalCenter"></ion-icon>
              <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <DialogSignIn />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import DialogSignIn from './DialogSignIn'

export default {
  name: "Header",
  components: {
    DialogSignIn
  },
  data() {
    return {
      search: ""
    }
  },
};
</script>

<style scoped>
.navbar {
  background-color: #343ab4;
  padding: 1rem;
}
.img-brand {
  width: 190px;
  height: 35px;
}
.input-group {
  width: 400px;
}
.nav-item {
  color: #f1f1f1;
  font-size: 30px;
  margin-top: 4px;
  margin-left: 24px;
}
</style>
