import { useState } from "react";

const SignOut = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data= await res.json();
    console.log(data);
  };
  console.log(formData);
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="form-container w-[30rem] h-[550px] bg-white shadow-lg rounded-lg p-8">
        <p className="title text-center text-2xl font-bold mb-4">Sign Up</p>
        <p className="sub-title text-center text-xs text-gray-500 mb-6">We will help you find your dream home</p>

        <form className="form flex flex-col gap-5 mb-5" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input border border-gray-300 rounded-[18px] p-4 focus:outline-none"
            placeholder="Name"
            onChange={handleChange}
          />
          <input
            type="email"
            className="input border border-gray-300 rounded-[18px] p-4 focus:outline-none"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            type="password"
            className="input border border-gray-300 rounded-[18px] p-4 focus:outline-none"
            placeholder="Password"
            onChange={handleChange}
          />
          <button className="form-btn bg-indigo-500 text-white rounded-[18px] py-3 shadow-md hover:bg-indigo-600 focus:outline-none">
            Create account
          </button>
        </form>

        <div className="buttons-container flex flex-col gap-4 mt-6">
          <button className="google-login-button flex items-center justify-center gap-3 p-3 border border-gray-300 rounded-[18px] shadow-md">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              version="1.1"
              x="0px"
              y="0px"
              className="google-icon w-6 h-6"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
                c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
                c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              />
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
                C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              />
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
                c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              />
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
                c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              />
            </svg>
            <span>Sign up with Google</span>
          </button>
        </div>
        <p className="sign-up-label text-center text-xs text-gray-500 p-6">
          Already have an account?
          <span className="sign-up-link text-indigo-500 font-bold underline ml-1 cursor-pointer">
            Log in
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignOut;
// learn the concept of server proxy