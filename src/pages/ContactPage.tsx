import '../styles/ContactPage.css';
import Form from '../components/Form';






export default function ContactPage() {
    return (
        <section className="form-section">
            <div className="form-info">

                <h2>Do you think <span>should talk?</span></h2>

                <div className="form-item">
                    <img src="icons/contact/email-icon.svg" alt="email" className='icon' />
                    <p>byteworks@gmail.com</p>
                </div>

                <div className="form-item">
                    <img src="icons/contact/phone-icon.svg" alt="email" className='icon' />
                    <p>+573147875028 </p>
                </div>

                <div className="form-item">
                    <img src="icons/contact/location-icon.svg" alt="email" className='icon' />
                    <p>Popayán - Cauca - Colombia</p>
                </div>
            </div>

            <Form />

        </section>
    )
}
