<template>
  <div class="business-add">
    <business-form
      @onSubmit="onSubmit"
      :form="form"
    />
  </div>
</template>
<script>
import businessForm from '@/components/businessForm.vue';
import businessApi from '@/api/business';

export default {
  data() {
    return {
      form: {
        bname: '',
        passwd: '',
        avatar: '',
        power: 1,
      },
    };
  },
  components: {
    businessForm,
  },
  created() {
    const { pin } = this.$route.params;
    if (pin) {
      // 读取用户详情
      businessApi.queryInfo({ pin }).then((res) => {
        console.log(res.data.data);
        this.form = res.data.data;
      });
    }
  },
  methods: {
    onSubmit(form) {
      this.form = form;
      // eslint-disable-next-line no-underscore-dangle
      if (this.$route.params.pin) {
        businessApi.changeInfo(this.form).then((res) => {
          console.log(res);
          this.$message.success('修改成功');
          this.$router.push({
            name: 'BusinessList',
          });
        });
      } else {
        businessApi.register(this.form).then((res) => {
          console.log(res, this.form);
          this.$message.success('新增成功');
          this.$router.push({
            name: 'BusinessList',
          });
        });
      }
    },
  },
};
</script>
