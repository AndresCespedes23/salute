import Image from "next/image";
import compose from "../../../public/compose.png";

export default function Compose() {
  return <Image height={25} width={25} src={compose} alt="compose" />;
}
