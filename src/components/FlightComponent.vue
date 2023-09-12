<template lang="pug">
section.flight.position-relative 
    .container
        <svg class="w-full h-full background-flight" viewBox="0 0 400 400"><defs><pattern id="bg_pattern" width="100" height="100" patternUnits="userSpaceOnUse"><line x1="50" y1="35" x2="50" y2="65" stroke="#333" stroke-width="6" stroke-linecap="round" opacity="0.5"></line> <line x1="35" y1="50" x2="65" y2="50" stroke="#333" stroke-width="6" stroke-linecap="round" opacity="0.5"></line> <line x1="0" y1="3" x2="10" y2="3" stroke="#232323" stroke-width="6" stroke-linecap="round" opacity="0.5"></line> <line x1="100" y1="3" x2="90" y2="3" stroke="#232323" stroke-width="6" stroke-linecap="round" opacity="0.5"></line></pattern></defs><rect x="0" y="0" width="100%" height="100%" fill="#f9f9ff" opacity="0.5"></rect><rect x="0" y="0" width="100%" height="100%" fill="url(#bg_pattern)" opacity="0.5"></rect></svg>
        .main-title.text-center.text-capitalize
            i.fa-solid.fa-plane-up
            h2 choose any where you're liked to be
        .content.pt-4.d-flex.justify-content-between.align-items-center.flex-wrap
            .flight-image
                img(:src="img1")
            .flight-info.d-flex.flex-column.justify-content-around
                img(:src="img2")
                .descirption.d-flex.justify-content-between.align-items-center
                    h3.mb-0.text-capitalize Information about your destination
                    p.mb-0.position-relative 
                        | Emerald Cove Island is a hidden gem nestled in the heart of the Pacific Ocean, far away from the hustle and bustle of everyday life. The island is a picture-perfect paradise with pristine white sandy beaches, swaying palm trees, and crystal-clear turquoise waters that gently lap at the shoreline. It feels like stepping into a postcard-worthy scene that instantly takes your breath away
                        i.fa-solid.fa-arrow-right.position-absolute
</template>
<script>
import img1 from "../assets/flight-1.jpg";
import img2 from "../assets/flight-2.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  data() {
    return {
      img1: img1,
      img2: img2,
    };
  },
  mounted() {
    gsap.from(".flight *", {
      scrollTrigger: ".flight",
      duration: 1,
      opacity: 0,
      stagger: 0.5,
    });
  },
};
</script>
<style lang="scss" scoped>
@import "../scss/varaibles/varaibles";
@import "../scss/Global/global";
.flight {
  @include spacing;
  color: $black;
  .background-flight {
    width: 300px;
    height: 300px;
    right: 0;
    top: 50%;
    z-index: -1;
    position: absolute;
    transform: translateY(-50%);
  }
  .main-title {
    i {
      font: {
        size: 4rem;
      }
    }
    h2 {
      font: {
        size: 4rem;
      }
      width: 50%;
      margin: {
        left: auto;
        right: auto;
        top: 20px;
        bottom: 20px;
      }
      @include mobile {
        font: {
          size: 2rem;
        }
        width: 100%;
      }
    }
  }
  .content {
    @include mobile {
      flex-direction: column;
    }
    .flight-image {
      width: 30%;
      img {
        width: 100%;
      }
      @include mobile {
        width: 100%;
      }
    }
    .flight-info {
      width: 60%;
      img {
        width: 50%;
        margin-bottom: 70px;
        @include mobile {
          display: none;
        }
      }
      .descirption {
        height: 90%;
        h3 {
          width: 35%;
          font: {
            size: 30px;
          }
          line-height: 1.7;
        }
        p {
          width: 60%;
          padding: {
            left: 10px;
          }
          color: $gray;
          i {
            color: $black;
            cursor: pointer;
            font-size: 4rem;
            right: 0;
            bottom: -55px;
          }
        }
        h3,
        p {
          @include mobile {
            width: 100%;
            text-align: center;
          }
        }
        @include mobile {
          flex-direction: column;
        }
      }
      @include mobile {
        width: 100%;
        margin-top: 20px;
      }
    }
  }
}
</style>
