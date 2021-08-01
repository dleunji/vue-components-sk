<template>
  <vc-date-picker v-model="date" mode="dateTime" color="gray">
    <template v-slot="{ inputValue, inputEvents }">
      <input
        class="bg-white border px-2 py-1 rounded"
        :value="inputValue"
        v-on="inputEvents"
      />
    </template>
  </vc-date-picker>
</template>
<script>
export default {
  data() {
    return {
      date: new Date(),
      timezone: "",
    };
  },
};
</script>
<style lang="scss">
input {
  font-family: Roboto;
  width: 140px;
  border-color: rgb(216, 216, 216);
  border-style: solid;
  color: rgb(59, 59, 59);
  border-radius: 5px;
  letter-spacing: 1px;
}
</style>
