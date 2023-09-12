<template lang="pug">
section.guide
  .container.d-flex.justify-content-center.align-items-center
    .guide-info.text-capitalize 
      |
      |
      h2.display-1.fw-medium.mb-4 guide to travel
      ul
        li(v-for="(guide, i) in guides", :key="i")
          | {{ guide }}
          i.fa-solid.fa-plus.position-absolute
        li
    .guide-image 
      |
      |
      img.ms-auto.me-auto.d-block(:src="img", alt="Guide Png")
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import img from "../assets/Guide.jpg";
export default {
  name: "Guide",
  data() {
    return {
      img: img,
      guides: [
        "Decide on the type of experience you want (adventure, relaxation, cultural exploration",
        "Consider factors like weather, budget, and the length of your trip.",
        "Research potential destinations, read reviews, and gather information about the places you're interested in visiting",
      ],
    };
  },
  mounted() {
    gsap.from(".guide-info *", {
      scrollTrigger: ".guide-info",
      duration: 1,
      opacity: 0,
      stagger: 0.5,
    });
    gsap.from(".guide-image", {
      scrollTrigger: ".guide-image",
      duration: 1,
      opacity: 0,
      scale: 0,
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/Global/global";
@import "../scss/varaibles/varaibles";
.guide {
  @include spacing;
  .guide-info {
    width: 50%;
    transition: $trasnition-time;
    @include mobile {
      width: 100%;
    }
    ul {
      li {
        font-size: 20px;
        @include mobile {
          font-size: 16px;
        }
        position: relative;
        padding: {
          top: 20px;
          bottom: 20px;
        }
        &::before {
          width: 110%;
          height: 3px;
          background-color: $black;
          @include mobile {
            width: 105%;
          }
        }
        &::before,
        &:not(:last-child):after {
          content: "";
          position: absolute;
          left: -28px;
          top: 0;
        }
        &:not(:last-child):after {
          width: 0%;
          height: 100%;
          background-color: $gray;
          transition: $trasnition-time;
          z-index: -1;
        }
        &:hover::after {
          width: 110%;
        }
        i {
          font-size: 30px;
          top: 50%;
          transform: translateY(-50%);
          right: -22px;
          @include mobile {
            right: 101%;
          }
        }
      }
    }
  }
  .guide-image {
    width: 50%;
    img {
      width: 50%;
    }
    @include mobile {
      display: none;
    }
  }
}
</style>
