export default function WhyChooseUs() {
  const features = [
    {
      icon: "🎓",
      title: "Expert Guidance",
      description: "Our team of education consultants provides expert guidance throughout your application process.",
    },
    {
      icon: "🌍",
      title: "University Connections",
      description:
        "We have established partnerships with top Chinese universities to enhance your chances of admission.",
    },
    {
      icon: "💰",
      title: "Scholarship Success",
      description:
        "Our proven track record of scholarship approvals maximizes your chances of receiving financial support.",
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Why Choose Us
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive support services to make your educational journey to China smooth and successful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 sm:p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl sm:text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 leading-tight">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
