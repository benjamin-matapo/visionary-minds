export default function About() {
  const team = [
    {
      name: "Michael Chen",
      role: "Founder & CEO",
      image: "/professional-asian-businessman.png",
      bio: "Former admissions officer with 10+ years of experience in Chinese higher education.",
    },
    {
      name: "Sarah Liu",
      role: "Education Consultant",
      image: "/team-member-2.png",
      bio: "Specializes in scholarship applications and has helped 500+ students secure funding.",
    },
    {
      name: "David Wang",
      role: "Visa Specialist",
      image: "/professional-asian-consultant.png",
      bio: "Immigration expert with extensive knowledge of Chinese visa requirements and processes.",
    },
    {
      name: "Emily Zhang",
      role: "Student Support Manager",
      image: "/professional-young-asian-woman.png",
      bio: "Provides ongoing support to students throughout their academic journey in China.",
    },
  ]

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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4 bg-brand-accent rounded-lg">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
            Our Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 object-cover shadow-md"
                />
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 leading-tight">
                  {member.name}
                </h4>
                <p className="text-brand-primary font-medium mb-3 text-sm sm:text-base">{member.role}</p>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
