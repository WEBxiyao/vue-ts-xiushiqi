<template>
    <div>
        <h4>这个是用ts的写法来测试v-model</h4>
        <p>这个是传过来的值：{{checked}}</p>
    </div>
</template>
<script lang="ts">
import {Component,Vue,Inject,Model} from 'vue-property-decorator'
@Component
export default class newMyCheck extends Vue{
    @Model('change',{type:String}) checked !:string
    @Inject() readonly app:any
    mounted(){
     console.log(this.app.content)
    }
}
</script>