import React from 'react'

const Login = () =>{

const [Adr, setAdr] = React.useState('');
const [MPass, setMPass] = React.useState('');

const handleLogin = async () =>
{
console.warn("email,password", Adr, MPass)
let result = await fetch ('http://localhost:4000/utilisateur/login', {

method: 'post',
body:JSON.stringify({Adr,MPass}),
headers: {
    'Content-Type': 'application/json'
}
});
result = await result.json();
console.warn(result)

if(result.name){
localStorage.set("user",JSON.stringify(result));
}else{
    alert("please entre connect details")
}



}



    
    return(
        <div className="container">
           <div className="app-wrapper">
               <div>
                   <h2 className="title">Create account</h2>
               </div>
               <form className="form-wrapper">
                   
                   
                   
                   <div className="Adr">
                       <label className="label"><b>username</b></label>
                       <input className="input" type="text" onChange={(e) =>setAdr(e.target.value)} value={Adr} />
                   </div>
                   <div className="password">
                       <label className="label"><b>password</b></label>
                      
                       <input className="input" type="password"  name="MPass" onChange={(e) =>setMPass(e.target.value)} value={MPass} />
                   </div>
                   <div>
                       <button className="submit"onClick={handleLogin} >Sign up</button>
                   </div>

               </form>
               
               
               
          </div>
              

        </div>
    );
};
export default Login;