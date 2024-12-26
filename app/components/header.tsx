import Image from "next/image";
export default function Header() {
  return (
    <section className="relative h-[88vh] text-white pl-5 pr-5 pt-20">
        <Image
          src='/mobilebg2.jpg'
          fill
          alt="Header"
          className="-z-10"
        />
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl font-bold">Increase the productivity of your business with AI solutions</h1>
        <h2 className="text-2xl">Automate repetitive tasks, minimize errors, and scale your business efficiently.</h2>
        <button className="text-3xl bg-[#000386] text-white p-5 rounded-3xl">Request demo</button>
      </div>
    </section>
  );
}
