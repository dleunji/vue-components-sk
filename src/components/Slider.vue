<template>
  <vue-slider 
    v-model="value"
    :width="width"
    :height="height"
    :min="min"
    :max="max"
    />
</template>
<script>
import VueSlider from 'vue-slider-component'

export default ({
  components:{VueSlider},
  props: {
    width: Number,
    height: Number,
    min: Number,
    max: Number,
    disabled: Boolean
  },
  data() {
    return {
      value : 0
    }
  }
})

</script>
<style lang="scss">
/* Set the theme color of the component */
$themeColor: #f53b4d;

/* import theme style */
@import '~vue-slider-component/lib/theme/default.scss';
</style>
