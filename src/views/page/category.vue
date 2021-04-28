<template>
  <div class="category">
    <a-form-model
      ref="ruleForm"
      :model="form"
      :rules="rules"
      :label-col="{span: 5}"
      :wrapper-col="{span: 13}"
    >
      <a-form-model-item
        label="商品类目"
        required
        prop="category"
      >
        <a-select
          v-model="form.category"
          placeholder="请选择商品类别"
          @change="changeCategory"
        >
          <a-select-option
            v-for="c in categoryList"
            :key="c.id"
            :value="c.id"
          >
            {{c.name}}
          </a-select-option>
        </a-select>
        <a-select
          v-model="form.c_item"
          placeholder="请添加子类目"
        >
          <a-select-option
            v-for="c in categoryItems"
            :key="c"
            :value="c"
          >
            {{c}}
          </a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item
        label="新类名"
        required
      >
        <a-input
          placeholder="输入要更改成的类名"
          v-decorator="[
          '新类名',
          { rules: [{ required: true, message: '类目名不能为空！' }] },
        ]"
        />
      </a-form-model-item>
      <a-form-model-item>
        <a-button
          type="primary"
          @click="submitForm()"
        >
          Submit
        </a-button>
        <a-button
          @click="resetForm()"
        >
          Reset
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
import categoryApi from '@/api/category';

export default {
  data() {
    return {
      form: {
        title: '',
        desc: '',
        category: '',
        c_items: [],
        tags: [],
        price: 0,
        price_off: 0,
        unit: '',
        inventory: 0,
        images: [],
      },
      rules: {

      },
      categoryList: [],
      categoryItems: [],
    };
  },
  created() {
    categoryApi.list().then((res) => {
      this.categoryList = res.data;
    });
  },
  methods: {
    changeCategory(category) {
      for (let i = 0; i < this.categoryList.length; i += 1) {
        if (this.categoryList[i].id === category) {
          this.categoryItems = this.categoryList[i].c_items;
        }
      }
    },
    submitForm() {
      
    },
    resetForm() {
      
    },
  },
};
</script>

<style lang="less">
.basic-detail {
  .next-btn {
    text-align: center;
  }
}
</style>
