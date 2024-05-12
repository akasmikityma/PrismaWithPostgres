import { PrismaClient, todo } from "@prisma/client";
import { error } from "console";
const prisma =new PrismaClient();
interface NewTodoInput{
    title:string;
    description:string;
    done:boolean;
    userId:number
}
const InsertnewTodo=async({title,description,done,userId}:NewTodoInput)=>{
    const res=await prisma.todo.create({
        data:{
                title,description,done,userId
        },
        select:{
            id:true,
            title:true,
            description:true
        }
    });
    return  res;
}
InsertnewTodo({
    title:"get allthe prisma done",
    description:"prisma makes the idea of typescript more clearer",
    done:false,
    userId:1
}).then((createdTodo)=>{
    console.log("created Todo",createdTodo);
}).catch((error)=>{
    console.error("Error creating todo:",error);
});
