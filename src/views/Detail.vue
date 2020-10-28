<template>
    <div>
       <newMyCheck v-model="foo" />
         <button  @click="onAlterFoo">父组件改变foo</button>
    </div>
</template>
<script lang="ts">
import newMyCheck from '../components/newMyCheck.vue'
import {Component,Vue,Provide} from 'vue-property-decorator'
@Component({
    components:{
        newMyCheck
    },
})
export default class Detail extends Vue{
    content:string="这个是详情页面的数据"
    foo:string="我是原来的值"
    onAlterFoo(){
    this.foo="修改后的值"
    }
    @Provide()
    app=this
    constructor(){
        super()
    }
    test(){
        console.log("详情测试方法")
    }
    mounted(){
        this.test()
    }
    
}
</script>