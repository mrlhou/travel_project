<template lang="pug">
header-view 
router-view
footer-view
</template>

<script>
import HeaderView from "@/components/HeaderPart.vue";
import FooterView from "@/components/FooterPart.vue";

export default {
  components: {
    HeaderView,
    FooterView,
  },
};
</script>
<style lang="scss" scoped>
@import "./scss/varaibles/varaibles";
body {
  background-color: $gray;
}
</style>
