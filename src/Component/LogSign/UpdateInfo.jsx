import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const UpdateInfo = () => {
  const { updateUserProfile, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;

    if (!name || !photo) {
      alert("Please fill in all fields");
      return;
    }


    updateUserProfile({ displayName: name, photoURL: photo })
      .then(() => {

        setUser((prevUser) => ({
          ...prevUser,
          displayName: name,
          photoURL: photo,
        }));

        navigate("/MyProfile");
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
        alert("Failed to update profile. Please try again.");
      });
  };

  return (
    <div className="flex items-center justify-center my-16 relative">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleUpdate} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Update Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Update Photo</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn text-xl bg-gradient-to-r from-sky-300 via-sky-400 to-blue-500 text-white">
              Update Information
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateInfo;
