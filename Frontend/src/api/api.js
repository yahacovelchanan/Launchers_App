const BASE_URL="http://localhost:3005";

export async function getAllLaunchers (token){
    await fetch(`${BASE_URL}/api/launchers`,{
        method:'GET',
        headers:{'authorization':`Bearer${token}`,
            'Content-type':'application/json'}
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        
    })
}


export async function loginUser (username,password){
    await fetch(`${BASE_URL}/api/launchers`,{
        method:'POST',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({username:username,password:password})
    }
)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        
    })
}