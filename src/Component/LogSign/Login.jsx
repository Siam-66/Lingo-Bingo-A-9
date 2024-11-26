import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Image1 from "/assets/sakura-unscreen.gif"


const Login = () => {

  const {userLogin,setUser} = useContext(AuthContext)

  const [error, setError] = useState({});

  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({email,password});
    userLogin(email,password).then((result)=>{
      const user=result.user;
      setUser(user);
      navigate(location?.state? location.state : "/");
    })
    .catch((err) => {
    
      setError({...error ,login:err.code});
      alert(err.code);
    });
  };


    return (
        <div className="flex items-center justify-center my-16 relative ">
            <div class="card bg-base-200 w-full max-w-sm shrink-0 ">
      <form onSubmit={handleSubmit} class="card-body ">
      <img className="w-[15rem] absolute -top-28 -right-28" src={Image1} alt="" />
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" class="input input-bordered" required />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" class="input input-bordered" required />
          <label class="label">
            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>

        <div class="form-control ">
        {
          error.login && (
          <label className="label  text-sm text-red-600">
          Enter the valid password and try again.
          </label>
          )
        }
          <button class="btn bg-sky-400 text-xl hover:bg-blue-500 text-white">Login</button>
        </div> 
        <p>
            Don't have an account? Why not 
        
        <Link to="/signup" className="link text-sky-600 pl-2">Sign up</Link>

        </p>
        <img className="w-[15rem] absolute top-60 right-64" src={Image1} alt="" />
      </form>
     
        </div>
        </div>
    );
};

export default Login;