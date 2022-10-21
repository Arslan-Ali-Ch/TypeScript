interface UserInterface{
name:string,
age:number,
marks:number,
grade?:string
}

const user:UserInterface={
    name:"Alpha",
    age:33,
    marks:88
}
console.log(user.marks +" "+ user.name)



interface User2Interfaace{
    name:string,
    age:number,
    checkability(alph:string,beta:string):string
}


const user2:User2Interfaace={
    name:"gemma",
    age:33,
    checkability(alph:string,beta:string){
        return "hello "+alph+" "+beta
    }
}

console.log(user2.checkability("work well "," well done"));
