import Testimonial1  from '../../assets/img/testimonial-1.jpg';
import Testimonial2  from '../../assets/img/testimonial-2.jpg';
import Testimonial3  from '../../assets/img/testimonial-3.jpg';
import Review from "./Review";

export default function Testimonial() {
    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5" style={{'maxWidth': '500px'}}>
                    <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Testimonial</h5>
                    <h1 className="display-4">Patients Say About Our Services</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="testimonial-carousel">
                            <Review image={Testimonial1} profession='Profession' patientName='Patient Name'>
                                Dolores sed duo clita tempor justo dolor et stet lorem
                                kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et
                                tempor diam tempor erat. Erat dolor rebum sit ipsum.
                            </Review>
                            <Review image={Testimonial2} profession='Profession' patientName='Patient Name'>
                                Dolores sed duo clita tempor justo dolor et stet lorem
                                kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et
                                tempor diam tempor erat. Erat dolor rebum sit ipsum.
                            </Review>
                            <Review image={Testimonial3} profession='Profession' patientName='Patient Name'>
                                Dolores sed duo clita tempor justo dolor et stet lorem
                                kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et
                                tempor diam tempor erat. Erat dolor rebum sit ipsum.
                            </Review>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}