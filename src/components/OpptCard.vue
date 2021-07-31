<template>
  <div class="oppt-card">
    <div class="header">
      <div class="left-side-box">
        <div class="title">
          {{ title }}
        </div>
        <div class="summary">
          {{ summary }}
        </div>
      </div>
      <div class="profile">
        <img :src="faceUrl" />
      </div>
    </div>
    <div class="footer">
      <div class="left-side-box">
        <div v-if="unit === 'min'" class="updated-before min">
          {{ diff }}분 전
        </div>
        <div v-else-if="unit === 'hour'" class="updated-before hour">
          {{ diff }}시간 전
        </div>
        <div v-else-if="unit === 'day'" class="updated-before day">
          {{ diff }}일 전
        </div>
        <div v-else-if="unit === 'month'" class="updated-before month">
          {{ diff }}달 전
        </div>
        <div v-else class="updated-before-year">{{ diff }}년 전</div>
        <div class="alarm" v-if="isAlarming">
          <img src="@/assets/images/ring-bell.svg" alt="ring-bell" />
        </div>
      </div>
      <div class="importance red">IMPORTANT</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "OpptCard",
  props: {
    title:String,
    summary:String,
    diff:Number,
    unit:String,
    isAlarming:Boolean,
    faceUrl:String
  }
  // diff와 unit, importance 구하는 로직 필요하다.
  // summary는 KoBART summarization 활용해보면 좋을 거 같다.
};
</script>
<style lang="scss">
.oppt-card {
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

  .header {
    text-align: left;
    display: flex;
    justify-content: space-between;
    padding: 15px;

    .title {
      font-weight: bold;
      font-size: 20px;
      line-height: 23px;
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
  .footer {
    display: flex;
    justify-content: space-between;
    padding: 15px;

    .left-side-box {
      display: flex;
      .updated-before {
        display: flex;
        align-items: center;
      }
      .alarm {
        padding-left: 8px;
        display: flex;
        align-items: center;
      }
    }
    .red {
      background-color: #f53b4d;
      padding: 5px;
      color: #ffffff;
      display: flex;
      align-items: center;
      border-radius: 8px;
    }
  }
}
</style>