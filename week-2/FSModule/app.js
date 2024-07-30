const fs=require("fs");

fs.writeFile('data.txt','created nodejs',(err)=>{
    if(err){
        throw err;
    }
    console.log("created nodejs successfully");
})

try{
    const data=fs.readFileSync('data.txt','utf-8');
    console.log(data);
} catch(e){
    console.log(e);
}