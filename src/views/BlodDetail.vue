<template>
    <div>
        <Header></Header>
        <div class="m-blog">

        </div>
        detail
    </div>
</template>

<script>
    import Header from "@/components/Header";
    export default {
        name: "BlodDetail",
        components: {Header}
    }
</script>

<style scoped>
    .m-blog{
        /*//直接copy组件ui*/
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
    }
</style>