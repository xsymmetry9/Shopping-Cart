class User{
    constructor(name){
        this.name = name;
        this.items = [];
    }

    addItems = (obj) => {
        console.log(`The item is ${obj.id} and you have ordered ${obj.quantity}`);
    }
    getItems = () =>{
        return this.items;
    }

    findItem = (findItem) =>{
        return this.items.find((item) => item === findItem);
    }

    deleteItem = (findItem) =>{
        const index = this.items.findIndex(item => item === findItem);
        if(index !== -1){
            this.items.splice(index, 1);
        }

    }
}

export default User;