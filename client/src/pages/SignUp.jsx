import { Alert, Spinner } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

export default function SignUp() {

  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() })
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.username && !formData.email && !formData.password) return setErrorMessage("Please fill all the fields.👨‍💻")
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const data = await res.json();
      if (data.success === false) return setErrorMessage(data.message);
      setLoading(false)
      if(res.ok) return navigate('/sign-in')
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
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
            <h1 className="lg:text-3xl xl:text-5xl xl:leading-snug font-extrabold">Create your account</h1>
            <p className="text-lg">Already have an account? </p>
            <Link to={"/sign-in"}
              className="inline-block flex-none px-4 py-3 border-2 rounded-lg font-medium border-black bg-black text-white">Log In</Link>
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
              <span>Already have an account? </span>
              <Link to={"/sign-up"} className="underline font-medium text-[#070eff]">Sign in now</Link>
            </div>
          </div>

          <div className="flex flex-1 flex-col  justify-center space-y-5 max-w-md">
            <div className="flex flex-col space-y-2 text-center">
              <h2 className="text-3xl md:text-4xl font-bold">Sign up Your account</h2>
              <p className="text-md md:text-xl">By clicking continue, you agree to our <Link className="underline" to={"/term-and-conditions"}>Terms of Service</Link> and <Link className="underline" to={"/privacy-policy"}>Privacy Policy</Link> .</p>
            </div>
            <div className="flex flex-col max-w-md space-y-5">
              <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username"
                  className="flex w-full mb-4 px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal" id="username" onChange={handleChange} />
                <input type="email" placeholder="Email"
                  className="flex px-3 w-full mb-4 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal" id="email" onChange={handleChange} />
                <input type="password" placeholder="Your Password"
                  className="flex px-3 py-2 w-full mb-4 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal" id="password" onChange={handleChange} />

                {
                  errorMessage &&
                  <Alert className="mt-4 mb-4 font-semibold" color={"failure"}>
                    {errorMessage}
                  </Alert>
                }

                <button type="submit" disabled={loading} className="flex items-center w-full justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
                  {
                    loading ? (
                      <>
                        <Spinner size={"sm"} />
                        <span className="pl-3">loading...</span>
                      </>
                    ) : (
                      'Create Account'
                    )
                  }
                </button>
              </form>

                <div className="flex justify-center items-center mb-2 mt-2">
                  <span className="w-full border border-black"></span>
                  <span className="px-4">Or</span>
                  <span className="w-full border border-black"></span>
                </div>
                <OAuth />
            </div>
          </div>




        </div>
      </div>

    </div>


  )
}
