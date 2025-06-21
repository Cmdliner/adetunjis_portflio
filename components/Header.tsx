import Link from "next/link";

export default function Header() {
    return (        <header className="bg-white/20 backdrop-blur-md flex fixed w-[99.7vw] md:w-[80vw] top-0 md:left-[10vw] md:right-[10vw] p-4 justify-between border border-white/20 shadow-lg z-50 rounded-md my-2 mx-auto">
            <div className="text-2xl font-semibold">
                Adetunji Adeniran
            </div>

            <nav className="flex">
                <ul className="flex items-center gap-6">
                    <li className="hidden md:block"><Link href="#about-me" className="hover:underline hover:text-emerald-500 transition-colors">About Me</Link></li>
                    <li className="hidden md:block"><Link href="#projects" className="hover:underline hover:text-emerald-500 transition-colors">Projects</Link></li>

                    <li><Link href="" className="hover:text-emerald-500 transition-colors">In</Link></li>
                    <li><Link href="" className="hover:text-emerald-500 transition-colors">X</Link></li>
                </ul>
            </nav>
        </header>
    );
}