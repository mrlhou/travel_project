<template lang="pug">
footer.footer
  .container
    .row.text-capitalize 
      .col
        h1.title.display-1 travel logo
      .col
        h3 quick links
        .row 
          .col(v-for="route in $router.getRoutes()")
            router-link(v-if="route.name !== 'contact us'"
            :to="route.name",
            v-text="route.name",)
            router-link(v-else :to="{ name: 'contact us' }" v-text="route.name")
    p.text-center.text-capitalize.pt-4.fs-4 
      span {{ getYear }} 
      |  mrlhou. all rights reserved

</template>

<script>
export default {
  name: "footerView",
  computed: {
    getYear() {
      let data = new Date();
      return data.getFullYear();
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../scss/varaibles/varaibles";
@import "../scss/Global/global";
.footer {
  @include spacing;
  padding-bottom: 50px;
  background-color: $gray;
  a {
    transition: $trasnition-time;
    font: {
      size: 20px;
    }
    color: $black;
    &:hover,
    &.router-link-active {
      color: #3498db;
    }
  }
}
</style>
