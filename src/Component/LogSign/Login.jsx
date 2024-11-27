import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Image1 from "/assets/sakura-unscreen.gif";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { userLogin, googleSignIn, setUser } = useContext(AuthContext);
  const [email, setEmail] = useState(""); 
  const [error, setError] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state?.from || "/");
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
        alert(err.code);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((user) => {
        navigate(location?.state?.from || "/");
      })
      .catch((error) => {
        console.error("Google Sign-In Error:", error);
        setError({ ...error, google: error.code });
      });
  };

  return (
    <div className="flex items-center justify-center my-16 relative">
      <div className="card bg-base-200 w-full max-w-sm shrink-0">
        <form onSubmit={handleSubmit} className="card-body">
          <img
            className="w-[15rem] absolute -top-28 -right-28"
            src={Image1}
            alt=""
          />
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <Link
                to="/forgetPassword"
                state={{ email }}
                className="label-text-alt link text-sm text-red-600"
              >
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control">
            {error.login && (
              <label className="label text-sm text-red-600">
                Enter the valid password and try again.
              </label>
            )}
            <button className="btn text-xl bg-gradient-to-r from-sky-300 via-sky-400 to-blue-500 text-white">
              Login
            </button>
          </div>
          <p>
            Don't have an account? Why not
            <Link to="/signup" className="link text-sky-600 pl-2">
              Sign up
            </Link>
          </p>
          <div>
            <p className="text-center my-2">Or</p>
            <button
              onClick={handleGoogleSignIn}
              className="flex items-center justify-center rounded-2xl border border-black py-1 w-full"
            >
              <FcGoogle className="mr-2" /> Sign in with Google
            </button>
          </div>
          <img
            className="w-[15rem] absolute top-[20rem] right-[16rem]"
            src={Image1}
            alt=""
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
