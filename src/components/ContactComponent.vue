<template lang="pug">
section.contact 
    .container.d-flex.justify-content-center.align-items-center 
        .contact-form 
            .card-form
                span.title.text-capitalize contact us
                form
                    .group
                        input(placeholder="‎" type="text" id="name" required="")
                        label(for="name") Name
                    .group
                        input(placeholder="‎" type="email" id="email" name="email" required="")
                        <label for="email">Email</label>
                    .group
                        textarea(placeholder="‎" id="comment" name="comment" rows="5" required="")
                        label(for="comment") Comment
                    button.submit.text-capitalize send
        .contact-image 
            img(:src="img")
</template>
<script>
import image from "@/assets/flight-1.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  name: "contact us",
  data() {
    return {
      img: image,
    };
  },
  mounted() {
    let cardForm = document.querySelectorAll(".card-form *");
    let image = document.querySelector(".contact-image");
    // Set up the animation
    const tl = gsap.timeline({ scrollTrigger: ".contact" });
    tl.to(cardForm, { duration: 1, opacity: 1, stagger: 0.8 });
    tl.from(image, { duration: 1, opacity: 0 });
  },
};
</script>
<style lang="scss" scoped>
@import "../scss/varaibles/varaibles";
@import "../scss/Global/global";
.contact {
  @include spacing;
  $white: #fff;
  .contact-form {
    width: 40%;
    margin: auto;
    .card-form {
      background-color: $white;
      border-radius: 10px;
      padding: 20px;
      width: 100%;
      display: flex;
      flex-direction: column;
      // Title
      .title {
        font-size: 3.5rem;
        font-weight: 600;
        text-align: center;
      }
      //   Form
      form {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        // Group
        .group {
          position: relative;
          label {
            font-size: 14px;
            color: rgb(99, 102, 102);
            position: absolute;
            top: -10px;
            left: 10px;
            background-color: $white;
            transition: all 0.3s ease;
          }
          input,
          textarea {
            padding: 20px;
            border-radius: 5px;
            border: 1px solid rgba(0, 0, 0, 0.2);
            margin-bottom: 20px;
            outline: 0;
            width: 100%;
            background-color: transparent;
          }
          :is(input, textarea):placeholder-shown + label {
            top: 20px;
            background-color: transparent;
          }
          :is(input, textarea):focus {
            border-color: #3366cc;
          }
          :is(input, textarea):focus + label {
            top: -10px;
            left: 10px;
            background-color: $white;
            color: #3366cc;
            font-weight: 600;
            font-size: 14px;
          }
          textarea {
            resize: none;
            height: 100px;
          }
        }
        // Button
        button {
          background-color: rgba($black, 0.8);
          color: $white;
          border: none;
          border-radius: 5px;
          padding: 10px;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          &:hover {
            background-color: $black;
          }
        }
      }
      :is(.title, form, .group, input, textarea, .submit) {
        opacity: 0;
      }
    }
    @include mobile {
      width: 100%;
    }
  }
  .contact-image {
    width: 40%;
    img {
      width: 70%;
    }
    @include mobile {
      display: none;
    }
  }
}
</style>
