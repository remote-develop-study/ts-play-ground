class Count{
    num:number;
    constructor(){
        this.num = document.getElementById("num");
    }
    plus(){
        this.num = this.num+1;
        document.getElementById("num").innerHTML = this.num;
    }
    minus(){
        this.num = this.num-1;
        document.getElementById("num").innerHTML = this.num;
    }
}

let oper = new Count;