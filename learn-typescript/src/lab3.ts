function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(3, 4));

function sayHello(name: string): string {
    return "Xin chao " + name;
}

sayHello("anzee");

function sayHiAnhTrai(name: string): void {
    console.log("Xin chao " + name);
}

sayHiAnhTrai("An zee");

const sumAB = (a: number, b: number): number => {
    return a + b;
};
sumAB(3, 4);


const sayHellerUser = (user: string | number = "hoadv") => {
    return user;
};
console.log(sayHellerUser());
console.log(sayHellerUser("namdv"));
console.log(sayHellerUser(66));