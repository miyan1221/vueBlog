<template>
    <div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="用户名" prop="username">
      <el-input v-model="ruleForm.username"></el-input>
    </el-form-item>

    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="ruleForm.password"></el-input>
    </el-form-item>




    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
        return {
          ruleForm: {
            username: '',
            password: '',
            // date1: '',
            // date2: '',
            // delivery: false,
            // type: [],
            // resource: '',
            // desc: ''
          },
          rules: {
            username: [
              { required: true, message: '请输入用户名', trigger: 'blur' },
              { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
            ],
            password: [
              { required: true, message: '请输入密码', trigger: 'change' }
            ],
            // date1: [
            //   { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
            // ],
            // date2: [
            //   { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
            // ],
            // type: [
            //   { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
            // ],
            // resource: [
            //   { required: true, message: '请选择活动资源', trigger: 'change' }
            // ],
            // desc: [
            //   { required: true, message: '请填写活动形式', trigger: 'blur' }
            // ]
          }
        };
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('submit!');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      }
    }
</script>

<style scoped>
    .demo-ruleForm{
        max-width: 500px;
        margin: 0 auto;
    }
</style>