import Image from "next/image";
import home from "../../../public/home.png";

export default function Compose() {
  return <Image height={25} width={25} src={home} alt="home" />;
}
