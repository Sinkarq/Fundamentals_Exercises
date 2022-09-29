export default function Review({
    image, children, patientName, profession
}) {
    return (
        <div className="testimonial-item text-center">
            <div className="position-relative mb-5">
                <img className="img-fluid rounded-circle mx-auto" src={image}/>
                <div
                    className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle"
                    style={{'width': '60px', 'height': '60px'}}>
                    <i className="fa fa-quote-left fa-2x text-primary"></i>
                </div>
            </div>
            <p className="fs-4 fw-normal">{children}</p>
            <hr className="w-25 mx-auto"/>
            <h3>{patientName}</h3>
            <h6 className="fw-normal text-primary mb-3">{profession}</h6>
        </div>
    );
}