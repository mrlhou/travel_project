<template lang="pug">
header.header.pt-4.pb-4
  .container.d-flex.justify-content-between.align-items-center
    .menu.ms-auto.me-auto
        input(id="checkbox" type="checkbox" @click.stop="activeMenu")
        label(class="toggle" for="checkbox")  
          each val in ["bar1","bar2","bar3"]
            div(id=val ,class="bars")
    ul.ps-0.mb-0.links.justify-content-between.align-items-center
      li(v-for="route in $router.getRoutes()")
        router-link.text-capitalize.text-decoration-none(
          v-if="route.name !== 'contact us'"
          :to="route.name",
          v-text="route.name",
        )
        router-link.d-block.button.text-decoration-none.text-capitalize.text-center(
          v-else
          :to="{ name: 'contact us' }"
          v-text="route.name"
        )
</template>

<script>
import gsap from "gsap";
export default {
  name: "headerView",
  mounted() {
    gsap.from(".header", {
      duration: 1,
      x: "-50%",
      ease: "power1.out",
    });
    gsap.from("li", {
      duration: 1,
      delay: 0.5,
      opacity: 0,
      stagger: 0.7,
    });
  },
  methods: {
    activeMenu() {
      let links = document.querySelector(".links");
      links.classList.toggle("active");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../scss/varaibles/varaibles";
@import "../scss/Global/global";
.header {
  height: 88px;
  position: relative;
  z-index: 3;
  .menu {
    display: none;
    @include mobile {
      display: block;
    }
    #checkbox {
      display: none;
    }
    .toggle {
      position: relative;
      width: 40px;
      height: 40px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      transition-duration: 0.3s;
      .bars {
        width: 100%;
        height: 4px;
        background-color: $black;
        border-radius: 5px;
        transition-duration: 0.3s;
      }
    }
    #checkbox:checked + .toggle #bar2 {
      transform: translateY(14px) rotate(60deg);
      margin-left: 0;
      transform-origin: right;
      transition-duration: 0.3s;
      z-index: 2;
    }
    #checkbox:checked + .toggle #bar1 {
      transform: translateY(28px) rotate(-60deg);
      transition-duration: 0.3s;
      transform-origin: left;
      z-index: 1;
    }
    #checkbox:checked + .toggle {
      transform: rotate(-90deg);
    }
  }
  .links {
    transition: $trasnition-time;
    display: flex;
    width: 100%;
    li:last-of-type {
      margin: {
        left: auto;
      }
    }
    a:not(.button) {
      transition: $trasnition-time;
      font: {
        size: 20px;
      }
      color: $gray;
      &:hover,
      &.router-link-active {
        color: $black;
      }
      margin-left: 1.5rem;
    }
    .button {
      font-family: inherit;
      width: 8em;
      height: 2.6em;
      line-height: 2.5em;
      position: relative;
      overflow: hidden;
      border: 2px solid $black;
      transition: color 0.5s;
      z-index: 1;
      font-size: 17px;
      border-radius: 6px;
      font-weight: 500;
      color: $black;

      &:before {
        content: "";
        position: absolute;
        z-index: -1;
        background: $black;
        height: 150px;
        width: 200px;
        border-radius: 50%;
      }

      &:hover {
        color: $white;
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
      &.active {
        top: 100px;
      }
      position: absolute;
      flex-direction: column;
      width: 50%;
      top: -300px;
      background: #f6f6f6;
      box-shadow: 20px 20px 60px #d1d1d1, -20px -20px 60px #ffffff;
      left: 50%;
      transform: translateX(-50%);
      z-index: 3;
      li:last-of-type {
        margin: {
          left: auto;
          right: auto;
          bottom: 10px;
        }
      }
      a:not(.button) {
        margin: {
          left: 0;
        }
        padding: 10px;
        display: block;
      }
    }
  }
}
</style>
