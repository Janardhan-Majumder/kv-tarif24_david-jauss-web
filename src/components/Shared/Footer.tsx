import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../Container";

export default function Footer() {
  return (
    <footer className="text-white bg-black/10">
      <Container className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
        <div>
          <Image
            src="/logo-footer.png"
            alt="logo"
            width={102}
            height={120}
            // style={{
            //   maxWidth: "100%",
            //   height: "auto"
            // }}
          />
          <p className="font-normal max-w-lg mt-4">
            KV-tarif24 helps private health insurance policyholders reduce their
            premiums without switching providers or losing benefits.
            Transparent, secure, and risk-free—start saving today!
          </p>
        </div>
        <div className="grid lg:grid-cols-3 justify-between  lg:w-2/3 xl:w-1/2 w-full gap-4">
          <div>
            <h3 className="font-semibold text-2xl">Explore</h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/beauticians">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-2xl">Utility Pages</h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link href="/policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms of Use</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-2xl">Get In Touch</h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a href="mailto:peardup@gmail.com">peardup@gmail.com</a>
              </li>
              <li>
                <a href="tel:+(009) 56567890">(009) 56567890</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <p className="py-5 text-sm md:text-base text-center border-t  border-playground">
        ©{new Date().getFullYear()}Kv-trif24. All Rights Reserved
      </p>
    </footer>
  );
}
