import { sendPasswordResetEmail } from "firebase/auth";
import { Link } from "react-router-dom";
import auth from "../../../public/firebase.config";


const ForgetPass = () => {
     const handleSubmit=e=>{
          e.preventDefault();
          const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
          const email = e.target.email.value;
         if( emailRegex.test(email)){
          sendPasswordResetEmail(auth,email)
          .then((result)=>console.log(result))
          .catch(()=>alert('Invalid email'))
          // console.log(email);
         }else{
          alert('Please provide valid email')
         }
     }
     return (
          <div className="mx-auto">
               <div className=" w-11/12 md:w-[500px] mx-auto">
                    <div>
                         <form onSubmit={handleSubmit}>
                              <input className="border mb-2 p-2 w-full" type="email" name="email" placeholder="Email..." required />

                             
                              <input className="border p-2 w-full bg-green-400" type="submit" value="Submit" />
                         </form>
                         <p>Back to  <Link
                          className="text-blue-800" to={'/login'}>login</Link></p>
                    </div>
                    
               </div>

          </div>
     );
};

export default ForgetPass;