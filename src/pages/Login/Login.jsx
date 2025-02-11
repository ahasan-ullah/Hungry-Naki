import Lottie from 'lottie-react';
import loginAnimation from '../../assets/lottie/login.json'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../layout/Auth/AuthContext';
import Swal from 'sweetalert2';
const Login = () => {
  const {setUser,loginUser,googleLogin,setLoading}=useContext(AuthContext);

  //login wiht email and password
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.pass.value;
    loginUser(email, pass)
    .then((result)=>{
      setUser(result.user);
      Swal.fire({
        title: "Login successfull",
        icon: "success"
      })
    })
    .catch(()=>{
      setLoading(false);
      Swal.fire({
        title: "Login failed",
        icon: "error"
      })
    })
  };

  //login in wiht google
  const handleGoogleLogin=()=>{
    googleLogin()
    .then((result)=>{
      setUser(result.user);
      Swal.fire({
        title: "Login successfull",
        icon: "success"
      })
    })
    .catch((err)=>{
      Swal.fire({
        title: "Login failed",
        icon: "error"
      })
    })
  }
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <Lottie animationData={loginAnimation}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0">
          <h1 className="text-center text-5xl font-bold mt-5">Login now!</h1>
          <form onSubmit={handleLogin} className="card-body">
            {/* email field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            {/* pass field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="pass"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className='card-body -mt-10'>
            <button onClick={handleGoogleLogin} className='btn btn-primary'>Login with Google</button>
            <p className='text-gray-500 text-sm'>Don't have any account? <Link to={'/register'} className='text-black'>Register</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;