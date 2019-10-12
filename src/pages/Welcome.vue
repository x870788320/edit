<template>
 <div class = "Welcome">
   <div class = "Welcome_text">
      <span>Welcome to your edit !</span>
   </div>
   <img src = '../assets/logo.png'/>
   <div class="Welcome_btn">
      <el-button type="primary" @click="startEdit()">
          <i class="el-icon-edit"></i>
          开始编辑
      </el-button>
   </div>
 </div>
</template>

<script>
 export default {
     name: 'Welcome',
   data () {
     return {

     }
   },
   methods:{
     startEdit(){
       this.$router.push({
         name: 'home'
       })
     }
   }
 }
</script>

<style scoped lang = 'less'>
.Welcome{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .Welcome_text{
    font: 42px/2 '';
  }
  .Welcome_btn{
  margin:80px;
  }
}

 
</style>
