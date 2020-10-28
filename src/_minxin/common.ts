// 两种写法
//第一种写法
import { Vue, Component } from 'vue-property-decorator';
declare module 'vue/types/vue' {
    interface Vue {
        textContent: string;
    }
}

@Component
export default class myMixins extends Vue {
    textContent: string = '这个是第一种写法mixins'
}

