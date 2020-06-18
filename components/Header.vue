<template>
  <div id="Header">

    <!-- navbar -->
    <nav class="navbar navbar-expand-md navbar-dark">
      <div class="container-fluid">
        <!-- website's logo -->
        <nuxt-link to='/' class="navbar-brand">
            <img :src="require(`@/assets/images/logo.png`)" class="img-brand" />
        </nuxt-link>
        <!-- hamburger menu -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- navbar's items -->
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto mt-auto">
            <li class="nav-item">
              <p type="button">Installation Service</p>
            </li>
            <li class="nav-item">
              <p type="button">Ideas & Knowledge</p>
            </li>
            <li class="nav-item">
              <p type="button">Promotion</p>
            </li>
            <li class="nav-item">
              <p type="button">About Us</p>
            </li>
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
              <ion-icon name="cart-outline"></ion-icon>
            </li>
            <li class="nav-item">
              <div class="btn-group">
                <p type="button" class="dropdown-toggle mt-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">EN</p>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#"><span><img :src="require(`@/assets/images/en_flag.svg`)"/></span> EN</a>
                  <a class="dropdown-item" href="#"><span><img :src="require(`@/assets/images/th_flag.svg`)"/></span> ไทย</a>
                </div>
              </div>
            </li>
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

    <!-- category menu -->
    <div class="category-menu">
      <span style="border-left:0px" type="button">Furniture & Houseware <ion-icon name="chevron-down" class="align-middle" /></span>
      <span type="button">Building & Renovation <ion-icon name="chevron-down" class="align-middle" /></span>
      <span type="button">Outdoor <ion-icon name="chevron-down" class="align-middle" /></span>
      <span type="button">Floor</span>
      <span type="button">Bedroom</span>
      <span type="button">Living Room</span>
      <span type="button">Bathroom</span>
      <span type="button">Kitchen</span>
      <span type="button">Dining Room</span>
      <span type="button">Online Flooring</span>
    </div>
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
  margin-left: 26px;
}
.nav-item p {
  font-size: 14px;
  margin-top: .5rem;
}
.dropdown-menu {
  min-width: 70px !important;
}
.dropdown-item {
  font-size: 12px;
  margin-left: -10px !important;
}
.dropdown-item:hover {
  background-color: transparent;
}
.category-menu {
  background-color: white;
  text-align: center;
}
.category-menu span {
  font-size: 12px;
  font-weight: lighter;
  color: black;
  border-left: 1px solid #f2f2f2;
  padding: .8rem;
  vertical-align: middle;
}
</style>
