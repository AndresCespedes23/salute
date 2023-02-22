import Image from "next/image";
import search from "../../../public/search.png";

export default function Search() {
  return <Image height={25} width={25} src={search} alt="search" />;
}
