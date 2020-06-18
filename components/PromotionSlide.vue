<template>
    <div id="PromotionSlide" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
        <li data-target="#PromotionSlide" data-slide-to="0" class="active"></li>
        <li data-target="#PromotionSlide" data-slide-to="1"></li>
        <li data-target="#PromotionSlide" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img :src="require(`@/assets/images/promotion1.png`)" class="d-block w-100">
        </div>
        <div class="carousel-item">
            <img :src="require(`@/assets/images/promotion2.png`)" class="d-block w-100">
        </div>
        <div class="carousel-item">
        <img :src="require(`@/assets/images/promotion3.png`)" class="d-block w-100">
        </div>
    </div>
    <a class="carousel-control-prev" href="#PromotionSlide" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    </a>
    <a class="carousel-control-next" href="#PromotionSlide" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
    </a>
    </div>
</template>

<script>
export default {
  name: "PromotionSlide"
};
</script>

<style></style>
