const users=[];

const addUser=({id,name,user})=>{
//ravi mishra   ravimishra
    name=name.trim().toLowerCase();
    room=room.trin.toLowerCase();

    const existingUser=users.find((user)=>user.room==room && user.name===name)
    if(existingUser){
        return{error:'Username is Taken'};
    }
        const user ={id,name,room};

        users.push(user);
        return {user};
    
}
const removeUser=(id)=>{
 const index=users.findIndex((user)=>user.id=id);
 if(index!=-1){
     return users.splice(index,1)[0];
 }
}
const getUser=(ud)=>{
users.find((user)=>user.id===id);
}
const getUserInRoom=(room)=>{
users.filter((user)=>user.room===room);
}
module.exports={addUser,removeUser,getUser,getUserInRoom};