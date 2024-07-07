import { Header } from '../components/Header'
import { Nav } from '../components/Navbar'
import background from '../assets/background.png'
import { Footer } from '../components/Footer'
import { HiArrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  document.title = "Water Potability Measurement Web"

  return (
    <>
      {/* <Header/> */}
      <Nav />
      {/* <div className="container mx-auto px-4"> */}
      <section className="relative py-8 h-72 flex items-center justify-center">
        <div className="absolute bottom-0 flex items-center justify-center">
          <h1 className="font-bold text-center text-4xl">Water Potability <br />Measurement Web</h1>
        </div>
      </section>

      <section className="relative">
        <img
          src={background}
          className="w-full mx-auto h-auto object-cover"
          alt="Water Testing"
        />
        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 z-10 text-center">
          <p className="text-xl mb-4">
            Ukur kualitas air minum anda, agar tidak keracunan Bakteri E. Colay
          </p>
          <div className="flex justify-center">
            <Link to="/login">
              <button className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 focus:outline-none focus:ring flex items-center">
                SIGN UP <HiArrowRight className="ml-2" />
              </button>
            </Link>
          </div>
        </div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full bg-gradient-to-b from-white"></div>
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
      <section className="py-16">
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
                  placeholder="Your full name"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  type="email"
                  id="email"
                  placeholder="Your email address"
                />
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
                placeholder="Your message"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 focus:outline-none focus:ring"
                type="submit"
              >
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

