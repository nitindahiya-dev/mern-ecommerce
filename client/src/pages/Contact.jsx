import { Alert, Spinner } from "flowbite-react";
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { messageStart, messageFailure, messageSuccess } from "../redux/contact/contact";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';


export default function Contact() {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: ''
  });

  const [open, setOpen] = useState(false);
   
  const onCloseModal = () => setOpen(false);

  const { loading, error: errorMessage } = useSelector(state => state.contact)
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username & !formData.email && !formData.message) return dispatch(messageFailure("Please fill all the fields.👨‍💻"))
    try {
      dispatch(messageStart());
      const res = await fetch('/api/contact-us', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const data = await res.json();
      if (data.success === false) dispatch(messageFailure(data.message));
      if (res.ok) {
        dispatch(messageSuccess(data))
        setFormData({
          username: '',
          email: '',
          message: ''
        });
        setOpen(true);
      }
    }
    catch (error) {
      dispatch(messageFailure(error.message))
    }
  }



  return (
    <div className="p-5">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-[30px] uppercase font-bold">Contact Us</h2>
        <div className="flex flex-col gap-5 md:gap-40 md:mt-5  md:flex-row py-3 ">
          <div className="flex flex-col gap-5">
            <p className="text-xl font-semibold">Store in London</p>
            <span className="text-md">1418 River Drive, Suite 35 Cottonhall, CA 9622 United Kingdom</span>
            <span className="text-md">
              sale@uomo.com
              <br />
              +44 20 7123 4567
            </span>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-xl font-semibold">Store in London</p>
            <span className="text-md">1418 River Drive, Suite 35 Cottonhall, CA 9622 United Kingdom</span>
            <span className="text-md">
              sale@uomo.com
              <br />
              +44 20 7123 4567
            </span>
          </div>
        </div>

        <div className="card h-fit max-w-[1000px] py-5 md:mt-5" >
          <h2 className="mb-4 text-2xl font-bold dark:text-white">Ready to Get Started?</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <div className="mx-0 mb-1 sm:mb-4">
                <div className="mx-0 mb-1 sm:mb-4">
                  <input type="text" id="username" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="name" onChange={handleChange} value={formData.username} />
                </div>
                <div className="mx-0 mb-1 sm:mb-4">
                  <input type="email" id="email" autoComplete="email" placeholder="Your email address" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="email" onChange={handleChange} value={formData.email} />
                </div>
              </div>
              <div className="mx-0 mb-1 sm:mb-4">
                <textarea id="message" onChange={handleChange} cols="30" rows="5" placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" value={formData.message}></textarea>
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0">
                {
                  loading ? (
                    <>
                      <Spinner size={"sm"} />
                      <span className="pl-3">loading...</span>
                    </>
                  ) : (
                    'Send Message'
                  )
                }
              </button>
              {
                errorMessage &&
                <Alert className="mt-4  font-semibold" color={"failure"}>
                  {errorMessage}
                </Alert>
              }
            </div>
          </form>
        </div>
      </div>
      <Modal open={open} onClose={onCloseModal} center>        
        <h2 className="text-green-800 font-semibold">Your form have been submitted</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
          hendrerit risus, sed porttitor quam.
        </p>
      </Modal>

    </div>
  )
}
