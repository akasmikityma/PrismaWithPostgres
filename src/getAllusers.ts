import { PrismaClient } from "@prisma/client";
const prisma =new PrismaClient();


const getusersData=async()=>{
    const allUsers=await prisma.user.findMany();
    const allTodos=await prisma.todo.findMany();
    console.log(allUsers,allTodos);
}

getusersData();