<template>
 <div class = 'leftheader'>
     <div class = 'leftheader_tool'>
         <div v-for="item in toolBtn" 
         :key="item.id" 
         class = 'leftheader_tool_item'
         @mouseover="toolMouseOver(item.id)"
         @mouseout="toolMouseOut()"
         >
             <div> 
                <i :class="item.icon"></i>
             </div>
             <p :class="{isShow: item.id === isShow}" 
             v-show="item.id === isShow"
             style="width:">
                {{item.msg}}
             </p>
         </div>
     </div>
     
     <div class = 'leftheader_close' 
         @mouseover="toolMouseOver('close')"
         @mouseout="toolMouseOut()">
         <div>X</div>
         <p :class="{isShow: 'close' === isShow}" v-show="'close' === isShow">关闭</p>
     </div>
 </div>
</template>

<script>
 export default {
    name: 'leftheader',
    data () {
        return {
            toolBtn: [
                {
                    id:0,
                    icon: 'el-icon-circle-plus',
                    msg: '添加文件夹'
                },
                {
                    id:1,
                    icon: 'el-icon-circle-plus-outline',
                    msg: '添加文件'
                },
                {
                    id:2,
                    icon: 'el-icon-delete',
                    msg: '删除'
                },
                {
                    id:3,
                    icon: 'el-icon-edit',
                    msg: '修改'
                }
            ],
            isShow: ''
        }
    },
    computed: {
        
    },
    methods: {
        toolMouseOver(id){
            this.isShow = id
        },
        toolMouseOut(){
            this.isShow = ''
        }
    }
}
</script>

<style lang="less" scoped>
.leftheader{
    display: flex;
    justify-content: space-between;
    .leftheader_tool{
        display: flex;
        flex:1;
        justify-content: flex-start;
        .leftheader_tool_item{
            border-radius: 10%;
            position: relative;
            div{
                width:38px;
                height:36px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 24px;
            }
        }
    }
    .leftheader_close{
        div{
            width:38px;
            height:36px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}

.leftheader_tool_item:hover, .leftheader_close:hover{
    background-color: #ddd;
}
.isShow{
    font-size: 8px;
    position: absolute;
    border: 1px solid #aaa;
    background-color: #fff;
    border-radius: 10%;
    padding:3px;
    white-space : nowrap ;
}
 
</style>
