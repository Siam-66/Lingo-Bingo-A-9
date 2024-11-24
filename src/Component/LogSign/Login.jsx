import { Link } from "react-router-dom";



const Login = () => {
    return (
        <div className="flex items-center justify-center my-16 ">
            <div class="card bg-base-200 w-full max-w-sm shrink-0 ">
      <form class="card-body ">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" class="input input-bordered" required />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" class="input input-bordered" required />
          <label class="label">
            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div class="form-control mt-6">
          <button class="btn bg-sky-400 text-xl hover:bg-blue-500 text-white">Login</button>
        </div> 
        <p>
            Don't have an account? Why not 
        
        <Link to="/signup" className="link pl-2">Sign up</Link>

        </p>
        
        
        
      </form>
     
        </div>
        </div>
    );
};

export default Login;