
import "./ByteWorksApp.css";
import Layout from './Layout/Layout';
import AboutUsPage from "./pages/AboutUsPage";
import HomePage from './pages/HomePage';



export default function ByteWorksApp() {
    return (
        <Layout>
            <HomePage />
            <AboutUsPage />
        </Layout>
    )
}


