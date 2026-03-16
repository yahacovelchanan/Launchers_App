

const BASE_URL="http://localhost:3005";

export async function getAllLaunchers (){
    await fetch(`${BASE_URL}/api/launchers`,{
        method:'GET',
        headers:{'Content-type':'application/json'}
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        
    })
}