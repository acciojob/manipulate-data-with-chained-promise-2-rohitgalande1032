//your JS code here. If required.
let output = document.getElementById("output");


function promise1 () {
	return new Promise((resolve, reject) => {
		setTimeout(()=>{
			resolve([1, 2, 3, 4])
		}, 3000)
	})
}

function promise2 (numbers) {
	return new Promise((resolve, reject) => {
		setTimeout(()=>{
			let evenNum = numbers.filter((item) => item%2 === 0)
			resolve(evenNum)
		}, 1000)
	})
}

function promise3 (numbers) {
	return new Promise((resolve, reject) => {
		setTimeout(()=>{
			let doubleNum = numbers.map((item) => item*2)
			resolve(doubleNum)
		}, 2000)
	})
}
 
promise1().then((arr)=> {
	output.textContent = arr;
	console.log(arr)
	return promise2(arr)
}).then((evenNum) => {
	console.log(evenNum)
	output.textContent = evenNum;
	return promise3(evenNum)
}).then((doubleNum) => {
	console.log(doubleNum)
	output.textContent = doubleNum;
})
 
