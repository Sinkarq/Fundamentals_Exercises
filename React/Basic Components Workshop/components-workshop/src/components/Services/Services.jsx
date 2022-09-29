import Service from "./Service";

export default function Services() {
    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5" style={{'maxWidth': '500px'}}>
                    <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Services</h5>
                    <h1 className="display-4">Excellent Medical Services</h1>
                </div>
                <div className="row g-5">
                    <Service title='Emergency Care' iconClass='fa-user-md'>
                        Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit
                    </Service>
                    <Service title='Operation & Surgery' iconClass='fa-procedures'>
                        Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit
                    </Service>
                    <Service title='Outdoor Checkup' iconClass='fa-stethoscope'>
                        Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit
                    </Service>
                    <Service title='Ambulance Service' iconClass='fa-ambulance'>
                        Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit
                    </Service>
                    <Service title='Medicine & Pharmacy' iconClass='fa-pills'>
                        Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit
                    </Service>
                    <Service title='Blood Testing' iconClass='fa-microscope'>
                        Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit
                    </Service>
                </div>
            </div>
        </div>
    );
}