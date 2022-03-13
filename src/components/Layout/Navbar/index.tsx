import React, {useState} from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import MobileMenu from "./MobileMenu";
import Menu from "../../../../public/icons/menu.svg";

const index = () => {
  const router = useRouter();
  const path = router.pathname.split("/")[1];
  const [menu, setMenu] = useState(false)

  const toggleMenu = () => setMenu(prv => !prv)
  return (
    <>
      <div className="sticky top-0 left-0 z-20 bg-primary font-poppins">
        <div className="flex items-center justify-between h-16 px-5 mx-auto space-x-10 md:justify-start max-w-7xl">
          <div className="h-full py-2 md:basis-1/4">
            <Link href="/">
              <img
                className="max-h-full cursor-pointer"
                src="/images/logo.png"
                alt="econitre logo"
              />
            </Link>
          </div>
          <Menu className="cursor-pointer md:hidden fill-white" onClick={toggleMenu}/>
          <div className="items-center hidden text-lg font-bold text-white md:flex">
            <Link href="/">
              <span
                className={`h-full px-5 cursor-pointer hover:border-b-2 border-white flex items-center ${
                  path == "" && "border-b-2"
                }`}
              >
                Inicio
              </span>
            </Link>
            <Link href="/beneficios">
              <span
                className={`h-full px-5 cursor-pointer hover:border-b-2 border-white flex items-center ${
                  path == "beneficios" && "border-b-2"
                }`}
              >
                Beneficios
              </span>
            </Link>
            <Link href="/contacto">
              <span
                className={`h-full px-5 cursor-pointer hover:border-b-2 border-white flex items-center ${
                  path == "contacto" && "border-b-2"
                }`}
              >
                Contacto
              </span>
            </Link>
          </div>
        </div>
      </div>
      <MobileMenu open={menu} toggle={toggleMenu}/>
    </>
  );
};

export default index;
