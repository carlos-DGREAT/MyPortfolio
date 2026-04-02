import React, { useRef } from 'react';

import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useGSAP } from '@gsap/react';



gsap.registerPlugin(ScrollTrigger);



export default function Timeline() {

  const titleRef = useRef(null);
  const expRef   = useRef(null);
  const eduRef   = useRef(null);

  useGSAP(() => {
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 35, filter: 'blur(4px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.1, ease: 'power3.out', clearProps: 'filter,transform,opacity',
        scrollTrigger: { trigger: titleRef.current, start: 'top bottom-=10%', toggleActions: 'play none none reset' } });

    const expCards = expRef.current?.querySelectorAll('.tl-card');
    if (expCards?.length) {
      gsap.fromTo(expCards,
        { opacity: 0, x: -65, filter: 'blur(4px)' },
        { opacity: 1, x: 0, filter: 'blur(0px)', duration: 1.0, ease: 'power3.out', stagger: 0.22,
          clearProps: 'filter,transform,opacity',
          scrollTrigger: { trigger: expRef.current, start: 'top bottom-=5%', toggleActions: 'play none none reset' } });
    }

    const eduCards = eduRef.current?.querySelectorAll('.tl-card');
    if (eduCards?.length) {
      gsap.fromTo(eduCards,
        { opacity: 0, x: 65, filter: 'blur(4px)' },
        { opacity: 1, x: 0, filter: 'blur(0px)', duration: 1.0, ease: 'power3.out', stagger: 0.22,
          clearProps: 'filter,transform,opacity',
          scrollTrigger: { trigger: eduRef.current, start: 'top bottom-=5%', toggleActions: 'play none none reset' } });
    }
  }, {});

  return (

    <div className="max-w-6xl mx-auto px-4 py-10 sm:py-12 lg:py-12 xl:py-16 2xl:py-20">

      <div ref={titleRef} className="text-center my-6 sm:my-8 lg:my-8 xl:my-12 2xl:my-14">
        <p className="text-xs font-bold tracking-[0.25em] uppercase text-red-900/70 mb-3">My Journey</p>
        <p className="text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-red-900 to-gray-800 bg-clip-text text-transparent">My Timeline</p>
      </div>

      <div className="flex flex-col md:flex-row w-full gap-10">

        {/* Experience Section */}

        <div className="flex-1 text-center">

          <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold mb-2 pb-4 lg:pb-5 xl:pb-8 2xl:pb-10 bg-gradient-to-r from-red-900 to-gray-800 bg-clip-text text-transparent">Experience</h2>

          <div ref={expRef} className="space-y-5">

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

              <div

                key={idx}

                className="tl-card max-w-md w-full lg:min-h-[130px] xl:min-h-[155px] bg-base-100 p-4 lg:p-4 xl:p-5 shadow rounded border border-base-content/10 mx-auto text-left"

              >

                <div className="flex items-start gap-3">

                  <div className="w-10 h-10 lg:w-9 lg:h-9 xl:w-11 xl:h-11 flex-shrink-0 flex items-center justify-center">

                    <img

                      src={exp.logo}

                      alt={exp.company}

                      className="w-full h-full object-contain rounded"

                    />

                  </div>

                  <div className="text-sm space-y-1 flex-1">

                    <p className="font-semibold text-base lg:text-base xl:text-lg text-black">{exp.title}</p>

                    <p className="text-sm lg:text-sm xl:text-base">{exp.company}</p>

                    <p>{exp.date}</p>

                    <p className="mt-5">{exp.location}</p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>



        {/* Education Section */}

        <div className="flex-1 text-center">

          <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold mb-2 pb-4 lg:pb-5 xl:pb-8 2xl:pb-10 bg-gradient-to-r from-red-900 to-gray-800 bg-clip-text text-transparent">Education</h2>

          <div ref={eduRef} className="space-y-5">

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

              <div

                key={idx}

                className="tl-card max-w-md w-full lg:min-h-[130px] xl:min-h-[155px] bg-base-100 p-4 lg:p-4 xl:p-5 shadow rounded border border-base-content/10 mx-auto text-left"

              >

                <div className="flex items-start gap-3">

                  <div className={`${item.logoSize} lg:w-9 lg:h-9 xl:w-10 xl:h-10 flex-shrink-0 flex items-center justify-center`}>

                    <img

                      src={item.logo}

                      alt={item.title}

                      className="w-full h-full object-contain rounded"

                    />

                  </div>

                  <div className="text-sm space-y-1 flex-1">

                    <p className="font-semibold text-base lg:text-base xl:text-lg text-black">{item.title}</p>

                    <p className="text-sm lg:text-sm xl:text-base">{item.desc}</p>

                    <p className="mt-5">{item.date}</p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>

  );

}

