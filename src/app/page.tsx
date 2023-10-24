import Image from "next/image";
import ImageMobile from "../../public/ImageMobile.png";
import { InfoPeople } from "@/components/InfoPeople";
import { SectionSocialMedia } from "@/components/SectionSocialMedia";
import { Footer } from "@/components/Footer";
import ImageDesktop from "../../public/ImageDesktop.png";

export default function Home() {
  return (
    <main className="lg:grid lg:grid-cols-2 h-auto">
      <Image
        alt=""
        className="absolute w-full object-contain top-0 lg:hidden"
        src={ImageMobile}
      />
      <Image
        alt=""
        className="hidden relative lg:block object-cover h-full  w-full"
        src={ImageDesktop}
      />
      <div className="h-auto  flex flex-col justify-between">
        <div>
          <InfoPeople />
          <SectionSocialMedia />
        </div>

        <Footer />
      </div>
    </main>
  );
}
