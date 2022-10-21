type ID=number

type Usertype={
id:ID,
name:string,
age:number
}
//can use custome type in interfaces
const user:Usertype={
    id:33,
    name:"alpha",
    age:44
}

console.log(user.age+" "+user.id)
