export default function Portfolio() {
    return (
        <div>
            <p className="text-center text-4xl py-14 font-bold">My Portfolio</p>

            {/* Container with custom width, rounded corners, and background 
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
            */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto px-4">
            <div className="card card-side bg-base-100 shadow-sm">
                <figure>
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>      
            <div className="card card-side bg-base-100 shadow-sm">
                <figure>
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
            <div className="card card-side bg-base-100 shadow-sm">
                <figure>
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
            <div className="card card-side bg-base-100 shadow-sm">
                <figure>
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
            <div className="card card-side bg-base-100 shadow-sm">
                <figure>
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
            <div className="card card-side bg-base-100 shadow-sm">
                <figure>
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
                       
            </div>

        </div>
    );
}
