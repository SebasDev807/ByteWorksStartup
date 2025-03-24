import ServiceCard, { ServiceCardProps } from "./ServiceCard"



interface ServiceCard extends ServiceCardProps {
    id: number;
}


interface ServicesGridProps {
    servicesCards: ServiceCard[]
}



export default function ServicesGrid({ servicesCards }: ServicesGridProps) {

    return (
        <div className="services-grid">
            {servicesCards.map(service =>
                <ServiceCard {...service} key={service.id} />)}
        </div>
    )
}
