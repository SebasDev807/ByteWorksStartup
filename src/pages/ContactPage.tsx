import '../styles/ContactPage.css';
import Form from '../components/Form';


export default function ContactPage() {
    return (
        <section className="form-section">
            <div className="form-info">

                <h2>Do you think <span>should talk?</span></h2>

                <div className="form-item">
                    byteworks@gmail.com
                </div>

                <div className="form-item">
                    +573147875028
                </div>

                <div className="form-item">
                    Popayán - Cauca - Colombia
                </div>
            </div>

            <Form/>

        </section>
    )
}
