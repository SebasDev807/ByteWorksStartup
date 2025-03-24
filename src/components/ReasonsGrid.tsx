import ReasonsCard from "./ReasonsCard";

interface ReasonsCard {
    id: number;
    title: string;
    text: string;
    icon: string
}

interface ReasonsGridProps {
    reasons: ReasonsCard[]
}


export default function ReasonsGrid({ reasons }: ReasonsGridProps) {
    return (
        <section className="reasons-grid">

            {reasons.map(({ id, ...reason }) =>
                (<ReasonsCard key={id} {...reason} />))}

        </section>
    )
}
