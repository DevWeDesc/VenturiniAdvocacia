import Image from "next/image";
import ImageMobile from "../../public/ImageMobile.png";

export default function Home() {
  return (
    <main className="relative">
      <Image
        alt=""
        className="absolute w-full object-contain top-0"
        src={ImageMobile}
      />
    </main>
  );
}
