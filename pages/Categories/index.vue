<template>
  <div id="Category" class="container-main align-items-center">
    <!-- Category Header -->
    <div class="row container-header">
        <div class="col-lg-4">
            <h2>Rocking Chairs</h2>
            <p>Showing Products 1-31 of 120</p>
        </div>
    </div>

    <!-- Filter & Products -->
    <div class="row">
        <div class="col-lg-3 card-filter">
            <div class="card" style="max-width: 17rem;">
                <div class="card-header text-white bg-primary d-flex justify-content-between align-items-center">
                    <span>Filters</span>
                    <span><ion-icon name="refresh-outline"/></span>
                </div>
                <div class="card-body">
                    <p class="d-flex justify-content-between align-items-center">
                        <span class="card-text">Product Categories</span>
                        <span><ion-icon name="chevron-forward-outline"/></span>
                    </p>
                    <hr>
                    <p class="d-flex justify-content-between align-items-center">
                        <span class="card-text">Price Range (฿)</span>
                        <span><ion-icon name="chevron-forward-outline"/></span>
                    </p>
                    <hr>
                    <p class="d-flex justify-content-between align-items-center">
                        <span class="card-text">Shop Name</span>
                        <span><ion-icon name="chevron-forward-outline"/></span>
                    </p>
                    <hr>
                    <p class="d-flex justify-content-between align-items-center">
                        <span class="card-text">Availability</span>
                        <span><ion-icon name="chevron-forward-outline"/></span>
                    </p>
                    <hr>
                    <p class="d-flex justify-content-between align-items-center">
                        <span class="card-text">Offers</span>
                        <span><ion-icon name="chevron-forward-outline"/></span>
                    </p>
                    <hr>
                    <p class="d-flex justify-content-between align-items-center">
                        <span class="card-text">Advance Options</span>
                        <span><ion-icon name="chevron-forward-outline"/></span>
                    </p>
                    <hr>
                    <p class="d-flex justify-content-between align-items-center">
                        <span class="card-text">Product Type</span>
                        <span><ion-icon name="chevron-forward-outline"/></span>
                    </p>
                    <hr>
                    <p class="d-flex justify-content-between align-items-center">
                        <span class="card-text">Product Condition</span>
                        <span><ion-icon name="chevron-forward-outline"/></span>
                    </p>
                    <hr>
                </div>
            </div>
        </div>
        <div class="col-lg-9 container-products">
            <!-- Sort By -->
            <div class="sort-by">
                <p>
                    <span class="title">Sort By</span>
                    <span class="item" type="button">Recommended</span>
                    <span class="item" type="button">Best Selling</span>
                    <span class="item" type="button">New Arrival</span>
                    <span class="item" type="button">Price: Low to High</span>
                    <span class="item" type="button">Price: High to Low</span>
                </p>
                <hr>
            </div>
            <!-- Products -->
            <div class="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                <CardProduct v-for="product in products" :key="product.id" :product="product" />
            </div>
        </div>
    </div>

  </div>
</template>

<script>
import CardProduct from "../../components/CardProduct"

export default {
    name: "Category",
    components:{
        CardProduct
    },
    computed: {
        products() {
            return this.$store.state.product.products
        }
    },
    methods: {
    }
}
</script>

<style scoped>
.container-main {
    padding-top: 3rem;
    padding-left: 3rem;
    padding-left: 5rem;
    padding-right: 5rem;
}
.container-header p{
    font-weight: bold;
    font-size: 13px;
    margin-top: -.5rem;
}
.container-products {
    padding: 0;
    padding-right: 2rem;
}
.card-filter {
    align-items: center;
    text-align: center;
}
.card-header span {
    font-size: 14px;
    font-weight: bold;
}
.card-body p {
    padding: .8rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-weight: bold;
    font-size: 12px;
    color: black;
}
.card-body hr {
    margin-top: -1rem;
    margin-bottom: 0px;
}
.card-body {
    padding: 0px;
}
.sort-by .title {
    font-size: 12px;
    font-weight: bold;
    color: #808080;
}
.sort-by .item {
    font-size: 16px;
    font-weight: bold;
    color: black;
}
.sort-by .item:hover {
    color: #FA6337;
}
.sort-by span {
    margin-right: 2rem;
}
.sort-by hr {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
}
</style>