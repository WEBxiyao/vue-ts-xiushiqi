import DateItem from '@/model/date'
import Cate from '@/model/category'
class dataAction {
    dateKey:string;
    meodoList:Array<DateItem>
    constructor(dateKey:string='item'){
    this.dateKey=dateKey
    // 读取本地存储的数据
    this.meodoList=this.readData()
    }
    readData(){
     const strData:string | null=localStorage.getItem(this.dateKey)
     let arrData:any[]=[]
     if(strData){
        arrData=JSON.parse(strData)
     }
     return arrData
    }
    //添加完数据返回数据的id
    addData(newData:DateItem):number{
     const dataArry=this.meodoList || []
     const id=dataArry.length===0?1:dataArry[dataArry.length-1].id+1
     newData.id=id
     dataArry.push(newData)
     //保存到本地
     this.saveData(dataArry)
     return id
    }
    //保存到本地
    saveData(arrData:Array<DateItem>){
     const str:string=JSON.stringify(arrData)
     localStorage.setItem(this.dateKey,str)
    }
    //编辑
    editData(listItem:DateItem){
    const item:DateItem|undefined=this.meodoList.find(v=>v.id===listItem.id)
    if(item){
        listItem.id=item.id
        listItem.title=item.title
        listItem.time=item.time
	    listItem.category=item.category
    }
    this.saveData(this.meodoList)
    }
    //删除
    removeData(id:string | number):boolean{
        const index=this.meodoList.findIndex(v=>v.id===id)
        if(index>-1){
            this.meodoList.splice(index,1)
            this.saveData(this.meodoList)
            return true
        }
        return false
    }
}

export default dataAction