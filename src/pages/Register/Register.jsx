import Lottie from 'lottie-react';
import registerAnimation from '../../assets/lottie/register.json'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import AuthContext from '../../layout/Auth/AuthContext';
const Register = () => {
  const {createUser,setUser,updateUser}=useContext(AuthContext);
  const handleRegister=(e)=>{
    e.preventDefault();
    const form=e.target;
    const name=form.name.value;
    const email=form.email.value;
    const photo=form.photo.value;
    const pass=form.pass.value;

    // pass validation
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordPattern.test(pass)) {
      Swal.fire({
        title: "Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long.",
        text: "You clicked the button!",
        icon: "error"
      })
      return;
    }

    //register method
    createUser(email,pass)
    .then(result=>{
      setUser(result.user);
      updateUser({
        displayName: name,
        photoURL: photo
      })
      .then(()=>{
        Swal.fire({
          title: "Registration Successfull",
          icon: "success"
        })
      })
      .catch((err)=>{
        Swal.fire({
          title: "Registration Failed",
          icon: "error"
        })
      })
    })
    .catch(err=>{
      Swal.fire({
        title: "Registration Failed",
        text: "You clicked the button!",
        icon: "error"
      })
    })
  }
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <Lottie animationData={registerAnimation}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0">
        <h1 className="text-center text-5xl font-bold mt-5">Register now!</h1>
          <form onSubmit={handleRegister} className="card-body">
            {/* name field */}
          <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
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
            {/* photo field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="photo"
                name="photo"
                placeholder="Photo URL"
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
              <button className="btn btn-primary">Register</button>
            </div>
          </form><div className='card-body -mt-10'>
            <p className='text-gray-500 text-sm'>Already have any account? <Link to={'/login'} className='text-black'>Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
