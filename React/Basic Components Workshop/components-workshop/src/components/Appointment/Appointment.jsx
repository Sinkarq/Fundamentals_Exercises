import AppointmentForm from "./AppointmentForm";

export default function Appointment() {
    return (
        <div className="container-fluid bg-primary my-5 py-5">
            <div className="container py-5">
                <div className="row gx-5">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="mb-4">
                            <h5 className="d-inline-block text-white text-uppercase border-bottom border-5">Appointment</h5>
                            <h1 className="display-4">Make An Appointment For Your Family</h1>
                        </div>
                        <p className="text-white mb-5">Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd
                            ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt
                            voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr
                            ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.</p>
                        <a className="btn btn-dark rounded-pill py-3 px-5 me-3" href="React/Basic Components Workshop/components-workshop/src/components/Appointment/Appointment.jsx">Find Doctor</a>
                        <a className="btn btn-outline-dark rounded-pill py-3 px-5" href="React/Basic Components Workshop/components-workshop/src/components/Appointment/Appointment.jsx">Read More</a>
                    </div>

                    <AppointmentForm/>
                </div>
            </div>
        </div>
    );
}