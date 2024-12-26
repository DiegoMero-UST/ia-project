import Image from "next/image";

export default function Services() {
  return (
    <section className="pl-5 pr-5 pt-20 flex flex-col items-center gap-5 pb-20">
      <h2 className="text-4xl font-bold">Services</h2>
      <h3 className="text-3xl text-center">If you can imagine it, we can achieve it</h3>
      <ul className="flex flex-col gap-5">
        <li className="bg-[#B0BBC0] p-5 flex flex-col gap-3">
          <Image
            src='/chatbot.png'
            width={400}
            height={200}
            alt="Chatbot"
          />
          <div className="flex flex-col gap-2 items-start">
            <h4 className="text-2xl">Chatbots.</h4>
            <p className="text-xl">Automate tasks and free up time with our smart chatbots. Let them do the hard work.</p>
            <button className="bg-[#000386] text-white text-xl p-5 flex justify-center items-center gap-3">
              Explore
              <Image
                src='/arrow-right-large-svgrepo-com.svg'
                alt="Arrow"
                width={20}
                height={20}
              />
            </button>
          </div>
        </li>
        <li className="bg-[#B0BBC0] p-5 flex flex-col gap-3">
          <Image
            src='/metrics.png'
            width={400}
            height={100}
            alt="Metrics"
          />
          <div className="flex flex-col gap-2 items-start">
            <h4 className="text-2xl">Metrics.</h4>
            <p className="text-xl">Harness the power of AI to gain deep insights from your financial data and make strategic decisions.</p>
            <button className="bg-[#000386] text-white text-xl p-5 flex justify-center items-center gap-3">
              Explore
              <Image
                src='/arrow-right-large-svgrepo-com.svg'
                alt="Arrow"
                width={20}
                height={20}
              />
            </button>
          </div>
        </li>
        <li className="bg-[#B0BBC0] p-5 flex flex-col gap-3">
          <Image
            src='/connect.png'
            width={400}
            height={100}
            alt="Connect"
          />
          <div className="flex flex-col gap-2 items-start">
            <h4 className="text-2xl">Connect.</h4>
            <p className="text-xl">Simplify communication, improve customer experience and increase loyalty with innovative solutions that bring you closer to your customers.</p>
            <button className="bg-[#000386] text-white text-xl p-5 flex justify-center items-center gap-3">
              Explore
              <Image
                src='/arrow-right-large-svgrepo-com.svg'
                alt="Arrow"
                width={20}
                height={20}
              />
            </button>
          </div>
        </li>
      </ul>
    </section>
  );
}