import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Image1 from "/assets/sakura-unscreen.gif"

const Signup = () => {

  const {createNewUser,setUser,updateUserProfile} = useContext(AuthContext);

  const navigate = useNavigate();

  const [error, setError] = useState({});

  const handleSubmit = (e) =>{
    e.preventDefault();
    
    const from = new FormData(e.target);
    const name = from.get("name");
    if(name.length <5){
      setError({...error , name:" Name must be more then 5 character long"});
      return;
    }
    const email = from.get("email");
    if(email.length <6){
      setError({...error , email:" Please enter a valid email address"});
      return;
    }
    const photo = from.get("photo");
    const password = from.get("password");
    if(password.length <6){
      setError({...error , password:" Password must be more then 6 character long"});
      return;
    }
    console.log(name,email,photo,password);

    createNewUser(email,password).then((result) =>{
      const user = result.user;
      setUser(user);
      updateUserProfile({displayName:name , photoURL:photo })
      .then(()=>{
        navigate("/");
      })
      .catch((err)=>{
        console.log(err);
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log (errorCode,errorMessage);

      // ..
    });
  };

    return (
        <div className="flex items-center justify-center my-16 relative ">
            <div class="card bg-base-200 w-full max-w-sm shrink-0 ">
      <form onSubmit={handleSubmit} class="card-body ">
      <img className="w-[15rem] absolute -top-28 -right-28" src={Image1} alt="" />
      <div class="form-control">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input name="name" type="text" placeholder="Name" class="input input-bordered" required />
        </div>
        {
          error.name &&(
            <label class="label text-red-600 text-sm">
            {error.name}
          </label>
          )
        }
        <div class="form-control">
          <label class="label">
            <span class="label-text">Photo</span>
          </label>
          <input name="photo" type="text" placeholder="photo-url" class="input input-bordered" required />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text"> Email</span>
          </label>
          <input name="email" type="email" placeholder="email" class="input input-bordered" required />
        </div>
        {
          error.email &&(
            <label class="label text-red-600 text-sm">
            {error.email}
          </label>
          )
        }
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" class="input input-bordered" required />
        </div>
        {
          error.password &&(
            <label class="label text-red-600 text-sm">
            {error.password}
          </label>
          )
        }
        <div class="form-control mt-6">
          <button class="btn bg-sky-400 text-xl hover:bg-blue-500 text-white ">Sign up</button>
        </div> 
        <img className="w-[15rem] absolute top-96 right-64" src={Image1} alt="" />
      </form>
     
        </div>
        </div>
    );
};

export default Signup;