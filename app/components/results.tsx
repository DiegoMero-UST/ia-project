import ImageSlider from "./imageSlider";

export default function Results() {
  return (
    <section className="bg-[#333333] pt-20 pb-20" >
      <h2 className="text-center text-3xl text-white pb-10">Let our work talk for us</h2>
      <h3 className="text-center text-2xl text-white">Case Studies</h3>
      <ImageSlider />
    </section>
  );
}