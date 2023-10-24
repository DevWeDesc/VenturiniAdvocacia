import Image from "next/image";
import ImageMobile from "../../public/ImageMobile.png";
import { InfoPeople } from "@/components/InfoPeople";
import { SectionSocialMedia } from "@/components/SectionSocialMedia";
import { Footer } from "@/components/Footer";
import ImageDesktop from "../../public/ImageDesktop.png";

export default function Home() {
  return (
    <main>
      <Image
        alt=""
        className="absolute w-full object-contain top-0 lg:hidden"
        src={ImageMobile}
      />
      <Image
        alt=""
        className="hidden object-contain lg:block absolute top-0 left-0 h-screen"
        src={ImageDesktop}
      />
      <InfoPeople />
      <SectionSocialMedia />

      <Footer />
    </main>
  );
}
