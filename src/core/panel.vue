<template>
  <section :class="[panelClass, cname]">
    <h4 v-if="title" :class="{'border': isBorder}">-&nbsp;{{ title }}&nbsp;-</h4>
    <slot/>
  </section>
</template>

<script>
  export default {
    props: {
      cname: {
        type: String,
        default: ''
      },
      title : {
        type: String,
        default: ''
      },
      isBorder: {
        type: Boolean,
        default() {
          return false
        }
      }
    },
    data () {
      return {
        panelClass: 'panel'
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import '../css/element.scss';
  .panel {
    @include panel;
    >h4.border {
      border-bottom: 1px solid #ddd;
    }
  }
</style>