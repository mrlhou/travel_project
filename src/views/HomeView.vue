<template lang="pug">
section.home.position-relative
  .comtainer.h-100
      <svg class="w-full h-full background b-1" viewBox="0 0 400 400"><defs><pattern id="bg_pattern" width="100" height="100" patternUnits="userSpaceOnUse"><line x1="50" y1="35" x2="50" y2="65" stroke="#333" stroke-width="6" stroke-linecap="round" opacity="0.5"></line> <line x1="35" y1="50" x2="65" y2="50" stroke="#333" stroke-width="6" stroke-linecap="round" opacity="0.5"></line> <line x1="0" y1="3" x2="10" y2="3" stroke="#232323" stroke-width="6" stroke-linecap="round" opacity="0.5"></line> <line x1="100" y1="3" x2="90" y2="3" stroke="#232323" stroke-width="6" stroke-linecap="round" opacity="0.5"></line></pattern></defs><rect x="0" y="0" width="100%" height="100%" fill="#f9f9ff" opacity="0.5"></rect><rect x="0" y="0" width="100%" height="100%" fill="url(#bg_pattern)" opacity="0.5"></rect></svg>
      <svg class="w-full h-full background b-2" viewBox="0 0 400 400"><defs><pattern id="bg_pattern" width="100" height="100" patternUnits="userSpaceOnUse"><line x1="50" y1="35" x2="50" y2="65" stroke="#333" stroke-width="6" stroke-linecap="round" opacity="0.5"></line> <line x1="35" y1="50" x2="65" y2="50" stroke="#333" stroke-width="6" stroke-linecap="round" opacity="0.5"></line> <line x1="0" y1="3" x2="10" y2="3" stroke="#232323" stroke-width="6" stroke-linecap="round" opacity="0.5"></line> <line x1="100" y1="3" x2="90" y2="3" stroke="#232323" stroke-width="6" stroke-linecap="round" opacity="0.5"></line></pattern></defs><rect x="0" y="0" width="100%" height="100%" fill="#f9f9ff" opacity="0.5"></rect><rect x="0" y="0" width="100%" height="100%" fill="url(#bg_pattern)" opacity="0.5"></rect></svg>
      .content.d-flex.justify-content-center.align-items-center.h-100
        .info.text-capitalize
          h2 Journey to the Horizon: Exploring the World's Wonders
          p Journey to the Horizon: Exploring the World's Wonders" is an enchanting travel experience that beckons adventurers and wanderers alike to embark on a thrilling voyage around the globe. Delve into a world of discovery, where every step leads to breathtaking landscapes, vibrant cultures, and unforgettable encounters
          button.button.text-capitalize read more
        .image 
          img(:src="logo" alt="home view").d-block.ms-auto
GuideComponent
FlightComponent
AboutComponent
ContactComponent
</template>

<script>
import img from "../assets/HomView.jpg";
import gsap from "gsap";
import GuideComponent from "@/components/GuideComponent.vue";
import FlightComponent from "@/components/FlightComponent.vue";
import AboutComponent from "@/components/AboutComponent.vue";
import ContactComponent from "@/components/ContactComponent.vue";
export default {
  name: "home",
  data() {
    return {
      logo: img,
    };
  },
  components: {
    GuideComponent,
    FlightComponent,
    AboutComponent,
    ContactComponent,
  },
  mounted() {
    gsap.from(".b-1", {
      duration: 1,
      delay: 1.2,
      opacity: 0,
    });
    gsap.from(".b-2", {
      duration: 1,
      delay: 2.2,
      x: "1000",
    });
    gsap.from(".info *", {
      duration: 1,
      delay: 2,
      opacity: 0,
      stagger: 0.5,
    });
    gsap.from(".image", {
      duration: 1,
      delay: 2,
      opacity: 0,
      scale: 0,
    });
  },
};
</script>
<style lang="scss" scoped>
@import "../scss/varaibles/varaibles";
@import "../scss/Global/global";
.home {
  height: calc(100vh - 88px);
  overflow: hidden;
  .background {
    &.b-1 {
      width: 600px;
      height: 600px;
      left: -60px;
      @include mobile {
        left: 50%;
        transform: translateX(-50%);
      }
    }
    &.b-2 {
      width: 300px;
      height: 300px;
      right: -40px;
      bottom: 50px;
      @include mobile {
        display: none;
      }
    }
    z-index: -1;
    position: absolute;
  }
  .content {
    .info {
      width: 30%;
      h2 {
        font: {
          size: 3.5rem;
          weight: 600;
        }
        @include mobile {
          font: {
            size: 2.5rem;
          }
        }
      }
      p {
        color: rgba($black, 60%);
      }
      .button {
        font-family: inherit;
        width: 8em;
        height: 2.6em;
        line-height: 2.5em;
        position: relative;
        overflow: hidden;
        border: 2px solid $black;
        background-color: $black;
        transition: color 0.5s;
        z-index: 1;
        font-size: 17px;
        border-radius: 6px;
        font-weight: 500;
        color: $white;

        &:before {
          content: "";
          position: absolute;
          z-index: -1;
          background: $white;
          height: 150px;
          width: 200px;
          border-radius: 50%;
        }

        &:hover {
          color: $black;
        }

        &:before {
          top: 100%;
          left: 100%;
          transition: all 0.7s;
        }

        &:hover:before {
          top: -30px;
          left: -30px;
        }

        &:active:before {
          background: #3a0ca3;
          transition: 0s;
        }
      }
      @include mobile {
        width: 100%;
        text-align: center;
      }
    }
    .image {
      width: 50%;
      img {
        width: 80%;
      }
      @include mobile {
        display: none;
      }
    }
  }
}
</style>
