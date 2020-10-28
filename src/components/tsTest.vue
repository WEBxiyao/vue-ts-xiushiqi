<template>
    <div>
        <h4>{{title}}</h4>
        <p>{{Add}}</p>
        <button @click="changeAdd">加一</button>
         <button @click="setFather">传值给父亲</button>
    </div>
</template>
<script lang="ts">
import {Component,Prop,Vue,Watch, Emit} from 'vue-property-decorator'
import myMixins from '@/_minxin/common.ts';
@Component({
    mixins:[myMixins]
})
export default class tsTest extends Vue{
    value:number=1
    @Prop({type:String,default:'默认值'}) title!:string
    // ts中的计算属性
    get Add(){
        return this.value+10
    }
    //监听属性
    @Watch('value')
    onChangeValue(newVal:number,oldVal:number){
        console.log(newVal,oldVal,"----监听属性---")
    }
    changeAdd(){
       console.log( this.textContent)
    this.value+=1 
    }
    setFather(){
        this.setClick("点击掉emit传值给父亲")
    }
    //传值给父组件方法
    @Emit('setClick')
    setClick(content:string){

    }
}
</script>