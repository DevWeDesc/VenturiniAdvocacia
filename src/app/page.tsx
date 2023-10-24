import Image from "next/image";
import ImageMobile from "../../public/ImageMobile.png";
import { InfoPeople } from "@/components/InfoPeople";
import { SectionSocialMedia } from "@/components/SectionSocialMedia";
import { Footer } from "@/components/Footer";
import ImageDesktop from "../../public/ImageDesktop.png";
import ImageXLScreen from "../../public/ImageXLSceen.png";

export default function Home() {
  return (
    <main className="lg:grid lg:grid-cols-2 h-auto xxl:max-h-screen">
      <Image
        alt=""
        className="absolute w-full object-contain top-0 lg:hidden"
        src={ImageMobile}
      />
      <Image
        alt=""
        className="hidden relative lg:block object-cover h-full  w-full xxl:hidden"
        src={ImageDesktop}
      />
      <Image
        alt=""
        className="hidden relative lg:hidden object-cover h-full  w-full xxl:block xxl:max-h-screen"
        src={ImageXLScreen}
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
