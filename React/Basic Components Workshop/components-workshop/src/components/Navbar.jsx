export default function Navbar() {
    return (
        <div className="container-fluid sticky-top bg-white shadow-sm">
            <div className="container">
                <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
                    <a href="index.html" className="navbar-brand">
                        <h1 className="m-0 text-uppercase text-primary"><i className="fa fa-clinic-medical me-2"></i>Medinova
                        </h1>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            <a href="index.html" className="nav-item nav-link active">Home</a>
                            <a href="about.html" className="nav-item nav-link">About</a>
                            <a href="service.html" className="nav-item nav-link">Service</a>
                            <a href="price.html" className="nav-item nav-link">Pricing</a>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu m-0">
                                    <a href="blog.html" className="dropdown-item">Blog Grid</a>
                                    <a href="detail.html" className="dropdown-item">Blog Detail</a>
                                    <a href="team.html" className="dropdown-item">The Team</a>
                                    <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                    <a href="appointment.html" className="dropdown-item">Appointment</a>
                                    <a href="search.html" className="dropdown-item">Search</a>
                                </div>
                            </div>
                            <a href="contact.html" className="nav-item nav-link">Contact</a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}