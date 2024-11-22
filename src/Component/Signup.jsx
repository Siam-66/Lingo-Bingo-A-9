

const Signup = () => {
    return (
        <div className="flex items-center justify-center my-16 ">
            <div class="card bg-base-200 w-full max-w-sm shrink-0 ">
      <form class="card-body ">
        <div class="form-control">
          <label class="label">
            <span class="label-text">New Email</span>
          </label>
          <input type="email" placeholder="email" class="input input-bordered" required />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">New Password</span>
          </label>
          <input type="password" placeholder="password" class="input input-bordered" required />

        </div>
        <div class="form-control mt-6">
          <button class="btn bg-sky-400 text-xl hover:bg-blue-500 text-white ">Sign up</button>
        </div> 

      </form>
     
        </div>
        </div>
    );
};

export default Signup;