export default function SuccessStories() {
  const stories = [
    {
      name: "Sarah Johnson",
      program: "MBA Student, Tsinghua University",
      image: "/professional-woman-headshot.png",
      quote:
        "Visionary Minds Scholars made my dream of studying in China a reality. Their scholarship guidance was invaluable, and so was their ongoing support throughout my application process.",
    },
    {
      name: "David Chen",
      program: "Engineering Student, Shanghai Jiao Tong University",
      image: "/young-man-headshot.png",
      quote:
        "The visa support services were excellent. What seemed like a complex process was made simple and straightforward. My grateful for their expertise.",
    },
    {
      name: "Maria Rodriguez",
      program: "Medicine Student, Peking University",
      image: "/young-woman-professional-headshot.png",
      quote:
        "Finding the right university was my biggest challenge. Visionary Minds Scholars helped me navigate through various options and find a program that perfectly matched my goals.",
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Success Stories
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from students who have successfully achieved their dreams of studying in China with our help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4 sm:mb-6">
                <img 
                  src={story.image || "/placeholder.svg"} 
                  alt={story.name} 
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mr-3 sm:mr-4 object-cover shadow-sm" 
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base leading-tight">
                    {story.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-tight">
                    {story.program}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 italic text-sm sm:text-base leading-relaxed">
                "{story.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
