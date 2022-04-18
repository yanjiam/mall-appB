<template>
  <a-form-model
    class="businessadd"
    ref="ruleForm"
    :model="form"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <a-form-model-item label="邮箱" props="pin" required>
      <a-input v-model="form.pin" />
    </a-form-model-item>
    <a-form-model-item label="用户名" props="b_name" required>
      <a-input v-model="form.b_name" />
    </a-form-model-item>
    <a-form-model-item label="登录密码" props="passwd" required>
      <a-input v-model="form.passwd" />
    </a-form-model-item>
       <a-form-model-item label="权限" props="power" required>
      <a-select
        v-model="form.power"
        style="width: 120px"
      >
        <a-select-option :value="1">普通用户</a-select-option>
        <a-select-option :value="2">管理员</a-select-option>
      </a-select>
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit"> 确认 </a-button>
      <a-button style="margin-left: 10px"> 取消 </a-button>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
export default {
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
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
.businessadd {
  padding-top: 60px;
}
</style>
