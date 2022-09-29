import Price1 from '../../assets/img/price-1.jpg';
import Price2 from '../../assets/img/price-2.jpg';
import Price3 from '../../assets/img/price-3.jpg';
import Price4 from '../../assets/img/price-4.jpg';
import Package from "./Package.jsx";

export default function PricingPlan() {
    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5" style={{'maxWidth': '500px'}}>
                    <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Medical
                        Packages</h5>
                    <h1 className="display-4">Awesome Medical Programs</h1>
                </div>
                <div className="position-relative" style={{'padding': '0 45px 45px 45px'}}>
                    <Package price='49' title='Pregnancy Care' image={Price1}>
                        <p>Emergency Medical Treatment</p>
                        <p>Highly Experienced Doctors</p>
                        <p>Highest Success Rate</p>
                        <p>Telephone Service</p>
                    </Package>
                    <Package price='89' title='Health Checkup' image={Price2}>
                        <p>Emergency Medical Treatment</p>
                        <p>Highly Experienced Doctors</p>
                        <p>Highest Success Rate</p>
                        <p>Telephone Service</p>
                    </Package>
                    <Package price='149' title='Dental Care' image={Price3}>
                        <p>Emergency Medical Treatment</p>
                        <p>Highly Experienced Doctors</p>
                        <p>Highest Success Rate</p>
                        <p>Telephone Service</p>
                    </Package>
                    <Package price='199' title='Operation & Surgery' image={Price3}>
                        <p>Emergency Medical Treatment</p>
                        <p>Highly Experienced Doctors</p>
                        <p>Highest Success Rate</p>
                        <p>Telephone Service</p>
                    </Package>
                </div>
            </div>
        </div>
    );
}