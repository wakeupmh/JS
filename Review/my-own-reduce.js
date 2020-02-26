Array.prototype.myReduce = (callback, initialValue) =>{
    const initialIndice = initialValue ? 0 : 1
    let acc = initialValue || this[0]
    
    for(let i = initialIndice; i < this.length; i++) {
        acc = callback(acc, this[i], i, this)
    }

    return acc;
}

const sum = (total, value) => total + value;
const nums = [1,2,3,4,5,6,7,8,9];
console.log(nums.myReduce(sum, 0))