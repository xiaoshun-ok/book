/* indexedDB 方法的封装 */
// H5 对不同浏览器兼容
// #ifdef H5
if(!window.indexedDB){
	window.indexedDB = window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
}

if(!window.IDBTransaction){
	window.IDBTransaction =window.webkitIDBTransaction || window.msIDBTransaction;
}

if(!window.IDBKeyRange){
	window.IDBKeyRange =window.webkitIDBKeyRange || window.msIDBKeyRange;
}
// #endif



import Idb from "@/common/Idb.js"
const db_student_config={
  dbName: "log",
  version: 2,
  tables: [
    {
      tableName: "err",
      option: { keyPath: "id", autoIncrement: true},
      indexs: [ {key: "code"},{key: "message"}]
    },
		{
      tableName: "record",
      option: { keyPath: "id", autoIncrement: true},
      indexs: [ {key: "user",option:{  unique: true }}]
    }
  ]
};

export default Idb(db_student_config) 




