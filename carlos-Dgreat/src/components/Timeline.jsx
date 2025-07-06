export default function Timeline() {
  return (
    <div className="max-w-6xl mx-auto px-4"> 
      <p className="text-center text-4xl font-bold my-14">My Timeline</p>
      <div className="flex w-full">
        {/* Experience Section */}
        <div className="flex-1 text-center">
          <h2 className="text-3xl font-bold mb-2 pb-10 text-primary">Experience</h2>
          <div className="max-w-md w-full h-[178px] bg-base-100 p-6 shadow rounded border border-base-content/10 mx-auto text-left">
            <div className="text-sm space-y-1">
              <p className="font-semibold text-lg text-primary">Web Developer</p>
              <p className="text-base">Dan Gordon Enterprise, LLC. Virtual Assistant</p>
              <p>Sept 2023 - Oct 2024 · Part-time</p>
              <p className="mt-5">United States · Remote</p>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="flex-1 text-center">
          <h2 className="text-3xl font-bold mb-2 pb-10 text-primary">Education</h2>
          <div className="space-y-5">
            {[
              {
                title: "Saint Louis University",
                desc: "Bachelor of Science in Information Technology",
                date: "January 2021 - Present"
              },
              {
                title: "FreeCodeCamp Online Course",
                desc: "Gained practical experience in building responsive and interactive websites.",
                date: "April 2024 - Present"
              },
              {
                title: "StudyTonight Online Course",
                desc: "Studied HTML, CSS, and basic website building.",
                date: "June 2022 - July 2022"
              }
            ].map((item, idx) => (
              <div key={idx} className="max-w-md w-full h-[178px] bg-base-100 p-6 shadow rounded border border-base-content/10 mx-auto text-left">
                <div className="text-sm space-y-1">
                  <p className="font-semibold text-lg text-primary">{item.title}</p>
                  <p className="text-base">{item.desc}</p>
                  <p className="mt-5">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
