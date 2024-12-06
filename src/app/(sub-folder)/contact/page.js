import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="background-image"
        className="-z-50 w-full h-full object-cover object-center opacity-25 fixed top-0 left-0"
      />

    </>
  );
}
