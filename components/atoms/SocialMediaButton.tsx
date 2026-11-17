import { Facebook, Instagram } from "@deemlol/next-icons"
import Link from "next/link"

export const SocialMediaButton = ({ instagram, facebook }: { instagram?: string, facebook?: string }) => {
    return (
        <div className="flex flex-row gap-2 h-10 shadow bg-white text-black px-2 py-2 rounded-md  hover:bg-black hover:text-white transition-colors duration-300">
            <Link href={instagram || "#"}><Instagram size={24} /></Link>
            <Link href={facebook || "#"}><Facebook size={24} /></Link>
        </div>
    )
}