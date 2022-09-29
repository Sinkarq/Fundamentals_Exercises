export default function Package({
    title, image, children, price
}) {
    return (
        <div className="bg-light rounded text-center">
            <div className="position-relative">
                <img className="img-fluid rounded-top" src={image} alt=""/>
                <div
                    className="position-absolute w-100 h-100 top-50 start-50 translate-middle rounded-top d-flex flex-column align-items-center justify-content-center"
                    style={{'background': 'rgba(29, 42, 77, .8)'}}>
                    <h3 className="text-white">{title}</h3>
                    <h1 className="display-4 text-white mb-0">
                        <small className="align-top fw-normal"
                               style={{'fontSize': '22px; line-height: 45px'}}>$</small>{price}<small
                        className="align-bottom fw-normal" style={{'fontSize': '16px; line-height: 40px'}}>/
                        Year</small>
                    </h1>
                </div>
            </div>
            <div className="text-center py-5">
                {children}
                <a href="#" className="btn btn-primary rounded-pill py-3 px-5 my-2">Apply Now</a>
            </div>
        </div>
    );
};