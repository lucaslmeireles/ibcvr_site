import Image from "next/image"

export const MinistryHero = ({ ministryCoverImage }: { ministryCoverImage: string }) => {
    return (
        <div className="w-full max-h-96 lg:h-80 overflow-hidden z-0">
            <Image loading="eager" src={ministryCoverImage} alt="Logo do ministério" width={1170} height={384} className="w-full h-full object-cover " />
        </div>
    )
}