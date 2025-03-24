import ServicesGrid from '../components/ServicesGrid'
import '../styles/ServicesPage.css'


const services = [

    {
        id: 1,
        icon: '/icons/web-icon.svg',
        title: 'WEB DEVELOPMENT',
        text: 'We build modern, high-performance websites and web apps using React, Next.js, and Node.js, fully responsive and scalable.'
    },

    {
        id: 2,
        icon: '/icons/phone-icon.svg',
        title: 'MOBILE APP DEVELOPMENT',
        text: 'We develop hybrid mobile apps with React Native, ensuring smooth experiences on Android and iOS.'
    },

    {
        id: 3,
        icon: '/icons/api-icon.svg',
        title: 'BACKEND & APIs',
        text: 'We create secure and scalable backend solutions using Node.js and PostgreSQL'
    },

    {
        id: 4,
        icon: '/icons/palette-icon.svg',
        title: 'UI/UX DESIGN',
        text: 'we develop custom management systems and CRM solutions tailored to your business needs, helping you streamline processes and improve efficiency.'
    },

    {
        id: 5,
        icon: '/icons/work-icon.svg',
        title: 'BUSSINESS AND CRM SYSTEMS',
        text: 'We build modern, high-performance websites and web apps using React, Next.js, and Node.js, fully responsive and scalable.'
    },
    {
        id: 6,
        icon: '/icons/settings-icon-timelapse.svg',
        title: 'OPTIMIZATION & MAINTENANCE',
        text: 'Performance tuning, code refactoring, and legacy system migration for peak efficiency.'
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
