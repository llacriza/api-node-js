let arrNum = [60, 7, 33];
console.log(arrNum.length);

let arrString = ["Divine","Molly"]
arrString.push("Jessica");
console.log(arrString.length);

let arrStringDell = ["Dog", "Cat", "Bird"];
arrStringDell.pop();
console.log(arrStringDell.length);

let arrNumEmpty: number[] = [];
arrNumEmpty.push(10, 67);
console.log(arrNumEmpty.length);

let loopArraySimple = [17, 734, 6, 9, 10];
for (let i = 0; i < loopArraySimple.length; i++) {
    console.log(loopArraySimple[i]);
}

let loopArraySum = [5, 2, 6, 60, 10];
let sum = 0;
for (let i = 0; i < loopArraySum.length; i++) {
    sum += (loopArraySum[i]);
}
    console.log(sum);

let loopArrayMulti = [9, 52, 1,];
for (let i = 0; i < loopArrayMulti.length; i++) {
    loopArrayMulti[i] = loopArrayMulti[i] * 2;
}
    console.log(loopArrayMulti);

let arrTreeNumReversOrder: number[] = [98, 2, 2435];
arrTreeNumReversOrder.reverse();
console.log(arrTreeNumReversOrder);

//tasks from interview
let arrNumMax: number[] = [9, 78, 44, 4, 5, 6, 7, 8, 9, 10];
let max: number = arrNumMax[0];
for (let i = 1; i < arrNumMax.length; i++) {
    if (arrNumMax[i] > max) {
        max = arrNumMax[i];
    }
}
console.log(max);

let arrNumMin: number[] = [9, 78, 44, 4, 65, 30, 56, 287, 9, 10];
let min: number = arrNumMin[0];
for (let i = 1; i < arrNumMin.length; i++) {
    if (arrNumMin[i] < min) {
        min = arrNumMin[i];
    }
}
console.log(min);

let arrCountEven: number[] = [4, 7, 10, 15, 22, 30];
let evenCount: number = 0;
for (let i: number = 0; i < arrCountEven.length; i++) {
    if (arrCountEven[i] % 2 === 0) {
        evenCount++;
    }
}
console.log(evenCount);

let arrNegatNum: number[] = [-5, 3, 0, 8, -2, 10];
let positiveNumbers: number[] = [];
for (let i: number = 0; i < arrNegatNum.length; i++) {
    if (arrNegatNum[i] > 0) {
        positiveNumbers.push(arrNegatNum[i]);
    }
}

console.log(positiveNumbers);
