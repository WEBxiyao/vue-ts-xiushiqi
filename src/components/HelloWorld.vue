<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <myCheck v-model="test"  />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {mixins}  from 'vue-class-component'
import two from '@/_minxin/two_mixin.ts'
import myCheck from './myCheck.vue'
@Component({
  components:{
    myCheck
  }
})
export default class HelloWorld extends mixins(two) {
  test:number=9
  @Prop() private msg!: string;
  mounted(){
    console.log(this.twoValue)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
