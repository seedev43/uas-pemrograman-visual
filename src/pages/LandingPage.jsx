import { Nav } from '../components/Navbar'
import background from '../assets/background.png'
import { Footer } from '../components/Footer'
import { HiArrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { Button } from 'flowbite-react'

export default function LandingPage() {
  document.title = "Water Potability Measurement Web"

  return (
    <>
      <Nav />
      <section className="py-8 h-96 flex items-center justify-center">
        <div className="flex flex-col items-center h-full gap-4">
          <h1 className="font-bold text-center text-4xl mt-auto">Water Potability <br />Measurement Web</h1>
          <p className="text-xl text-center">
            Ukur kualitas air minum anda, agar tidak keracunan Bakteri E. Colay
          </p>
          <Button className="bg-cyan-500">
            SIGN UP
            <HiArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <section className="relative">
        <img
          src={background}
          className="w-full h-full object-cover object-top"
          alt="Water Testing" />
        <div className="absolute inset-0 bg-gradient-to-b from-white flex items-center justify-center">
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-cyan-500 py-16 !h-[80vh]" id="about">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros,
            pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.
            Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex,
            in pretium orci vestibulum eget.
          </p>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16" id="contact">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <form className="max-w-lg mx-auto space-y-4">
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullname">
                  Full Name
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  type="text"
                  id="fullname"
                  placeholder="Your full name" />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  type="email"
                  id="email"
                  placeholder="Your email address" />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                id="message"
                rows="4"
                placeholder="Your message">
              </textarea>
            </div>
            <div className="text-center">
              <button
                className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 focus:outline-none focus:ring"
                type="submit">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </>
  )
}
