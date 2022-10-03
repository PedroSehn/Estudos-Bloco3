export function greeter( name: string ):string {
    return `Olá ${name}`
}

export function personAge(name:string, age:number):string {
    return `Olá ${name}, voce tem ${age} anos`
}

export function sum(x: number, y: number):number {
    return x + y
}

export function sumArr(numbers: number[]) : number {
    return numbers.reduce(sum, 0)
}

export function triangle(base: number, height: number) : number {
    return (base * height) / 2;
};

export function square(side: number): number {
    return side ** 2;
}

export function rectangle(base: number, height: number) : number {
    return base * height
}