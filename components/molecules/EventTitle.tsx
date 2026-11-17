import EventCard, { EventCardProps } from "../atoms/EventCard"


type EventProps = {
    fullView?: boolean
    events: EventCardProps[]
}

export default function EventTitle({ fullView, events }: EventProps) {
    console.log("events", events)
    return (
        <aside className="w-5/12 flex flex-col gap-3 bg-white text-black px-3 py-2 rounded-sm shadow-lg focus:border-none ">
            <p className="text-lg font-medium">Proximos Eventos</p>
            {
                events.length > 0 ? events.map(event => <EventCard key={event.name + 1} {...event} fullView={fullView} />) : <p className="text-gray-500">Nenhum evento agendado.</p>
            }

        </aside>
    )
}