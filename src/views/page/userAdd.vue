<template>
  <div class="user-add">
    <user-form
      @onSubmit="onSubmit"
      :form="form"
    />
  </div>
</template>
<script>
import UserForm from '@/components/userForm.vue';
import userApi from '@/api/user';

export default {
  data() {
    return {
      form: {
        username: '',
        passwd: '',
        avatar: '',
        power: 1,
      },
    };
  },
  components: {
    UserForm,
  },
  created() {
    const { pin } = this.$route.params;
    if (pin) {
      // 读取用户详情
      userApi.queryInfo({ pin }).then((res) => {
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
        userApi.changeInfo(this.form).then((res) => {
          console.log(res);
          this.$message.success('修改成功');
          this.$router.push({
            name: 'UserList',
          });
        });
      } else {
        userApi.register(this.form).then((res) => {
          console.log(res, this.form);
          this.$message.success('新增成功');
          this.$router.push({
            name: 'UserList',
          });
        });
      }
    },
  },
};
</script>
