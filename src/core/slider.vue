<template>
  <div :class="cname">
    <swiper :options="options">
      <swiper-slide v-for="item in items" :key="item.src">
        <router-link :to="{name : item.href}">
          <img :src="item.src" :alt="item.title" />
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  props: {
    options: {
      type: Object,
      default () {
        return {
          pagination: {
            el: '.swiper-pagination'
          },
          effect: 'fade',
          loop: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          }
        }
      }
    },
    cname: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {}
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>
