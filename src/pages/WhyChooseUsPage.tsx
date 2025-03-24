import ReasonsGrid from "../components/ReasonsGrid";
import Technologies from "../components/Technologies";
import '../styles/WhyChooseUs.css';


const reasons = [

  {
    id: 1,
    title: 'FAST AND EFFICIENT DEVELOPMENT ',
    text: 'We optimize every project to deliver high-performance solutions quickly.',
    icon:'/icons/rocket-icon.svg'
  },
  
  {
    id: 2,
    title: 'GUARANTEED SECURITY',
    text: 'We follow the best practices to ensure data',
    icon:'icons/locker-icon.svg'
  },
  
  {
    id: 3,
    title: 'MODERN AND ATRACTIVE DESIGN',
    text: 'We create sleek, user-friendly interfaces that adapt to any device.',
    icon:'icons/palette-icon.svg'
  },
  
  {
    id: 4,
    title: 'PASSION AND COMMITMENT',
    text: 'We love what we do and strive for excellence in every project.',
    icon:'icons/heart-icon.svg'
  }


];


export default function WhyChooseUsPage() {

  return (
    <section className="why-choose-us-section">
      <h2 className="reasons-title">Why Choose Us?</h2>
      <ReasonsGrid reasons={reasons} />
      <Technologies/>

    </section>
  )
}
