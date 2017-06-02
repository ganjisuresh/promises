//var Promise=require('promise')

/*function service(){
	console.log("I am Callback")
}
var array=[1,2,3];
var obj={
	name:'scott',
	city:'Bostan'
}


function sample(name){

	//console.log(name)
	console.log(name())

}
sample("Uma")
sample(array)
sample(service)*/

function getData(val,err){

	return new Promise(function(resolve,reject){
		/*if(true){
			resolve()

		}
		reject()*/

		if(err){
			reject(err)
		}
		resolve(val)

	})
}
/*function sample(){
	//return "uma"
	return new Promise(function(resolve,reject){
		if(err){
			reject(err)
		}
		resolve(val)

}

sample().then(function(data){
	console.log(data)

})*/
getData("suresh","i am the error")
.then(function(data){
	console.log(data)

})
/*.catch(function(){
	console.log('This is error block');
	console.log(err);
})*/