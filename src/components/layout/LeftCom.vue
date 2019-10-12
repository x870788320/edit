<template>
 <div class = 'LeftCom'>
    <el-container>
        <el-header>
            <Left-header></Left-header>
        </el-header>
        <el-main>
            <el-tree 
            :data="data" 
            :props="defaultProps" 
            @node-click="handleNodeClick" 
            style = 'background-color: #ebebeb'>
            </el-tree>
        </el-main>
    </el-container>
 </div>
</template>

<script>
 export default {
    name:'LeftCom',
    data () {
        return {
             data: [
                 {
                    label: '一级 1',
                    children: [{
                        label: '二级 1-1',
                        children: [{
                            label: '三级 1-1-1'
                        }]
                    }]
                }, 
                {
                    label: '一级 2',
                    children: [{
                        label: '二级 2-1',
                        children: [{
                            label: '三级 2-1-1'
                        }]
                    }, {
                        label: '二级 2-2',
                        children: [{
                            label: '三级 2-2-1'
                        }]
                    }]
                }, 
                {
                    label: '一级 3',
                    children: [{
                        label: '二级 3-1',
                        children: [{
                            label: '三级 3-1-1'
                        }]
                    }, {
                        label: '二级 3-2',
                        children: [{
                            label: '三级 3-2-1'
                        }]
                    }]
                }
            ],
            defaultProps: {
                children: 'children',
                label: 'label'
            }
        }
    },
    components: {
        LeftHeader: () => import('./LeftHeaderCom')
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    }
 }
</script>

<style >
.el-header{
    padding:10px 0 0 0 ;
    background-color: rgba(0,0,0,0.1);
}
</style>
