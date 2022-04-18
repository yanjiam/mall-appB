<template>
  <a-form-model
    class="cateadd"
    :model="form"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <a-form-model-item label="类目名称">
      <a-input v-model="form.name" />
    </a-form-model-item>
    <a-form-model-item label="子类目">
      <a-input
        v-model="form.son"
        type="textarea"
      />
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button
        type="primary"
        @click="onSubmit"
      >
        确认
      </a-button>
      <a-button style="margin-left: 10px;">
        取消
      </a-button>
    </a-form-model-item>
  </a-form-model>
</template>
<script>

export default {
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      // form: {
      //   id: '',
      //   categoryName: '',
      //   c_items: [],
      //   desc: '',
      // },
    };
  },
  props: ['form'],
  created() {
  },
  methods: {
    onSubmit() {
      this.$emit('onSubmit', this.form);
      return true;
    },
  },
};
</script>
<style scoped>
.cateadd {
  padding-top: 60px;
}
</style>
