import React from 'react';
import FadeIn from './FadeIn';

export default function Timeline() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-4 sm:py-8">
      <FadeIn tag="p" className="text-center text-2xl sm:text-3xl md:text-4xl font-bold my-8 sm:my-10 md:my-14 bg-gradient-to-r from-red-900 to-gray-800 bg-clip-text text-transparent">My Timeline</FadeIn>
      <div className="flex flex-col md:flex-row w-full gap-10">
        {/* Experience Section */}
        <div className="flex-1 text-center">
          <FadeIn tag="h2" className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 pb-5 sm:pb-8 md:pb-10 bg-gradient-to-r from-red-900 to-gray-800 bg-clip-text text-transparent">Experience</FadeIn>
          <div className="space-y-5">
            {[
              {
                title: "Web Application Developer",
                company: "DENR - Department of Environment and Natural Resources",
                date: "January 2026 - Present · Intern",
                location: "Philippines · Hybrid",
                logo: "/DENR-Logo2.png"
              },
              {
                title: "Web Developer",
                company: "Seva Solutions",
                date: "Nov 2024 - January 2025  ·  Gig",
                location: "Philippines · Remote",
                logo: "/sevasolutions-logo.jpg"
              },
              {
                title: "Web Developer",
                company: "Dan Gordon Enterprise, LLC. Virtual Assistant",
                date: "Sept 2023 - Oct 2024 · Part-time",
                location: "United States · Remote",
                logo: "/DanLogo.png"
              }
            ].map((exp, idx) => (
              <FadeIn 
                key={idx} 
                delay={idx * 0.1}
                className="max-w-md w-full min-h-[148px] sm:min-h-[178px] bg-base-100 p-4 sm:p-6 shadow rounded border border-base-content/25 mx-auto text-left"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-full h-full object-contain rounded"
                    />
                  </div>
                  <div className="text-sm space-y-1 flex-1">
                    <p className="font-semibold text-lg text-black">{exp.title}</p>
                    <p className="text-base">{exp.company}</p>
                    <p>{exp.date}</p>
                    <p className="mt-5">{exp.location}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="flex-1 text-center">
          <FadeIn tag="h2" className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 pb-5 sm:pb-8 md:pb-10 bg-gradient-to-r from-red-900 to-gray-800 bg-clip-text text-transparent" delay={0.2}>Education</FadeIn>
          <div className="space-y-5">
            {[
              {
                title: "Saint Louis University",
                desc: "Bachelor of Science in Information Technology",
                date: "January 2022 - July 2026",
                logo: "/SLU-logo.png",
                logoSize: "w-10 h-10"
              },
              {
                title: "FreeCodeCamp Online Course",
                desc: "Gained practical experience in building responsive and interactive websites.",
                date: "April 2024 - Present",
                logo: "/freecodecamp- logo.jfif",
                logoSize: "w-10 h-10"
              },
              {
                title: "StudyTonight Online Course",
                desc: "Studied HTML, CSS, and basic website building.",
                date: "June 2022 - July 2022",
                logo: "/studytonight-logo.png",
                logoSize: "w-10 h-10"
              }
            ].map((item, idx) => (
              <FadeIn 
                key={idx} 
                delay={idx * 0.1 + 0.2}
                className="max-w-md w-full min-h-[148px] sm:min-h-[178px] bg-base-100 p-4 sm:p-6 shadow rounded border border-base-content/10 mx-auto text-left"
              >
                <div className="flex items-start gap-3">
                  <div className={`${item.logoSize} flex-shrink-0 flex items-center justify-center`}>
                    <img
                      src={item.logo}
                      alt={item.title}
                      className="w-full h-full object-contain rounded"
                    />
                  </div>
                  <div className="text-sm space-y-1 flex-1">
                    <p className="font-semibold text-lg text-black">{item.title}</p>
                    <p className="text-base">{item.desc}</p>
                    <p className="mt-5">{item.date}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
