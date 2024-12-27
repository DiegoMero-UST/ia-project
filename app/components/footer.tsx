import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#333333] text-white p-5 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col gap-5">
          <div>
            <h2 className="text-lg font-bold">Agentify.AI</h2>
            <p className="text-sm">© 2024 Agentify.AI. All rights reserved.</p>
          </div>
          <div className="flex flex-col">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}