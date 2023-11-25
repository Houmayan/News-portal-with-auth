import { useContext } from 'react';
import MyNavbar from '../Shared/Navbar/MyNavbar';
import { Link } from 'react-router-dom';
import { AuthContextProvider } from '../../Provider/AuthProvider';

const Register = () => {
  const {createUser} = useContext(AuthContextProvider);

  console.log(createUser);

  const handleRegister =(e)=>{
    e.preventDefault();
    // console.log('register form working');
    const form = new FormData(e.currentTarget)
    console.log(form.get('name'));
    const displayName = form.get('name');
    console.log(displayName);
    const email = form.get('email');
    const password = form.get('password');
    createUser(email,password)
    .then(result=>{
      console.log(result.user)
    }).catch(error=>{
      console.error(error.message)
    })
  }
    return (
        <div>
        <MyNavbar></MyNavbar>
        <div className="card shrink-0 w-full mx-auto max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                // required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo"
                className="input input-bordered"
                // required
              />
            </div>
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
              
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="text-center mb-5">Already have an account? <Link to={'/login'} className="ml-2 text-blue-700">Login</Link></p>
        </div>
      </div>
    );
};

export default Register;