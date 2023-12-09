"use client";
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";
import OpenSvg from "@/components/svg/OpenSvg";
import CloseSvg from "@/components/svg/CloseSvg";
import { Disclosure } from "@headlessui/react";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "About", href: "/about", current: false },
  { name: "Projects", href: "/projects", current: false },
  { name: "Skills", href: "/skills", current: false },
  // { name: "Blogs", href: "/blogs", current: false },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const currentRoute = usePathname();

  console.log(currentRoute);

  useEffect(() => {
    console.log("Navbar created");
  }, []);

  return (
    <>
      <nav className="z-20 fixed top-0 left-0 right-0 py-2 mobile-bg">
        <Disclosure as="nav">
          {({ open }) => (
            <>
              <div className="container">
                <div className="relative  flex h-16 items-center justify-between">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="mobile-menu place-content-end inline-flex items-center justify-center rounded-md p-2 text-gray-400">
                      {open ? <OpenSvg /> : <CloseSvg />}
                    </Disclosure.Button>
                  </div>
                  <div className="flex lg:flex-1  items-center justify-center sm:items-stretch  sm:justify-between">
                    <div className="flex flex-shrink-0 items-center">
                      <Link href="/">Logo</Link>
                    </div>

                    <div className="hidden sm:block">
                      <div className="flex space-x-4 justify-items-end items-center content-start mr-auto lg:justify-end navbar-nav lg:flex">
                        <div
                          id="nav"
                          className="items-center content-start mr-auto lg:justify-end navbar-nav lg:flex"
                        >
                          {navigation.map((item) => (
                            <Link
                              key={item.name}
                              className={classNames(
                                item.href === currentRoute
                                  ? "bg-gray-900 text-white"
                                  : "text-black-300 hover:bg-gray-700 hover:text-white",
                                "nav-item ml-5 rounded-md px-3 py-1"
                              )}
                              href={item.href}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(item.current ? "" : "", "block px-3 py-2 text-sm")}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </nav>
    </>
  );
}
