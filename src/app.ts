export {}

type Product = {
    id : number;
    name: string;
    status?: boolean //required
}



const a: number = 20;
const b: number = 30;
const name: string | number = "Nguyen The Anh";
const age: number = 20;
const status: boolean = true;
const info: Product = {id: 1 , name: "Nguyen The Anh"}
const stringArr: string[] = ["a", "b", "c"];
const numberArr: number[] = [1,2,3,4,5];
const objectArr: object[] = [{id: 1}, {id: 2}]

function sum(numA: number, numB: number): number {
    return numA + numB;

}
sum(a,b);
