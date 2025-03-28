
import "./ByteWorksApp.css";
import Layout from './Layout/Layout';
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import HomePage from './pages/HomePage';
import ServicesPage from "./pages/ServicesPage";
import WhyChooseUsPage from "./pages/WhyChooseUsPage";



export default function ByteWorksApp() {
    return (
        <Layout>
            <HomePage />
            <AboutUsPage />
            <ServicesPage/>
            <WhyChooseUsPage/>
           <ContactPage/>
        </Layout>
    )
}


