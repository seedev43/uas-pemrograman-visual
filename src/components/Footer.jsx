export function Footer() {
    return (
        <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4 text-white">
          <div className="flex justify-between items-center">
            <div className="text-lg font-bold">Water Potability Measurement Web</div>
            <div className="space-x-4">
              <a href="#" className="hover:underline">Home</a>
              <a href="#" className="hover:underline">About</a>
              <a href="#" className="hover:underline">Services</a>
              <a href="#" className="hover:underline">Pricing</a>
              <a href="#" className="hover:underline">Contact</a>
            </div>
          </div>
          <div className="mt-4 text-center">
            &copy; 2024 Water Potability Measurement Web. All rights reserved.
          </div>
        </div>
      </footer>
    )
}