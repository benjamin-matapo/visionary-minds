"use client"

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="bg-brand-primary text-white py-12 sm:py-16 lg:py-20 mt-14 sm:mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Your Path to Academic Excellence in China
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 opacity-90 leading-relaxed">
              Visionary Minds Scholars provides comprehensive support for international students seeking scholarships
              and admission to Chinese universities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-white text-brand-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get Started
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-brand-primary transition-colors text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Our Services
              </button>
            </div>
          </div>
          <div className="relative order-first lg:order-last">
            <img
              src="https://images.unsplash.com/photo-1523240798132-8751934af4c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Students studying and collaborating in a modern library"
              className="w-full h-auto rounded-lg shadow-2xl max-w-md mx-auto lg:max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
