<template>
  <div id="Footer">
      <footer>
            <div class="container-fluid padding">
                <div class="row">
                    <div class="col-md-2 content">
                        <p class="title font-weight-bold">Help Center</p>
                        <p>Track My Order</p>
                        <p>How to buy Our Products</p>
                        <p>Return & Refund</p>
                        <p>Privacy Policy</p>
                        <p>Cheapest Guaranteed</p>
                    </div>
                     <div class="col-md-2 content">
                        <p class="title font-weight-bold">About Us</p>
                        <p>About NocNoc.com</p>
                    </div>
                    <div class="col-md-2 content">
                        <p class="title font-weight-bold">Contact Us</p>
                        <p>Become a Seller</p>
                        <p>Become an Installer</p>
                        <p>Find Installers</p>
                        <p>Chat with Us</p>
                    </div>
                    <div class="col-md-2 content">
                        <p class="title font-weight-bold">Connect With Us</p>
                        <ion-icon name="logo-facebook" class="icon-social"></ion-icon>
                        <ion-icon name="logo-youtube" class="icon-social"></ion-icon>
                        <ion-icon name="logo-twitter" class="icon-social"></ion-icon>
                        <ion-icon name="logo-whatsapp" class="icon-social"></ion-icon>
                        <p class="title font-weight-bold">Payment Methods</p>
                        <ion-icon name="card" class="icon-social"></ion-icon>
                        <ion-icon name="cash" class="icon-social"></ion-icon>
                        <ion-icon name="wallet" class="icon-social"></ion-icon>
                    </div>
                    <div class="col-md-2 text-right content">
                        <p class="title font-weight-bold">Subscribe to Our Newsletter</p>
                            <div class="input-group ml-auto">
                                <input type="text" class="form-control" placeholder="Email Address" />
                                <div class="input-group-append">
                                    <button class="btn btn-primary" type="button" id="search-button">
                                        Follow
                                    </button>
                                </div>
                            </div>
                        <p>Monday - Friday 8:00 - 22:00</p>
                        <p>Saturday - Sunday 9:00 - 20:00</p>
                    </div>
                    <div class="col-12 footer-bottom">
                        <p class="text-center">BetterBe Marketplace Company Limited 162/1-2,168/10 Pracha Rat Sai 2 Rd Bangsue, Bangkok 10800</p>
                    </div>
                </div>
            </div>
      </footer>
  </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
footer {
    background-color: #110C34;
    color: #bebdbd;
    font-size: 13px;
}
.title {
    color: #FFFFFF;
    margin-top: 3rem;
}
.content {
    margin-left: 2rem;
}
.icon-social {
    font-size: 25px;
    margin-right: .5rem;
    margin-bottom: .5rem;
}
.input-group {
    margin-bottom: 1rem;
}
.footer-bottom {
    background-color: rgb(8, 6, 26);
    color: #FFFFFF;
}
.footer-bottom p {
    margin-top: .5rem;
    margin-bottom: .5rem;
    font-size: 11px;
}
</style>