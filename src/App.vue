<template>
  <div id="app">
    <OpptCard
      :title="title"
      :summary="summary"
      :diff="diff"
      :unit="unit"
      :isAlarming="true"
      :faceUrl="faceUrl"
    />
    <Slider
      :width="width"
      :height="height"
      :min="min"
      :max="max"
      :disabled="disabled"
    />
    <k-progress
      :percent="percent"
      :line-height="10"
      color="#f53b4d"
      :show-text="false"
    />
    <StepCard :stage="stepStage" :title="stepTitle" :summary="stepSummary" />
    <DTPicker />
    <FileAgent />
    <OpptEditList />
  </div>
</template>

<script>
import OpptCard from "./components/OpptCard";
import Slider from "./components/Slider";
import StepCard from "./components/StepCard";
import DTPicker from "./components/DTPicker";
import FileAgent from "./components/FileAgent";
import OpptEditList from "./components/OpptEditList";
export default {
  name: "App",
  components: {
    OpptCard,
    Slider,
    StepCard,
    DTPicker,
    FileAgent,
    OpptEditList,
  },
  data() {
    return {
      /* OpptCard */
      title: "친환경 PET 샘플 요청 件",
      summary: "중국 화장품 공장에 8/25까지 샘플 배송",
      diff: 1,
      unit: "hour",
      isAlarming: true,
      faceUrl: require("@/assets/images/face.png"),

      /* Slider */
      width: 300,
      height: 10,
      min: 0,
      max: 100,
      disabled: false,
      percent: 30,

      /* StepCard */
      stepStage: 1,
      stepTitle: "업체 미팅",
      stepSummary: "피곤하지..",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
