export default function Portfolio() {
    return (
        <div>
            <p className="text-center text-4xl py-14 font-bold">My Portfolio</p>

            {/* Container with custom width, rounded corners, and background */}
            <div className="flex justify-center">
                <div className="tabs tabs-box w-full max-w-4/5 pt-8 rounded-xl p-2 flex justify-center gap-2">

                    <input type="radio" name="my_tabs_6" className="tab" aria-label="All" />
                    <div className="tab-content p-6">All</div>

                    <input type="radio" name="my_tabs_6" className="tab" aria-label="Web App" defaultChecked />
                    <div className="tab-content p-6">Web App</div>

                    <input type="radio" name="my_tabs_6" className="tab" aria-label="Web Design" />
                    <div className="tab-content p-6">Web Design</div>

                    <input type="radio" name="my_tabs_6" className="tab" aria-label="Figma Design" />
                    <div className="tab-content p-6">Figma Design</div>
                </div>
            </div>
        </div>
    );
}
