import Link from "./Link.jsx";

export default function Footer() {
    return (
        <>
            <div className="container-fluid bg-dark text-light mt-5 py-5">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Get
                                In Touch</h4>
                            <p className="mb-4">No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et
                                dolor sed dolor</p>
                            <p className="mb-2"><i className="fa fa-map-marker-alt text-primary me-3"></i>123 Street,
                                New York, USA</p>
                            <p className="mb-2"><i className="fa fa-envelope text-primary me-3"></i>info@example.com</p>
                            <p className="mb-0"><i className="fa fa-phone-alt text-primary me-3"></i>+012 345 67890</p>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Quick
                                Links</h4>
                            <div className="d-flex flex-column justify-content-start">
                                <Link href='#'>Home</Link>
                                <Link href='#'>About Us</Link>
                                <Link href='#'>Our Services</Link>
                                <Link href='#'>Meet the Team</Link>
                                <Link href='#'>Latest Blog</Link>
                                <Link href='#'>Contact Us</Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Popular
                                Links</h4>
                            <div className="d-flex flex-column justify-content-start">
                                <Link href='#'>Home</Link>
                                <Link href='#'>About Us</Link>
                                <Link href='#'>Our Services</Link>
                                <Link href='#'>Meet the Team</Link>
                                <Link href='#'>Latest Blog</Link>
                                <Link href='#'>Contact Us</Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Newsletter</h4>
                            <form action="React/Basic Components Workshop/components-workshop/src/components/Footer/Footer.jsx">
                                <div className="input-group">
                                    <input type="text" className="form-control p-3 border-0"
                                           placeholder="Your Email Address"/>
                                        <button className="btn btn-primary">Sign Up</button>
                                </div>
                            </form>
                            <h6 className="text-primary text-uppercase mt-4 mb-3">Follow Us</h6>
                            <div className="d-flex">
                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="#"><i
                                    className="fab fa-twitter"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="x#"><i
                                    className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="#"><i
                                    className="fab fa-linkedin-in"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle" href="#"><i
                                    className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-dark text-light border-top border-secondary py-4">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-md-6 text-center text-md-start">
                            <p className="mb-md-0">&copy; <a className="text-primary" href="React/Basic Components Workshop/components-workshop/src/components/Footer/Footer.jsx#">Your Site Name</a>. All
                                Rights Reserved.</p>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <p className="mb-0">Designed by <a className="text-primary" href="https://htmlcodex.com">HTML
                                Codex</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <a href="React/Basic Components Workshop/components-workshop/src/components/Footer/Footer.jsx#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
        </>
    );
}