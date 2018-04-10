<template>
  <div class="test" style="padding: 10px">
    <r-button type="primary" size="small" @click="show = !show">按钮</r-button>
    <r-button type="primary">大按钮</r-button>
    <r-button type="plain" size="small">白底按钮</r-button>
    <r-lead>你好我是指导标题</r-lead>
    <r-cash-bulk-group v-model="bulkInfo">
      <r-cash-bulk :bulkInfo="bulkInfo1"></r-cash-bulk>
      <r-cash-bulk :bulkInfo="bulkInfo2"></r-cash-bulk>
      <r-cash-bulk :bulkInfo="bulkInfo3"></r-cash-bulk>
    </r-cash-bulk-group>
    <r-table :data="tableData" :headers="headTitle" width="60">
    </r-table>
    <!--<r-fade-in-transition>-->
    <!--<div v-show="show">-->
    <r-form :model="form" ref="form" :rules="rules">
      <r-form-item label="名称" prop="name">
        <r-input v-model="form.name"></r-input>
      </r-form-item>
    </r-form>
    <!--</div>-->

    <!--</r-fade-in-transition>-->
    <r-input>
      <i slot="suffix" class="el-input__icon el-icon-date"></i>
    </r-input>
    <collapse-transition>
      <div v-show="show">
        <div style="background-color: #409EFF;width: 200px;height: 200px"></div>
      </div>
    </collapse-transition>
    <r-button type="primary" size="fix" @click="clickHandle">弹框</r-button>
    <div style="height: 20px"></div>
    <r-tag type="success">在用</r-tag>
    <div style="height: 20px"></div>
    <r-input size="large"></r-input>
    <r-dialog :show.sync="isShow"></r-dialog>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isShow: true,
      msg1: 123457,
      // abc = (rule, value, callback) => {
      //   if (value > 1) {
      //     callback(new Error('error'));
      //   } else {
      //     callback();
      //   }
      // };
      show: true,
      bulkInfo: { duration: '1年', spend: '￥60' },
      bulkInfo1: { duration: '1年', spend: '￥60' },
      bulkInfo2: { duration: '2年', spend: '￥100' },
      bulkInfo3: { duration: '3年', spend: '￥120' },
      tableData: [{ data: 1, msg: 2 }, { data: 1, msg: 2 }, { data: 1, msg: 2 }],
      headTitle: ['aaa', 'bbb'],
      form: {
        name: 9
      },
      rules: {
        name: { required: true, validator: this.abc, trigger: 'blur' }
      }
    }
  },
  methods: {
    clickHandle () {
      this.$alert({ message: '查询失败，请稍后再试', iconClass: 'icon-shibaiicon' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.test {
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  background-image: linear-gradient(
    -180deg,
    rgba(255, 173, 70, 0.21) 0%,
    #ffad46 100%
  );
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
