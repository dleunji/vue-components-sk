<template>
  <vc-date-picker
    v-model="date"
    mode="dateTime"
    color="gray"
  />
</template>
<script>
export default ({
  data() {
    return {
      date : new Date(),
      timezone: '',
    }
  }
})

</script>
<style lang="scss">
</style>
