<template>
 <div v-html = 'this.$store.state.htmlData'>
     
 </div>
</template>

<script>
 export default {
    name: 'Show',
   data () {
     return {
         htmlDa: this.$store.state.aa
     }
   },
   components: {

   }
 }
</script>

<style>

 
</style>
