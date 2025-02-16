"use client";
import React, { createElement, useEffect, useState } from "react";
import Container from "../Container";
import Link from "next/link";
import { IoClose, IoNotifications } from "react-icons/io5";
import { Badge } from "antd";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const pahtname = usePathname();
  const [isToggle, setIsToggle] = useState(false);
  useEffect(() => setIsToggle(false), [pahtname]);
  const navs = [
    {
      label: "Home",
      value: "/",
    },
    {
      label: "About",
      value: "about",
    },
    {
      label: "FAQ",
      value: "faq",
    },
  ];
  return (
    <div className="shadow sticky top-0 left-0 w-full bg-white">
      <div className="container mx-auto px-2 sm:px-4 lg:px-6 2xl:px-2 py-3 lg:py-2 flex justify-between items-center gap-3">
        <div className="overflow-hidden">
          <img
            className="max-w-[140px] md:max-w-[200px] xl:max-w-[240px] -ml-1 lg:-ml-2"
            alt="profile"
            src={"/images/derk-logo.svg"}
            // width={1000}
            // height={1000}
          />
        </div>
        <ul className="hidden lg:flex justify-center gap-4 lg:gap-6">
          {navs.map((item) => (
            <Link key={item.value} href={item.value}>
              <li className="group -mb-1.5">
                <span className="px-0.5 font-medium text-lg">{item.label}</span>
                <div
                  className={cn(
                    "h-0.5 bg-heading w-0 group-hover:w-full transition-all mx-auto",
                    {
                      "w-full": pahtname === item.value,
                    }
                  )}
                ></div>
              </li>
            </Link>
          ))}
        </ul>
        <div className="flex justify-end items-center gap-3 lg:gap-5">
          <Link
            href={"profile"}
            className="bg-heading rounded-full hidden lg:block"
          >
            {/* <Avatar alt="profile" shape="circle" icon={}/> */}
            <Image
              className="size-10 rounded-full "
              alt="profile"
              src={"/images/demo-profile.png"}
              width={200}
              height={200}
            />
          </Link>
          <Link href={"notification"}>
            <Badge
              dot={true}
              // offset={[0, 1]}
              style={{ transform: "scale(1.3)" }}
            >
              <IoNotifications className="size-[22px] lg:size-8 -mb-2 lg:-mb-2.5 text-heading overflow-hidden" />
            </Badge>
          </Link>
          <button
            onClick={() => setIsToggle((c) => !c)}
            className="lg:hidden bg-slate-100 p-0.5 rounded"
          >
            {createElement(isToggle ? IoClose : RxHamburgerMenu, {
              size: "23",
            })}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
