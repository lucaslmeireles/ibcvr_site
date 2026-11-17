import Image from "next/image"

export const MinistryInformation = ({ ministryName, ministryFullName,
    leadersNames, ministryLogo }: {
        ministryName: string
        ministryFullName: string
        leadersNames: string
        ministryLogo: string
    }) => {
    return (
        <div className="flex flex-row gap-3 justify-start items-center">
            <div className="w-18 h-18 rounded-full overflow-hidden bg-amber-50 p-2">
                <Image src={ministryLogo} alt="Logo do ministerio" width={24} height={24} className="w-full h-full" />
            </div>

            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-medium">{ministryName}</h1>
                <h2 className="text-lg">{ministryFullName}</h2>
                <p className="text-xs">{leadersNames}</p>
            </div>
        </div>
    )
}