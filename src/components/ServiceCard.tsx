export interface ServiceCardProps {
    icon: string;
    title: string;
    text: string;
}


export default function ServiceCard(
    { icon, title, text }: ServiceCardProps) {
    return (
        <article className="card">
            <img src={icon} alt={title} />
            <h4>{title}</h4>
            <p>{text}</p>
        </article>
    )
}
