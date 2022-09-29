export default function Service({
    title, children, iconClass
}) {

    return (
        <div className="col-lg-4 col-md-6">
            <div
                className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon mb-4">
                    <i className={"fa fa-2x text-white " + iconClass}></i>
                </div>
                <h4 className="mb-3">{title}</h4>
                <p className="m-0">{children}</p>
                <a className="btn btn-lg btn-primary rounded-pill"
                   href="React/Basic Components Workshop/components-workshop/src/components/Services/Services.jsx">
                    <i className="bi bi-arrow-right"></i>
                </a>
            </div>
        </div>
    );
};