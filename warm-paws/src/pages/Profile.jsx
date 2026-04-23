import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
        {/* Top Decorative Banner */}
        <div className="h-32 bg-slate-900 w-full"></div>
        
        {/* Profile Content */}
        <div className="relative px-6 pb-10">
          <div className="flex justify-center">
            <div className="relative -mt-16">
              <img
                src={user?.photoURL || "https://via.placeholder.com/150"}
                alt="User Profile"
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover bg-slate-200"
              />
              <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 border-2 border-white rounded-full" title="Status: Online"></div>
            </div>
          </div>

          <div className="text-center mt-6 space-y-2">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              {user?.displayName || "WarmPaws Member"}
            </h2>
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
              Verified Professional
            </p>
            <div className="pt-4 border-t border-slate-100 mt-4">
              <p className="text-slate-500 font-light text-sm italic">Contact Information</p>
              <p className="text-slate-800 font-medium">{user?.email}</p>
            </div>
          </div>

          <div className="mt-8">
            <button className="btn btn-outline btn-sm w-full border-slate-300 text-slate-600 hover:bg-slate-900 hover:text-white rounded-lg">
              Edit Professional Bio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;