<template>
  <div id="Header">
    <nav class="navbar navbar-expand-md navbar-dark sticky-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="../assets/images/logo.png" class="img-brand" />
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search All Products" />
                    <div class="input-group-append">
                        <button class="btn btn-light" type="button" id="search-button">
                            <ion-icon name="search-outline"></ion-icon>
                        </button>
                    </div>
                </div>
            </li>
            <li class="nav-item"><ion-icon name="cart-outline"></ion-icon></li>
            <li class="nav-item">
              <ion-icon name="person-circle-outline"></ion-icon>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header"
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
