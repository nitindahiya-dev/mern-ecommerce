import { Alert, Spinner } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { signInSuccess, signInFailure, signInStart } from "../redux/user/userSlice"
import OAuth from "../components/OAuth";

export default function SignIn() {


  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector(state => state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() })
  };

  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.email && !formData.password) return dispatch(signInFailure("Please fill all the fields.👨‍💻"));
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const data = await res.json();
      if (data.success === false) dispatch(signInFailure(data.message));
      if (res.ok) {
        dispatch(signInSuccess(data))
        navigate('/')
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  const currentYear = new Date().getFullYear();
  return (
    <div className="min-h-screen flex max-w-[1550px] mx-auto">
      <div className="flex flex-row w-full">
        <div className='hidden lg:flex flex-col justify-between bg-amber-300 lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-xl'>
          <div className="flex items-center justify-start space-x-3">
            <span className="bg-black rounded-full w-8 h-8"></span>
            <Link to={"/"} className="font-medium text-xl">MernEcom</Link>
          </div>
          <div className='space-y-5'>
            <h1 className="lg:text-3xl xl:text-5xl xl:leading-snug font-extrabold">Enter your account and discover new
              experiences</h1>
            <p className="text-lg">You do not have an account?</p>
            <Link to={"/sign-up"}
              className="inline-block flex-none px-4 py-3 border-2 rounded-lg font-medium border-black bg-black text-white">Create
              account here</Link>
          </div>
          <p className="font-medium">© {currentYear} MernEcom</p>
        </div>


        <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
          <div className="flex lg:hidden justify-between items-center w-full py-4">
            <div className="flex items-center justify-start space-x-3">
              <span className="bg-black rounded-full w-6 h-6"></span>
              <Link to={"/"} className="font-medium text-lg">MernEcom</Link>
            </div>
            <div className="flex items-center space-x-2">
              <span>Not a member? </span>
              <Link to={"/sign-up"} className="underline font-medium text-[#070eff]"> Sign up now </Link>
            </div>
          </div>

          <div className="flex flex-1 flex-col  justify-center space-y-5 max-w-md">
            <div className="flex flex-col space-y-2 text-center">
              <h2 className="text-3xl md:text-4xl font-bold">Sign in to account</h2>
              <p className="text-md md:text-xl">log in to place the order!</p>
            </div>
            <div className="flex flex-col max-w-md sm:w-[500px]  space-y-5">
              <form onSubmit={handleSubmit}>
                <input type="email" id="email" placeholder="Email" onChange={handleChange}
                  className="flex px-3 w-full mb-4 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal" />
                <input type="password" id="password" placeholder="Your Password" onChange={handleChange}
                  className="flex px-3 w-full mb-4 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal" />
                <button type="submit" disabled={loading} className="flex mb-4 items-center w-full justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
                  {
                    loading ? (
                      <>
                        <Spinner size={"sm"} />
                        <span className="pl-3">loading...</span>
                      </>
                    ) : (
                      'Submit now'
                    )
                  }
                </button>
                {
                  errorMessage &&
                  <Alert className="mt-4  font-semibold" color={"failure"}>
                    {errorMessage}
                  </Alert>
                }
              </form>
                <div className="flex justify-center items-center">
                  <span className="w-full border border-black"></span>
                  <span className="px-4">Or</span>
                  <span className="w-full border border-black"></span>
                </div>
                <OAuth />
            </div>
          </div>``
        </div>
      </div>

    </div>


  )
}
