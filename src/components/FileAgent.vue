
<template>
  <div class="vfa-demo bg-light pt-3">
    <VueFileAgent
      class="upload-block"
      ref="vfaDemoRef"
      :uploadHeaders="{}"
      :multiple="true"
      :deletable="true"
      :editable="true"
      :theme="'list'"
      :meta="true"
      v-model="fileRecords"
    >
      <template v-slot:file-preview="{ fileRecord, index }">
        <div :key="index" class="grid-box-item file-row">
          <button
            type="button"
            class="close remove"
            aria-label="Remove"
            @click="onClick()"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <div
            class="progress"
            :class="{ completed: fileRecord.progress() == 100 }"
          >
            <div
              class="progress-bar"
              role="progressbar"
              :style="{ width: fileRecord.progress() + '%' }"
            ></div>
          </div>
          <div class="record-name">{{ fileRecord.name() }}</div>
          <span class="text-muted">({{ fileRecord.size() }})</span>
        </div>
      </template>
    </VueFileAgent>
  </div>
</template>
<script>
export default {
  name: "FileAgent",
  data() {
    return {
      fileRecords: [],
    };
  },
  methods: {
    removeFileRecord: function (fileRecord) {
      return this.$refs.vfaDemoRef.removeFile(fileRecord);
    },
    onClick: function () {
      console.log("heheh");
    },
  },
};
</script>
<style lang="scss" scoped>
.vfa-demo {
  width: 500px;
}

.vfa-demo .file-preview-wrapper::before {
  background: transparent;
}

.vfa-demo .file-row {
  position: relative;
  z-index: 15;
  line-height: 24px;
  text-align: left;
  background: #eee;
  padding: 2px 5px;
}

.vfa-demo .remove {
  float: right;
  margin-top: -3px;
  border: none;
  font-size: 23px;
  color: #888;
}

.vfa-demo .progress {
  float: right;
  width: 100px;
  height: 10px;
  margin-top: 7px;
  margin-right: 10px;
  background: #fff;
  border: 1px solid #aaa;
  border-radius: 15px;
}

.vfa-demo .progress.completed {
  display: none;
}
.vfa-demo .record-name {
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 60%;
}

.vfa-demo .drop-help-text {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 2px;
  background: rgba(255, 255, 255, 0.75);
  z-index: 1200;
  font-size: 32px;
  font-weight: bold;
  color: #888;
  align-items: center;
  justify-content: center;
  display: none;
}

.vfa-demo .is-drag-over .drop-help-text {
  display: flex;
}

.vfa-demo .upload-block {
  border: 2px dashed transparent;
  padding: 20px;
  padding-top: 0;
}

.vfa-demo .is-drag-over.upload-block {
  border-color: #aaa;
}

.vfa-demo .vue-file-agent {
  border: 0 !important;
  box-shadow: none !important;
}
</style>