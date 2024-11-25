

const Signup = () => {

  const handleSubmit = (e) =>{
    e.preventDefault();
    
    const from = new FormData(e.target);
    console.log(from);
  };

    return (
        <div className="flex items-center justify-center my-16 ">
            <div class="card bg-base-200 w-full max-w-sm shrink-0 ">
      <form onSubmit={handleSubmit} class="card-body ">
      <div class="form-control">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input name="name" type="text" placeholder="Name" class="input input-bordered" required />
        </div>
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
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" class="input input-bordered" required />

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