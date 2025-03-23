import Navbar from "../components/Navbar";
import "./Layout.css";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <section className="marketing-layout">
            <Navbar />
            
            <main className="main-content">
                {children}
            </main>
        </section>
    )
}
