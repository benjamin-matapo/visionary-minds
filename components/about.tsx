export default function About() {
  const stats = [
    { number: "1000+", label: "Students Placed" },
    { number: "95%", label: "Success Rate" },
    { number: "50+", label: "Partner Universities" },
    { number: "10+", label: "Years Experience" },
  ]

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            About Us
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are dedicated to helping international students achieve their academic dreams in China.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg sm:text-xl font-semibold text-brand-primary mb-3 sm:mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To bridge the gap between international students and Chinese universities, providing comprehensive support
              for academic success.
            </p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg sm:text-xl font-semibold text-brand-primary mb-3 sm:mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To be the leading educational consultancy for students seeking quality higher education opportunities in
              China.
            </p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg sm:text-xl font-semibold text-brand-primary mb-3 sm:mb-4">
              Core Values
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Excellence, integrity, and personalized service guide everything we do for our students.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4 bg-brand-accent rounded-lg">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
