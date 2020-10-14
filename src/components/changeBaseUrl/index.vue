<template>
  <a-drawer
    title="修改地址"
    placement="top"
    :closable="false"
    :visible="visible"
    @close="onClose"
  >
    <div align="center">
      <div class="url-container">
        <a-form-model
          :model="form"
          layout="horizontal"
          :label-col="{ span: 2 }"
          :wrapper-col="{ span: 12 }"
        >
          <a-form-model-item label="名称">
            <a-select
              placeholder="请选择"
              v-model="form.region"
              @change="handleSelectChange"
            >
              <a-select-option
                v-for="(item, index) in urls"
                :value="item.value"
                :key="index"
              >
                {{ item.name }}
              </a-select-option>
            </a-select>
          </a-form-model-item>
          <a-form-model-item label="地址">
            <a-input
              placeholder="请输入地址"
              v-model="form.val"
            />
          </a-form-model-item>
          <a-form-model-item :wrapper-col="{ span: 4, offset: 10 }">
            <a-button-group>
              <a-button @click="cancel">取消</a-button>
              <a-button type="primary">
                确定
              </a-button>
            </a-button-group>
          </a-form-model-item>
        </a-form-model>
      </div>
    </div>
  </a-drawer>
</template>

<script>
import urls from "@/config";
export default {
  name: "changeBaseUrl",
  data() {
    return {
      urls: urls,
      visible: false,
      form: {
        region: undefined,
        val: "",
      },
    };
  },
  mounted() {
    this.listenAltQ();
  },
  methods: {
    onClose() {
      this.visible = false;
    },
    cancel() {
      this.visible = false;
    },
    handleSelectChange(value) {
      this.form.val = value;
    },
    listenAltQ() {
      const _this = this;
      window.addEventListener("keydown", (e) => {
        if (81 == e.keyCode && e.altKey) {
          _this.visible = true;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.url-container {
  width: 760px;
}
</style>
