function circle( radius:number ) : number{
    const circleArea :number = Math.pow(radius, 2) * Math.PI;
    return circleArea;
}

function rect(horizontal:number, vertical:number):number{
    const rectArea = horizontal * vertical;
    return rectArea; 
}   
function trapezoid(upperSide:number, lowerSide:number, height:number):number{
    const trapezoidArea = (upperSide + lowerSide) * height / 2 ;
    return trapezoidArea;
}

function calculateCircle(value:any):string{ //?역할
    let msg:string;
    if( value == null ){
        msg =  "최소 한가지 값이 필요합니다. "; 
    }else if( typeof(value) !== 'number' ){
        msg =  "숫자형 타입만 계산이 가능합니다.";
    }else if(value <= 0){
        msg =  "반지름은 0 보다 커야합니다. ";         
    }else{
        msg =  "숫자형 타입입니다. 값은 " + value;         
    }
    return msg;
}

function getArea(figure:string, val1:number, val2:number = 0, val3:number = 0):string{

    
    let area;
    let msg;
    if(figure === 'circle'){
        msg = 'figure is \' '+ figure +'\', radius is ' + val1 ;
        area = Math.pow(val1, 2) * Math.PI;
    }else if(figure === 'rect'){
        msg = 'figure is \' '+ figure +'\', horizontal is ' + val1 + ', vertical is '+ val2;
        area = val1 * val2;
    }else if(figure === 'trapezoid'){
        msg = 'figure is \' '+ figure +'\', upperSide is ' + val1 + ', lowerSide is ' +val2 +', height is ' + val3 ;
        area = (val1 + val2) * val3 / 2 ;
    }else{

    }
    return msg + ' ' + figure + '의 넓이는 ' + area + '입니다. ';
}
