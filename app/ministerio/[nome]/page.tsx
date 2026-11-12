import Image from "next/image"
import { Instagram } from "@deemlol/next-icons"
import { Facebook } from "@deemlol/next-icons"
import Link from "next/link"
import EventTitle from "@/components/molecules/EventTitle"
export default async function Page({
    params,
}: {
    params: Promise<{ nome: string }>
}) {
    return (
        <main className="flex flex-col max-w-full gap-6 items-center">
            <div className="w-full max-h-96 lg:h-80 overflow-hidden z-0">
                <Image src={"https://images.unsplash.com/photo-1622598453695-4fbaf151aadc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"} alt="Logo do ministério" width={1170} height={384} className="w-full h-full object-cover " />
            </div>
            <div className="mx-6 w-11/12 flex flex-row gap-x-3">
                <div className=" flex flex-row gap-6 w-full items-start justify-between ">
                    <div className="flex flex-row gap-3 justify-start items-center">
                        <div className="w-18 h-18 rounded-full overflow-hidden bg-amber-50 p-2">
                            <Image src={"https://www.pngmart.com/files/23/Free-Logos-PNG-Picture.png"} alt="Logo do ministerio" width={24} height={24} className="w-full h-full" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-2xl font-medium">Nome do Ministério</h1>
                            <h2 className="text-lg">Nome Completo do Ministerio</h2>
                            <p className="text-xs">Nome dos lideres</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2 h-10  bg-white text-black px-2 py-2 rounded-md  hover:bg-black hover:text-white transition-colors duration-300">
                        <Link href={"#"}><Instagram size={24} /></Link>
                        <Link href={"#"}><Facebook size={24} /></Link>
                    </div>
                </div>
                <EventTitle events={[{
                    date: new Date(),
                    name: "Um teste muuuuuuuito loooooooongooooooooo",
                    location: "Uma localizsacao muuuuuuuuuuitoooooo longa",
                    createdByLogo: "https://www.pngmart.com/files/23/Free-Logos-PNG-Picture.png",
                    description: "Uma descricao muuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuito longa",
                    time: "19:00"
                },
                {
                    date: new Date(),
                    name: "Um teste muuuuuuuito loooooooongooooooooo",
                    location: "Uma localizsacao muuuuuuuuuuitoooooo longa",
                    createdByLogo: "https://www.pngmart.com/files/23/Free-Logos-PNG-Picture.png",
                    description: "Uma descricao muuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuito longa",
                    time: "19:00"
                },
                {
                    date: new Date(),
                    name: "Um teste muuuuuuuito loooooooongooooooooo",
                    location: "Uma localizsacao muuuuuuuuuuitoooooo longa",
                    createdByLogo: "https://www.pngmart.com/files/23/Free-Logos-PNG-Picture.png",
                    description: "Uma descricao muuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuito longa",
                    time: "19:00"
                },
                {
                    date: new Date(),
                    name: "Um teste muuuuuuuito loooooooongooooooooo",
                    location: "Uma localizsacao muuuuuuuuuuitoooooo longa",
                    createdByLogo: "https://www.pngmart.com/files/23/Free-Logos-PNG-Picture.png",
                    description: "Uma descricao muuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuito longa",
                    time: "19:00"
                }
                ]} />
            </div>
        </main>
    )
}