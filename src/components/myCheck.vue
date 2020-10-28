<template>
    <div>
        <h4>测试ts里面的v-model的写法</h4>
        <p>这个地方是接受的值：{{value}}</p>
        <button @click="clickModel">测试v-model</button>
    </div>
</template>
<script lang="ts">
import {Vue,Prop ,Component,Emit,Model} from 'vue-property-decorator'
@Component
export default class myCheck extends Vue{
    @Prop({type:Number,default:0}) value!:number
    @Emit()
    input(num:number){

    }
    clickModel(){
        this.input(22)
    }
   
}
</script>