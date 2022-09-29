import Team1 from '../../assets/img/team-1.jpg';
import Team2 from '../../assets/img/team-2.jpg';
import Team3 from '../../assets/img/team-3.jpg';
import TeamMember from "./TeamMember";

export default function Team() {
    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5" style={{'maxWidth': '500px'}}>
                    <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Our Doctors</h5>
                    <h1 className="display-4">Qualified Healthcare Professionals</h1>
                </div>
                <div className="team-carousel position-relative">
                    <TeamMember
                        image={Team1}
                        description='Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clitarebum dolor'
                        name='Doctor Name 1'
                        specialization='Cardiology Specialist'
                    />
                    <TeamMember
                        image={Team2}
                        description='Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clitarebum dolor'
                        name='Doctor Name 2'
                        specialization='Cardiology Specialist'
                    />
                    <TeamMember
                        image={Team3}
                        description='Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clitarebum dolor'
                        name='Doctor Name 3'
                        specialization='Cardiology Specialist'
                    />
                </div>
            </div>
        </div>
    );
}