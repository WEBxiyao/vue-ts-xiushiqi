import Cate from './category'
class DateItem {
	id:number
	title!:string
	time:string
	category:number
	constructor(id:number=-1,title:string='',category:Cate=-1,time:number=-1,){
		this.id=id
		this.title=title
		this.time=this.formTime(time)
		this.category=category
	}
	formTime(time:number):string{
		const t=new Date()
		const str=`${t.getFullYear()}-${t.getMonth()+1}-${t.getHours().toString().padStart(2,'0')}-${t.getMinutes().toString().padStart(2,'0')}`
		return str
	}
}
export default DateItem