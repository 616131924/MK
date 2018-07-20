<template>
  <div>
   <panel v-for="youji in data" :key="youji.id" :list='youji' ></panel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list:{
        title:'123',
        content:'12315465',
        user:{
          name:'ada'
        }
      },
      data:''
    }
  },
  created(){
    const result = this.$http.get('/auth/youji')
    result.then((res)=>{
      this.data=res.data
      //console.log(res.data)
    })
  }
}
</script>

<style>

</style>
