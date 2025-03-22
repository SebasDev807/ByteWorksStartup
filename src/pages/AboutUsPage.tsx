import '../styles/AboutUsPage.css';

export default function AboutUsPage() {
    return (
        <section id="about-us-section" className="about-us-section">
            <article className="about-us-info">
                <h2 className='about-us-title'>About Us</h2>
                <h3>WHO WE ARE?</h3>
                <h4>Byteworks: You dream, we code.</h4>
                <p>
                    We are a group of developers who share the same passion:
                    creating software that truly makes a difference.
                    From business tools to web applications,
                    our goal is to build products that exceed expectations.
                </p>

                <button className="button button-read-more">Read more</button>
            </article>

            <img src="/about-us-img.jpg" alt="about-us-img" />
        </section>
    );
}

