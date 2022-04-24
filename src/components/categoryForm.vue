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
      <a-input v-model="form.son" type="textarea" />
    </a-form-model-item>
    <a-form-model-item label="类目图片" required>
      <a-upload
        action="http://mallapi.duyiedu.com/upload/images?appkey=LiuDeHua_1616117821248"
        list-type="picture-card"
        :file-list="fileList"
        @preview="handlePreview"
        @change="handleChange"
        name="avatar"
      >
        <div v-if="fileList.length < 1">
          <a-icon :type="loading ? 'loading' : 'plus'" />
          <div class="ant-upload-text">Upload</div>
        </div>
      </a-upload>
      <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
        <img alt="example" style="width: 100%" :src="previewImage" />
      </a-modal>
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit"> 确认 </a-button>
      <a-button style="margin-left: 10px"> 取消 </a-button>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
export default {
  data() {
    return {
      fileList: [],
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      loading: false,
      previewImage: '',
      previewVisible: false,
      // form: {
      //   id: '',
      //   categoryName: '',
      //   c_items: [],
      //   desc: '',
      // },
    };
  },
  props: ['form'],
  created() {},
  watch: {
    form(newData) {
      if (newData.avatar && newData.avatar !== this.fileList[0]?.url) {
        this.fileList[0] = {
          uid: 0,
          name: 'image-0.png',
          status: 'done',
          url: newData.avatar,
        };
      }
    },
  },
  methods: {
    onSubmit() {
      this.$emit('onSubmit', this.form);
      return true;
    },
    handleChange({ file, fileList }) {
      console.log('fileList: ', fileList);
      if (file.status === 'done') {
        this.form.avatar = file.response.data.url;
      } else if (file.status === 'removed') {
        this.form.avatar = '';
      }
      this.fileList = fileList;
    },
    async handlePreview(file) {
      const obj = file;
      if (!file.url && !file.preview) {
        obj.preview = await getBase64(file.originFileObj);
      }
      this.previewImage = file.url || file.preview;
      this.previewVisible = true;
    },
    handleCancel() {
      this.previewVisible = false;
    },
  },
};
</script>
<style scoped>
.cateadd {
  padding-top: 60px;
}
</style>
