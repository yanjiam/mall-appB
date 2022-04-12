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
    const { id } = this.$route.params;
    console.log(id);
    if (id) {
      // 读取商品详情
      categoryApi.detail(id).then((res) => {
        this.form = res;
      });
    }
  },
  methods: {
    onSubmit(form) {
      this.form.c_items = form.son.split(',');
      this.form.id = form.id;
      this.form.name = form.name;
      if (this.$route.params.id) {
        categoryApi.categoryedit(this.form).then((res) => {
          console.log(res);
          this.$message.success('修改成功');
          this.$router.push({
            name: 'Category',
          });
        });
      } else {
        categoryApi.categoryadd(this.form).then((res) => {
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
