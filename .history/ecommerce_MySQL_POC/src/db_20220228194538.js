const mysql=require('mysql')

const db=async(query,data={})=>
{
    return new Promise((resolve,reject)=>{    
        try
        {        
            const connection=mysql.createConnection({
                host:process.env.DATABASE_HOST,
                user:process.env.DATABASE_USER,
                password:
                database:process.env.DATABASE_NAME
            });
            
            connection.query(query,data,(err,res)=>{
                if(err){
                    console.log(err);
                    reject("Query Error!!!");
                }
                connection.end()
                resolve(res)
                });
        }
        catch(error)
        {
            console.log(error);

            reject("Error!!!")
        }   
    })       
} 

module.exports=db;