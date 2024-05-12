import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertuser(email :string ,password:string,firstname:string,lastname:string){
    //im asked to put a user inthe user table >>
    //select is where i can choose what fields i want to get in the result object >>>
    const res =await prisma.user.create({
         data: { 
            email,
           password,
           firstname,
           lastname
        },
        select:{
            id:true,
            email:true
        }
    })
    console.log(res);
}
insertuser("bishalmaityagain90@gmail.com","pass2","chottu","Maity");
