export default function calculateCircle(params: number): string{
    let resultMsg:string = '정상적인 결과를 출력.';

    if(!params){
        resultMsg='최소 한가지 값이 필요합니다.';
    }

    if(params && typeof params !== 'number'){ //===은 타입까지 검사해주므로 typeof는 필요없지 않을까?
        resultMsg = '숫자형타입만 계산이 가능합니다.';
    }

    if(params<0){
        resultMsg = '반지름은 0보다 커야 합니다.';
    }

    return resultMsg;
}