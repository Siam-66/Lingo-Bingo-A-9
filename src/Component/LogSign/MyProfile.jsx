
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";

const MyProfile = () => {

    const {user}= useContext(AuthContext);
    return (
        <div className="container mx-auto px-4 py-8">

            <div className="max-w-lg mx-auto border-2 border-sky-300 bg-base-100 rounded-lg shadow-xl p-6">
            <h1 className="mb-5 text-center text-3xl font-bold bg-gradient-to-r from-sky-400 via-sky-900 to-blue-800 bg-clip-text text-transparent">
                Welcome back
                <br />
                <span className="text-5xl">
                {user && user?.displayName}
                </span>
                
                
                
                
            </h1>
                <div className="flex justify-center mb-4">
                    <img src={user && user?.photoURL} alt={user && user?.displayName} className="w-32 h-32 rounded-full" />
                </div>
                <div className="mb-4">
                    <h2 className="text-2xl font-semibold text-gray-700">Profile Information</h2>
                    <div className="mt-2">
                        <p className="text-lg text-gray-700"><strong>Name:</strong> {user && user?.displayName}</p>
                        <p className="text-lg text-gray-700"><strong>Email:</strong> {user && user?.email}</p>
                    </div>
                </div>
                <div className="text-center">
                    <Link to="/updateProfile">
                        <button className="btn bg-gradient-to-r text-lg from-sky-300 via-sky-400 to-blue-500 text-white rounded-lg px-8  shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                            Update Profile
                        </button>
                    </Link>
                </div>
            </div>
            <div className="flex justify-center mt-10">
                    <Link to="/">
                        <button className="btn text-lg bg-gradient-to-r from-sky-300 via-sky-400 to-blue-500 text-white rounded-lg px-8  shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                            Go Home
                        </button>
                    </Link>
            </div>

        </div>
    );
};

export default MyProfile;