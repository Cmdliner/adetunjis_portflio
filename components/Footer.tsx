import Link from "next/link";

export default function Footer() {
    return (
        <footer className="text-center font-bold border border-red-500 bg-[#080808] text-white p-4">
            &copy; Designed and developed by <Link className="underline" href="https://adeyemiabiade.tech"> Adeyemi Abiade </Link>
        </footer>
    );
}