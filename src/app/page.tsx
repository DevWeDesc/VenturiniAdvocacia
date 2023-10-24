import Image from "next/image";
import ImageMobile from "../../public/ImageMobile.png";

export default function Home() {
  return (
    <main className="relative">
      {/* <Image
        alt=""
        className="absolute w-full object-contain top-0 lg:hidden"
        src={ImageMobile}
      /> */}
      <p className="text-white text-5xl z-10 font-title text-center">
        <span className="text-colorDefault">V</span>ictor{" "}
        <span className="text-colorDefault">V</span>enturini Brandão
      </p>
    </main>
  );
}
