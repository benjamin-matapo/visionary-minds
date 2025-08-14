"use client"

export default function Services() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const services = [
    {
      icon: "🔍",
      title: "University Search",
      description:
        "We help you find the perfect university based on your academic goals, interests, and career aspirations.",
      features: [
        "Personalized university matching",
        "Program and curriculum guidance",
        "Compare top and location insights",
      ],
    },
    {
      icon: "📋",
      title: "Visa Support",
      description:
        "We guide you through the complete visa application process, ensuring all requirements are met for a successful outcome.",
      features: ["Document preparation assistance", "Application form completion", "Interview preparation guidance"],
    },
    {
      icon: "💰",
      title: "Scholarship Application",
      description:
        "We help identify and apply for scholarships that match your profile, increasing your chances of receiving financial support.",
      features: [
        "Scholarship opportunity research",
        "Application essay development",
        "Supporting document preparation",
      ],
    },
  ]

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive range of services to support your educational journey in China.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 sm:p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl sm:text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 leading-tight">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-sm sm:text-base text-gray-600">
                    <span className="text-brand-primary mr-2 mt-0.5 flex-shrink-0">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="text-brand-primary font-semibold hover:underline text-sm sm:text-base transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-brand-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-brand-hover transition-colors text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}
