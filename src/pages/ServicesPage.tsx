import ServicesGrid from '../components/ServicesGrid'
import '../styles/ServicesPage.css'


const services = [

    {
        id: 1,
        icon: '/icons/web-icon.svg',
        title: 'WEB DEVELOPMENT',
        text: 'We create high-performance websites and web apps with React, Next.js, and Node.js, fully responsive and scalable.'
    },

    {
        id: 2,
        icon: '/icons/phone-icon.svg',
        title: 'MOBILE APP DEVELOPMENT',
        text: 'We build hybrid mobile apps with React Native, ensuring smooth functionality across Android and iOS devices.'
    },

    {
        id: 3,
        icon: '/icons/api-icon.svg',
        title: 'BACKEND & APIs',
        text: 'We develop secure and scalable backend solutions using Node.js and PostgreSQL for optimal performance.'
    },

    {
        id: 4,
        icon: '/icons/palette-icon.svg',
        title: 'UI/UX DESIGN',
        text: 'We craft intuitive and engaging user experiences with modern, customized interface designs.'
    },

    {
        id: 5,
        icon: '/icons/work-icon.svg',
        title: 'BUSINESS & CRM SYSTEMS',
        text: 'We develop tailored CRM solutions to streamline operations and improve overall business efficiency.'
    },

    {
        id: 6,
        icon: '/icons/settings-icon-timelapse.svg',
        title: 'OPTIMIZATION & MAINTENANCE',
        text: 'We enhance performance, refactor code, and migrate legacy systems for long-term stability.'
    },

]





export default function ServicesPage() {
    return (
        <section className="services-section">
            <h2 className='services-title'>Our Services</h2>
            <p className="services-text">
                We design and develop modern, high-performance websites, web and mobile applications.
            </p>
            <ServicesGrid servicesCards={services} />
        </section>
    )
}
