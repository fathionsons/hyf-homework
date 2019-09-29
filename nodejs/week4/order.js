class Order {
    constructor (orderType, status, created, modified, id) {
        
        
        this.orderType = orderType;
        this.status = status;
        this.created = new Date (Date.now());
        this.modified = new Date (Date.now());
        this.id = this.id;
    }

   
};

const orderOne = new Order ('pizza 1', 'ordered');
console.log(orderOne);
const orderTwo = new Order ('Pizza 1', 'preparing');
console.log(orderTwo);
const orderThree = new Order ('pizza 1', 'delivered'); 
console.log(orderThree);



module.exports = Order; 