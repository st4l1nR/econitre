import React from "react";
import Link from "next/link";
import Close from "../../../../../public/icons/close.svg";
import { Transition } from "@headlessui/react";

type props = {
  open: boolean;
  toggle: () => void;
};
const index: React.FC<props> = ({ open = false, toggle }) => {
  return (
    <Transition
      className="fixed inset-0 z-50 flex flex-col items-center justify-center w-full h-screen p-10 space-y-10 text-2xl grd-primary md:hidden"
      show={open}
      enter="transition ease-in duration-150"
      enterFrom="translate-x-full"
      enterTo="translate-x-100"
      leave="transition ease-out duration-150"
      leaveFrom="translate-x-100"
      leaveTo="translate-x-full"
      as="div"
    >
      <Close
        className="absolute cursor-pointer top-10 right-10"
        onClick={toggle}
      />
      <Link href="/">
        <span className="cursor-pointer hover:text-white" onClick={toggle}>Home</span>
      </Link>
      <Link href="/beneficios">
        <span className="cursor-pointer hover:text-white" onClick={toggle}>Beneficios</span>
      </Link>
      <Link href="/contacto">
        <span className="cursor-pointer hover:text-white" onClick={toggle}>Contacto</span>
      </Link>
    </Transition>
  );
};

export default index;
