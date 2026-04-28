import logo from "@/assets/logo.png";
import Image from "next/image";
import { format } from "date-fns";
export default function Header() {
  return (
    <div className="py-20 space-y-5">
      <Image src={logo} alt="Logo" height={1000} width={300} className="mx-auto" />
      <p className="text-center  text-gray-500 font-semibold">Journalism Without Fear or Favour</p>
      <p className="text-center font-bold">{format(new Date(), "EEEE, MMM dd, yyyy")}</p>
    </div>
  )
}
