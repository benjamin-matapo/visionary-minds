export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="col-span-1 sm:col-span-2">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 leading-tight">
              Visionary Minds Scholars
            </h3>
            <p className="text-gray-300 mb-4 text-sm sm:text-base leading-relaxed">
              Your trusted partner for academic excellence in China. We provide comprehensive support for international
              students seeking scholarships and admission to Chinese universities.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/260979891359"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
              >
                WhatsApp
              </a>
              <a
                href="mailto:visionarymindsscholars@gmail.com"
                className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
              >
                Email
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg leading-tight">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base block py-1">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base block py-1">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base block py-1">
                  About
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base block py-1">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base block py-1">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg leading-tight">Contact Info</h4>
            <div className="space-y-2 text-gray-300 text-sm sm:text-base">
              <div className="break-all">visionarymindsscholars@gmail.com</div>
              <div>+260 979 891 359</div>
              <div>Mon-Fri: 9AM-6PM</div>
              <div>Sat: 10AM-4PM</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-300">
          <p className="text-sm sm:text-base">&copy; 2024 Visionary Minds Scholars. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
