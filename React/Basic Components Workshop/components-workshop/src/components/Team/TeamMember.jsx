export default function TeamMember({
    specialization, name, description, image
}) {
    return (
        <div style={{'margin': '20px'}} className="team-item">
            <div className="row g-0 bg-light rounded overflow-hidden">
                <div className="col-12 col-sm-5 h-100">
                    <img className="img-fluid h-100" src={image} style={{'objectFit': 'cover'}}/>
                </div>
                <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                    <div className="mt-auto p-4">
                        <h3>{name}</h3>
                        <h6 className="fw-normal fst-italic text-primary mb-4">{specialization}</h6>
                        <p className="m-0">{description}</p>
                    </div>
                    <div className="d-flex mt-auto border-top p-4">
                        <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i
                            className="fab fa-twitter"></i></a>
                        <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i
                            className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-lg btn-primary btn-lg-square rounded-circle" href="#"><i
                            className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div  >
    );
}