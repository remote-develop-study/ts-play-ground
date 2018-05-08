class Count{
    num:number;
    constructor(){
        this.num = 0;
    }
    plus(){
        this.num = this.num+1;
        console.log(this.num);
        document.getElementById("count-number").innerHTML = String(this.num);
    }
    minus(){
        this.num = this.num-1;
        document.getElementById("count-number").innerHTML = String(this.num);
    }
}

let oper = new Count();