export default function Timeline() {
  return (
    <div className="px-80"> 
      <p className="text-center text-xl font-semibold my-14">My Timeline</p>
      <div className="flex w-full">
        {/* Experience Section */}
        <div className="flex-1 text-center">
          <h2 className="text-lg font-bold mb-2">Experience</h2>
          <div className="max-w-md w-full bg-base-100 p-4 shadow rounded border border-base-content/10 mx-auto text-left">
            <div className="text-sm space-y-1">
              <p className="font-semibold">Web Developer</p>
              <p>Dan Gordon Enterprise, LLC. Virtual Assistant</p>
              <p>Sept 2023 - Oct 2024 · Part-time</p>
              <p>United States · Remote</p>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="flex-1 text-center">
          <h2 className="text-lg font-bold mb-2">Education</h2>
          <div className="space-y-5 text-2xl">
            {[
              {
                title: "Saint Louis University",
                desc: "Bachelor of Science in Information Technology",
                date: "January 2021 - Present"
              },
              {
                title: "FreeCodeCamp Online Course",
                desc: "Enhanced my Web Development skills, developed a deeper understanding of building responsive and interactive websites.",
                date: "April 2024 - Present"
              },
              {
                title: "StudyTonight Online Course",
                desc: "Studied HTML, CSS, and basic website building.",
                date: "June 2022 - July 2022"
              }
            ].map((item, idx) => (
              <div key={idx} className="max-w-md w-full bg-base-100 p-4 shadow rounded border border-base-content/10 mx-auto text-left">
                <div className="text-sm space-y-1">
                  <p className="font-semibold">{item.title}</p>
                  <p>{item.desc}</p>
                  <p>{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
