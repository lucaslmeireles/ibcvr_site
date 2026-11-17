import { EventCardProps } from "../atoms/EventCard"
import EventTitle from "../molecules/EventTitle"
import { MinistryHeader } from "../molecules/MinistryHeader"


export const MinistryContent = ({ ministryName, ministryFullName,
    leadersNames, ministryLogo,
    instagramLink, facebookLink, events }: {
        ministryName: string
        ministryFullName: string
        leadersNames: string
        ministryLogo: string
        instagramLink: string
        facebookLink: string,
        events: EventCardProps[]
    }) => {
    return (
        <div className="mx-6 w-11/12 flex flex-row gap-x-3">
            <MinistryHeader ministryName={ministryName}
                ministryFullName={ministryFullName}
                leadersNames={leadersNames}
                key={ministryFullName}
                facebookLink={facebookLink}
                instagramLink={instagramLink}
                ministryLogo={ministryLogo} />
            <EventTitle events={events} />
        </div>
    )
}