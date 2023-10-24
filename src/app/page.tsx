import Image from "next/image";
import ImageMobile from "../../public/ImageMobile.png";
import PhotoVictor from "../../public/PhotoVictor.png";
import { InfoPeople } from "@/components/InfoPeople";

export default function Home() {
  return (
    <main className="relative ">
      <Image
        alt=""
        className="absolute w-full object-contain top-0 lg:hidden"
        src={ImageMobile}
      />
      <InfoPeople />
    </main>
  );
}
