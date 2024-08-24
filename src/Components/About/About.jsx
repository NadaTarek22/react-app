export function About(){



    return (
        <>
            <div className="main-background pt-24  mmin-height">
                <h2 className="uppercase text-white text-center fs mb-3">about component</h2>

                <div className="mb-3 flex justify-center items-center">
                    <div className="line me-3 bg-white"></div>
                    <i className="fa-solid fa-star text-white"></i>
                    <div className="line ms-3 bg-white"></div>
                </div>

                <div className="container mx-auto grid grid-cols-2 px-5 text-white">
                    <div className="ps-5 pe-3">
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>

                    <div className="pe-5 ps-3">
                        <p className="">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>

                </div>
            </div>
        </>
    )
}