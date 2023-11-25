import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/MyNavbar";
import { useContext } from "react";
import { AuthContextProvider } from "../../Provider/AuthProvider";

const Login = () => {
  const { logIn, loading } = useContext(AuthContextProvider);
  
  const navigate = useNavigate();
  const location = useLocation();
  console.log("location in Login:", location);
  if (loading) {
    return (
      <span className="loading loading-spinner text-blue-600 loading-lg absolute  right-[754px] top-[300px]"></span>
    );
  }
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    console.log("login form");
    const email = form.get("email");
    const password = form.get("password");
    logIn(email, password)
      .then((user) => {
        console.log(user.user);

        navigate(location?.state ? location.state : '/')

      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {/* <span className="loading loading-spinner text-error"></span> */}
      <Navbar></Navbar>

      <div className="card shrink-0 w-full mx-auto max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              // required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              // required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center mb-5">
          Don't have an account?{" "}
          <Link
            to={"/register"}
            title="click here"
            className="ml-2 text-blue-700"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
