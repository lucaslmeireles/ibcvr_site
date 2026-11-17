import { MinistryHero } from "@/components/atoms/MiniteryHero"
import { MinistryContent } from "@/components/organisms/MinistryContent"
import { contentfulClient } from "@/lib/api"
import { notFound } from "next/navigation"

export const instant = false

export default async function Page({
    params,
}: {
    params: Promise<{ nome: string }>
}) {

    const { nome } = await params
    const entries = await contentfulClient.getEntries({
        content_type: "ministry",
        "fields.name": nome,
        limit: 1,
    })

    const events = await contentfulClient.getEntries({
        content_type: "event",
        "fields.ministry.sys.id": entries.items[0].sys.id,
        include: 2

    })

    const fetchEvents = () =>
        events.items.map((event) => {
            const { datetime, title, description, ministry } = event.fields as any;
            const parsedDate = new Date(datetime);

            return {
                date: parsedDate,
                name: title,
                location: "Local não informado",
                time: new Intl.DateTimeFormat("pt-BR", {
                    hour: "2-digit",
                    minute: "2-digit",
                    timeZone: "America/Sao_Paulo",
                }).format(parsedDate),
                description,
                createdBy: "https:" + ministry.fields.logo.fields.file.url,
            };
        });

    console.log("entries", entries, events)
    const ministry = entries.items[0];

    if (!ministry) {
        notFound();
    }

    const { name, ministryNameComplete, hero } = ministry.fields as any;
    return (
        <main className="flex flex-col max-w-full gap-6 items-center">
            <MinistryHero ministryCoverImage={"https:" + hero.fields.file.url} />
            <MinistryContent
                events={fetchEvents()}
                facebookLink=""
                instagramLink=""
                ministryFullName={ministryNameComplete}
                ministryName={name}
                ministryLogo="https://www.pngmart.com/files/23/Free-Logos-PNG-Picture.png"
                leadersNames="" />
        </main>
    )
}