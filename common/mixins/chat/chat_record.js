// 聊天记录处理的混入，入到App.vue中

// #ifndef  H5
export default{}
// #endif

// #ifdef  H5
import Idb from '../index_db.js'
export default {
	onShow: function() {
		
	},
	onHide: function() {
		this.setChatRecord()
	},
	methods:{
		setChatRecord(){
			Idb.then(db=>{
				let obj= this.$store.state.chat.privateMassagerObject
				for (let user in obj) {
					let record=obj[user]
					if(record.length>0){
						db.insert("record",{user,record}).then(response=>{
							console.log('suerr')
						});
					}
				}
				
			})
			
		}
	}
}
// #endif
