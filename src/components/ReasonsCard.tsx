


export interface ReasonsCardProps {
    title: string,
    text: string,
    icon: string
}


export default function ReasonsCard({ title, text, icon }: ReasonsCardProps) {
    return (
        <article className="reason-card">
            <img src={icon} alt={title} />
            <div className="reason-text">
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
        </article>
    )
}
