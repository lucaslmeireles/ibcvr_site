"use client";

import { LOCALE } from "@/config";
import { ArrowDownRight } from "@deemlol/next-icons";
import Image from "next/image";
import { useState } from "react";

export type EventCardProps = {
    date: Date,
    name: string,
    location: string,
    time: string,
    description: string,
    createdByLogo: string
    fullView?: boolean
}

export default function EventCard({ date, name, location, time, description, createdByLogo, fullView }: EventCardProps) {
    const [isOpen, setIsOpen] = useState(false)

    const getMonthName = (date: Date) => {
        return new Intl.DateTimeFormat(LOCALE, { month: 'short' }).format(date);
    }

    return (
        <div className="flex flex-col gap-2 p-2 rounded-sm items-center-safe justify-between shadow focus:border-none hover:bg-black hover:text-white transition-colors duration-300 overflow-hidden">
            <button
                type="button"
                onClick={() => setIsOpen((current) => !current)}
                className="flex flex-row gap-2 items-center-safe justify-between w-full cursor-pointer text-left"
                aria-expanded={isOpen}
            >
                <div className="text-center">
                    <p>{date.getDay()}</p>
                    <p>{getMonthName(date)}</p>
                </div>
                <div className="text-start flex flex-col gap-1 min-w-0 flex-1">
                    <p className="text-clip">{name}</p>
                    <p className="text-xs text-clip">{location}</p>
                </div>
                <p className="font-medium">{time}</p>
                <ArrowDownRight
                    size={24}
                    className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                />
            </button>

            <div
                className={`grid transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="overflow-hidden">
                    <div className="py-3 cursor-pointer max-h-35 overflow-hidden">
                        {fullView && <span>Imagem</span>}
                        <p className="max-w-full mx-4">{description}</p>
                        <div className="px-3 flex flex-row place-self-end items-center-safe gap-1">
                            <span className="text-sm">Criado por</span>
                            <div className="w-8 h-8 rounded-full overflow-hidden bg-amber-50 p-2">
                                <Image src={createdByLogo} alt="Logo do ministerio" width={24} height={24} className="w-full h-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}