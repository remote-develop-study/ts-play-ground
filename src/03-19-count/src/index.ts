type NullableHTMLElement = HTMLElement | null;
const numEl: NullableHTMLElement = document.getElementById("count-number")!;
const upEl: NullableHTMLElement = document.getElementById("increment-btn")!;
const downEl: NullableHTMLElement = document.getElementById("decrement-btn")!;
let currentNumber: number = Number(numEl.innerText);

const printNum: any = (num: string) => {
    numEl.innerText = num;
};

const numberUp: any = (num: number) => {
    return currentNumber += num;
};
const numberDown: any = (num: number) => {
    currentNumber -= num;
};

upEl.addEventListener("click", () => {
    numberUp(1);
    printNum(currentNumber);
});

downEl.addEventListener("click", () => {
    numberDown(1);
    printNum(currentNumber);
});
