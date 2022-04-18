<template>
    <div class="m-content">
        <h3>欢迎来到博客</h3>
        <div class="block">
            <el-avatar :size="50" :src="user.avatar"></el-avatar>
            <div>{{user.username}}</div>
<!--            传递js变量数据-->
        </div>

         <div class="m-action">
             <span><el-link href="/">主页</el-link></span>
            <el-divider direction="vertical"></el-divider>
            <span><el-link type="success" href="#/blog/add" >发表文章</el-link></span>
            <el-divider direction="vertical"></el-divider>
             <span v-show="!hasLogin"><el-link type="primary" href="#/login"  >登陆</el-link></span>
            <span v-show="hasLogin"><el-link type="danger" @click="logout" >退出登陆</el-link></span>
          </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data(){
            return{
                user:{
                    username: '请先登陆',
                    avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
                    //先给一个默认数据之后再写接口获取更改
                },
                hasLogin:false  //默认为false
            }
        },
        methods:{
            //此处尚未配置后端，所以会出错
            logout(){
                const _this = this
                _this.$axios.get("/logout", {
                    headers:{
                        "Authorization":localStorage.getItem("token")
                    }
                }).then(res => {
                    _this.$store.commit("REMOVE_INFO")
                    _this.$router.push("/login")
                })
            }
        },
        created() {
            // 此处加载用户的登陆信息，目前store尚未搭建好
            if(this.$store.getters.getUser.username){
                this.user.username = this.$store.getters.getUser.username
                this.user.avatar = this.$store.getters.getUser.avatar
                this.hasLogin = true
            }
        }
    }
</script>

<style scoped>
    .m-content{
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
    }
    .m-action{
        margin: 10px 0;
    }
</style>