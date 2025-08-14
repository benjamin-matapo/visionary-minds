"use client"

import { useState } from "react"

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqCategories = [
    {
      title: "General",
      questions: [
        {
          question: "What services does Visionary Minds Scholars offer?",
          answer:
            "We provide comprehensive support including university search and placement, visa assistance, scholarship applications, and ongoing student support throughout your academic journey in China.",
        },
        {
          question: "How long does the application process take?",
          answer:
            "The timeline varies depending on the program and university, but typically ranges from 3-6 months from initial consultation to admission confirmation.",
        },
      ],
    },
    {
      title: "Application & Admissions",
      questions: [
        {
          question: "What are the admission requirements for Chinese universities?",
          answer:
            "Requirements vary by university and program, but generally include academic transcripts, language proficiency tests (HSK for Chinese programs, IELTS/TOEFL for English programs), recommendation letters, and a personal statement.",
        },
        {
          question: "Do I need to speak Chinese to study in China?",
          answer:
            "Not necessarily. Many universities offer programs taught in English. However, learning basic Chinese will enhance your experience and daily life in China.",
        },
      ],
    },
    {
      title: "Scholarships & Funding",
      questions: [
        {
          question: "What scholarships are available for international students?",
          answer:
            "There are various scholarships including Chinese Government Scholarships, university-specific scholarships, and provincial government scholarships. We help identify and apply for the most suitable options.",
        },
        {
          question: "What is the success rate for scholarship applications?",
          answer:
            "Our success rate for scholarship applications is over 85%, thanks to our personalized approach and extensive experience in the application process.",
        },
      ],
    },
    {
      title: "Visa & Travel",
      questions: [
        {
          question: "How do I apply for a student visa to China?",
          answer:
            "We guide you through the entire visa application process, including document preparation, application submission, and interview preparation if required.",
        },
        {
          question: "What documents do I need for a Chinese student visa?",
          answer:
            "Required documents typically include a valid passport, admission letter, JW202 form, medical examination report, and proof of financial support.",
        },
      ],
    },
  ]

  let questionIndex = 0

  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Find answers to common questions about studying in China and our services.
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-lg sm:text-xl font-semibold text-brand-primary mb-4 leading-tight">
                {category.title}
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {category.questions.map((item, itemIndex) => {
                  const currentIndex = questionIndex++
                  return (
                    <div key={itemIndex} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                      <button
                        onClick={() => toggleItem(currentIndex)}
                        className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
                      >
                        <span className="font-medium text-gray-900 text-sm sm:text-base leading-relaxed pr-4">
                          {item.question}
                        </span>
                        <span className="text-brand-primary text-xl sm:text-2xl flex-shrink-0">
                          {openItems.includes(currentIndex) ? "−" : "+"}
                        </span>
                      </button>
                      {openItems.includes(currentIndex) && (
                        <div className="px-4 sm:px-6 pb-4 sm:pb-5">
                          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
