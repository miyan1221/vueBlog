<template>
    <div >
        <Header></Header>
<!--        blogs-->
        <div class="block">
              <el-timeline>
<!--                <el-timeline-item :timestamp="blog.created" placement="top" v-for="blog in blogs">-->
<!--                  <el-card>-->
<!--                        <router-link to="{name: 'BlogDetail', params:{blogId: blog.id}}">-->
<!--                    <h4>{{blog.title}}</h4>-->
<!--                        </router-link>-->
<!--                    <p>{{blog.description}}</p>-->
<!--                  </el-card>-->
<!--                </el-timeline-item>-->

                <el-timeline-item timestamp="2022/4/12" placement="top" >
                  <el-card>
                    <h4>标题</h4>
                    <p>描述 p22 9分30秒后端时间初始化操作 记得后期替换</p>
                  </el-card>
                </el-timeline-item>

              </el-timeline>

            <el-pagination class="m-page"
              background
              layout="prev, pager, next"
                           :current-page="currentPage"
                           :page-size="pageSize"
                           :total="total"
                           @current-change = page>
            </el-pagination>

        </div>
    </div>
</template>

<script>
    import Header from "@/components/Header";
    export default {
        name: "Blogs",
        components:{Header},  //组件注册
        data(){
            return{
                blogs:{},
                currentPage:1,
                total: 0,
                pageSize: 5,

            }
        },
        methods:{
            page(currentPage){
                const  _this = this
                _this.$axios.get("/blogs?currentPage=" + currentPage).then(res => {
                    console.log(res)  //终端输出信息测试一下
                    _this.blogs = res.data.data.records
                    _this.currentPage = res.data.data.current
                    _this.total = res.data.data.total
                    _this.pageSize = res.data.data.size
                    // 右边到底写什么要根据请求结构来分析，变量名可能不同
                })
            }
        },
        created() {
            this.page(1)
        }
    }
</script>

<style scoped>
    .m-page{
        /*margin: 0 auto;*/
        text-align: center;
        /*居中显示*/
    }

</style>