/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.items = [];
    this.size = size;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    this.items.push(val);
    
    if(this.items.length <= this.size) {
        let sum = 0;
        for(let i = 0; i < this.items.length; i++) {
            sum  += this.items[i];
        }
        return sum / this.items.length;
    }
    let sum = 0;
    for(let i = this.items.length - this.size; i < this.items.length; i++) {
        sum += this.items[i];
    }
    return sum / this.size;
    
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */