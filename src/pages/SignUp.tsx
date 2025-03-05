import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="p-6 flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold">Sign Up</h2>
      <p className="text-gray-600 mt-2 pb-16">회원가입하세염</p>
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
      <button className="bg-blue-600 text-white py-2 px-4 border-2 border-blue-600 rounded-md w-[360px] mb-2">
        Sign Up
      </button>
      <p className="text-gray-300 text-m">Already have an account?</p>
      <Link to="/signin">
        <button className="bg-white text-blue-600 border-2 border-blue-600 py-2 px-4 rounded-md w-[360px]">
          Sign In
        </button>
      </Link>
    </div>
  );
};

export default SignUp;
