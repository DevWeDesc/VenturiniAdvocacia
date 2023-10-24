import Image from "next/image";
import ImageMobile from "../../public/ImageMobile.png";
import PhotoVictor from "../../public/PhotoVictor.png";
import { InfoPeople } from "@/components/InfoPeople";
import { SectionSocialMedia } from "@/components/SectionSocialMedia";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Image
        alt=""
        className="absolute w-full object-contain top-0 lg:hidden"
        src={ImageMobile}
      />
      <InfoPeople />
      <SectionSocialMedia />

      <Footer />
    </main>
  );
}
