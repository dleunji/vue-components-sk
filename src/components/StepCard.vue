<template>
  <div class="step-card">
    <div class="step-header">
      <div class="step-title">{{ stage }}단계 : {{ title }}</div>
      <div class="summary">
        {{ summary }}
      </div>
    </div>
    <div class="step-footer">
      <div class="right-side-box">
        {{ $moment(deadline).format("YYYY-MM-DD") }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "StepCard",
  props: {
    stage: Number,
    title: String,
    summary: String,
  },
  data() {
    return {
      deadline: new Date(),
    };
  },
};
</script>
<style lang="scss">
.step-card {
  font-family: Roboto;
  width: 391px;
  height: 206px;
  background-color: #ebebeb;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: #333232;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .step-header {
    text-align: left;
    padding: 15px;
    .step-title {
      font-weight: bold;
      font-size: 20px;
      line-height: 23px;
      padding-top: 5px;
    }
    .summary {
      padding-top: 7px;
    }
    .profile {
      width: 50px;
      height: 50px;
      background-color: white;
      border-radius: 30px;
      text-align: center;
    }
  }
  .step-footer {
    display: flex;
    justify-content: flex-end;
    padding: 15px;
  }
}
</style>