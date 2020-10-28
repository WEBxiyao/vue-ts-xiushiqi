<template>
  <div class="about">
    <tsTest title="这个是父组件传过来的标题"  @setClick="setFather"/>
  </div>
</template>
<script>
import tsTest from '@/components/tsTest.vue'
export default {
  components:{
    tsTest
  },
  methods:{
    setFather(e){
      console.log(e,"*************")
    }
  }
}
</script>
