import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Image1 from "/assets/sakura-unscreen.gif";

const Signup = () => {
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState({}); 
  const handleSubmit = (e) => {
    e.preventDefault();

    const from = new FormData(e.target);
    const name = from.get("name");
    const email = from.get("email");
    const photo = from.get("photo");
    const password = from.get("password");

    let newError = {}; 

    if (name.length < 5) {
      newError.name = "Name must be more than 5 characters long.";
    }


    if (!/\S+@\S+\.\S+/.test(email)) {
      newError.email = "Please enter a valid email address.";
    }


    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasMinLength = password.length >= 6;

    if (!hasUppercase) {
      newError.password = "Password must include at least one uppercase letter.";
    } else if (!hasLowercase) {
      newError.password = "Password must include at least one lowercase letter.";
    } else if (!hasMinLength) {
      newError.password = "Password must be more than 6 characters long.";
    }


    if (Object.keys(newError).length > 0) {
      setError(newError);
      return;
    }


    setError({});

    console.log(name, email, photo, password);


    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        return updateUserProfile({ displayName: name, photoURL: photo });
      })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.error("Error creating user:", err);
      });
  };

  return (
    <div className="flex items-center justify-center my-16 relative">
      <div className="card bg-base-200 w-full max-w-sm shrink-0">
        <form onSubmit={handleSubmit} className="card-body">
          <img className="w-[15rem] absolute -top-28 -right-28" src={Image1} alt="" />
          

          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input name="name" type="text" placeholder="Name" className="input input-bordered" />
          </div>
          {error.name && <label className="label text-red-600 text-sm">{error.name}</label>}


          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input name="photo" type="text" placeholder="Photo URL" className="input input-bordered" />
          </div>


          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input name="email" type="email" placeholder="Email" className="input input-bordered" />
          </div>
          {error.email && <label className="label text-red-600 text-sm">{error.email}</label>}


          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input name="password" type="password" placeholder="Password" className="input input-bordered" />
          </div>
          {error.password && <label className="label text-red-600 text-sm">{error.password}</label>}


          <div className="form-control mt-6">
            <button className="btn text-xl bg-gradient-to-r from-sky-300 via-sky-400 to-blue-500 text-white">Sign Up</button>
          </div>

          <img className="w-[15rem] absolute top-96 right-64" src={Image1} alt="" />
        </form>
      </div>
    </div>
  );
};

export default Signup;