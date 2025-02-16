import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="p-6 text-center flex flex-col">
      <h2 className="text-3xl font-bold">Sign In</h2>
      <p className="text-gray-600 mt-2 pb-16">로그인하세염</p>
      <div className="flex justify-between items-center pb-16 h-[100px] w-[360px]">
        <span className="flex flex-col gap-4 items-start h-[100px]">
          <label className="h-[42px] flex items-center" htmlFor="signin-id">
            ID
          </label>
          <label className="h-[42px] flex items-center" htmlFor="signin-pwd">
            PASSWORD
          </label>
        </span>
        <span className="flex flex-col gap-4 items-center h-[100px]">
          <input
            className="border p-2 w-[250px] rounded-md"
            type="text"
            id="signin-id"
            name="signin-id"
          />
          <input
            className="border p-2 w-[250px] rounded-md"
            type="password"
            id="signin-pwd"
            name="signin-pwd"
          />
        </span>
      </div>
      <button className="bg-blue-400 text-white py-2 px-4 rounded-md hover:bg-blue-700 w-[360px] mb-2">
        Sign In
      </button>
      <Link to="/signup">
        <button className="bg-gray-400 text-white py-2 px-4 rounded-md hover:bg-gray-700 w-[360px]">
          Sign Up
        </button>
      </Link>
    </div>
  );
};

export default SignIn;
