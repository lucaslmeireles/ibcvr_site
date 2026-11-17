import Image from "next/image"
import { SocialMediaButton } from "../atoms/SocialMediaButton"
import { MinistryInformation } from "../atoms/MinistryInformation"


export const MinistryHeader = ({ ministryName, ministryFullName,
    leadersNames, ministryLogo,
    instagramLink, facebookLink }: {
        ministryName: string
        ministryFullName: string
        leadersNames: string
        ministryLogo: string
        instagramLink: string
        facebookLink: string
    }) => {
    return (
        <div className=" flex flex-row gap-6 w-full items-start justify-between ">
            <MinistryInformation leadersNames={leadersNames}
                ministryFullName={ministryFullName}
                ministryLogo={ministryLogo}
                ministryName={ministryName}
            />
            <SocialMediaButton instagram={instagramLink} facebook={facebookLink} />
        </div>
    )
}