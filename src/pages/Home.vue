<template>
 <div class="home">
    <el-container style="height: 100%;min-height:300px;">
        <el-aside width="200px">
            <FileList/>  
        </el-aside>
        <el-main style="margin:0; padding:0;display:flex;flex-direction: column;">
            <ContentC />  
            <FooterC />  
        </el-main>
    </el-container>
 </div>
</template>

<script>
 export default {
    name: 'Home',
    data () {
        return {

        }
    },
    components: {
        FileList: () => import('../components/layout/LeftCom'),
        ContentC: () => import('../components/layout/ContentCom'),
        FooterC: () => import('../components/layout/FooterCom')
    }
 }
</script>

<style lang = 'less'>
 .home_layout{
     height: 100%;
 }
</style>
