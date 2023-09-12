<template>
  <section class="about">
    <div class="container">
      <div class="main-title text-capitalize text-center mb-4">
        <h2>here's what they say about us</h2>
      </div>
      <swiper
        :slidesPerView="1"
        :spaceBetween="10"
        :pagination="{
          clickable: true,
        }"
        :breakpoints="{
          '640': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '1024': {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }"
        :modules="modules"
        class="my-swiper"
      >
        <swiper-slide
          class="card d-flex justify-content-center align-items-center"
          v-for="(client, i) in clients"
          :key="client.id"
        >
          <img class="img rounded-circle" :src="images[i]" alt="client img" />
          <span v-text="client.name" class="d-block pt-4 pb-4"></span>
          <p class="info">{{ truncateText(client.desc) }}</p>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
// Import Swiper Pagination
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
// Import Data
import data from "@/Data/clients.json";
export default {
  data() {
    return {
      clients: data,
      images: [],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
  mounted() {
    document.querySelector(".swiper-pagination").style.bottom = "-35px";
  },
  created() {
    // Dynamically import all images from the imgs folder
    const imagesContext = require.context(
      "@/assets/Clients",
      false,
      /\.(png|jpe?g|gif|svg)$/
    );
    this.images = imagesContext.keys().map((key) => imagesContext(key));
  },
  computed: {
    truncateText() {
      return (text) => {
        let words = text.split(" ");
        if (words.length >= 20) {
          // console.log(words);
          let newWords = words.splice(0, 19, "...");
          words = newWords;
          words.push("...");
          return words.join(" ");
        } else {
          return words.join(" ");
        }
      };
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../scss/varaibles/varaibles";
@import "../scss/Global/global";

.about {
  @include spacing;

  .main-title {
    h2 {
      font: {
        size: 4rem;
      }
      @include mobile {
        font: {
          size: 2rem;
        }
      }
    }
  }

  .my-swiper {
    width: 80%;
    margin-top: 40px;
    overflow: visible;
    overflow-x: clip;

    .card {
      width: 17em;
      height: 22.5em;
      background: linear-gradient(145deg, #ffffff, #dddddd);
      box-shadow: 20px 20px 60px #d1d1d1, -20px -20px 60px #ffffff;
      transition: 1s ease-in-out;
      clip-path: polygon(
        30px 0%,
        100% 0,
        100% calc(100% - 30px),
        calc(100% - 30px) 100%,
        0 100%,
        0% 30px
      );
      border-top-right-radius: 20px;
      border-bottom-left-radius: 20px;
      display: flex;
      flex-direction: column;

      span {
        font-weight: bold;
        color: $black;
        text-align: center;
        display: block;
        font-size: 1.5em;
      }

      .info {
        font-weight: 400;
        color: $black;
        display: block;
        text-align: center;
        font-size: 1em;
      }

      .img {
        width: 100px;
        height: 100px;
      }
    }
  }
}
</style>
