<template>
  <div class="category-add">
    <category-form
      @onSubmit="onSubmit"
      :form="form"
    />
  </div>
</template>
<script>
import CategoryForm from '@/components/categoryForm.vue';
import categoryApi from '@/api/category';

export default {
  data() {
    return {
      form: {
        id: '',
        name: '',
        c_items: [],
        son: '',
      },
    };
  },
  components: {
    CategoryForm,
  },
  created() {
    const { _id } = this.$route.params;
    if (_id) {
      // 读取商品详情
      categoryApi.detail({ _id }).then((res) => {
        console.log(res);
        this.form = res.data.data;
        this.form.son = this.form.c_items.join(',');
      });
    }
  },
  methods: {
    onSubmit(form) {
      this.form.c_items = form.son.split(',');
      this.form.name = form.name;
      // eslint-disable-next-line no-underscore-dangle
      if (this.$route.params._id) {
        categoryApi.categoryEdit(this.form).then((res) => {
          console.log(res);
          this.$message.success('修改成功');
          this.$router.push({
            name: 'Category',
          });
        });
      } else {
        categoryApi.categoryAdd(this.form).then((res) => {
          console.log(res, this.form);
          this.$message.success('新增成功');
          this.$router.push({
            name: 'Category',
          });
        });
      }
    },
  },
};
</script>
