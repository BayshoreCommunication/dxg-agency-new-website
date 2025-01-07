// import bgFooter from '../public/bgFooter.png';
import { SITECONFIG } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import image from "@/public/bgFooter.png";
import logo from "@/public/dxgLogo.svg";
import { Icons } from "./Icons";
import { Button } from "./ui/button";
import { MotionDiv } from "./Motion";
import { fadeIn, zoomIn } from "@/lib/motion";
import MaxWidthWrapper from "./MaxWidthWrapper";

export default function Footer() {
  return (
    <div className="">
      <footer
        className="relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${image.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <MaxWidthWrapper>
          <div className="mx-auto  w-full  py-8">
            <div className="py-8 ">
              <div className="flex flex-col">
                <div className="flex flex-col md:flex-row md:justify-between">
                  <div className=" mb-5 flex flex-1 justify-between  md:flex-[.85]">
                    {/* First column */}
                    <div className="flex flex-col">
                      <div className="w-2/3 md:w-1/2">
                        <Image
                          src={logo}
                          alt="Texture Logo"
                          style={{ width: "100%" }}
                        />
                      </div>
                      <div className="my-4">
                        {/* address */}

                        <div className="flex">
                          <div className="w-20 flex-[.2] md:flex-[.1]">
                            {
                              <Icons.location
                                fill="current"
                                className="icon-hover  text-brand"
                              />
                            }
                          </div>
                          <p className="flex-[.8] text-sm text-white md:flex-[.9] ml-[-14px] md:ml-[-4px]">
                            {SITECONFIG.address}
                          </p>
                        </div>

                        <Link
                          href={`tel:+${SITECONFIG.phone}`}
                          className="my-2 flex"
                        >
                          <div className="w-20 flex-[.2] md:flex-[.1]">
                            {
                              <Icons.phone
                                fill="current"
                                className="icon-hover  text-brand"
                              />
                            }
                          </div>
                          <p className="flex-[.8] text-sm text-white md:flex-[.9] ml-[-14px] md:ml-[-4px]">
                            {SITECONFIG.phone}
                          </p>
                        </Link>

                        {/* email */}

                        <Link
                          href={`mailto:${SITECONFIG.email}`}
                          className=" flex items-center"
                        >
                          <div className="w-16 flex-[.2] md:flex-[.1]">
                            {
                              <Icons.mail
                                fill=""
                                className="icon-hover  text-brand"
                              />
                            }
                          </div>
                          <p className="flex-[.8] text-sm text-white md:flex-[.9] ml-[-14px] md:ml-[-4px]">
                            {SITECONFIG.email}
                          </p>
                        </Link>
                      </div>
                      {/* icons */}
                      <div className=" flex gap-4">
                        <div>
                          <Link
                            href="https://www.facebook.com/dxgagcy/"
                            target="_blank"
                          >
                            <Icons.facebook
                              fill="current"
                              className="icon-hover h-6 w-6 rounded text-brand"
                            />
                          </Link>
                        </div>

                        <div>
                          <Link
                            href="https://linkedin.com/company/dxg-agency"
                            target="_blank"
                          >
                            <Icons.linkedIn
                              fill="current"
                              className="icon-hover h-6 w-6 rounded text-brand"
                            />
                          </Link>
                        </div>

                        <div>
                          <Link
                            href="https://twitter.com/dxgagency"
                            target="_blank"
                          >
                            <Icons.x
                              fill="current"
                              className="icon-hover h-6 w-6 rounded text-brand"
                            />
                          </Link>
                        </div>

                        <div>
                          <Link
                            href="https://www.instagram.com/dxg.agency"
                            target="_blank"
                          >
                            <Icons.instagram
                              fill="current"
                              className="icon-hover h-6 w-6 rounded text-brand"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* Second Column */}
                    <div className="flex flex-col">
                      <div className="md:w-2/2 text-right md:text-left">
                        <h2 className="mb-2 text-2xl font-bold text-brand text-right md:text-left">
                          Services
                        </h2>
                        {SITECONFIG.footerNav.services.map((item, index) => {
                          return (
                            <div key={index} className="flex flex-row">
                              <Link href={item.slug}>
                                <Button
                                  variant={"link"}
                                  className="mb-3 md:mb-1 whitespace-pre-line pr-0 text-right text-white hover:text-brand md:pl-0 md:text-left text-[12px] md:text-[14px]"
                                >
                                  {item.title}
                                </Button>
                              </Link>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div></div>
                  </div>

                  <div className="flex flex-1 justify-between  md:flex-[.35]">
                    {/* Third Column */}
                    <div className="flex flex-col">
                      <div className="">
                        <h2 className="mb-2 text-2xl font-bold text-brand">
                          Why DXG
                        </h2>
                        {SITECONFIG.footerNav.whyDXG.map((item, index) => {
                          return (
                            <div key={index} className="flex flex-row">
                              <Link key={index} href={item.slug}>
                                <Button
                                  variant={"link"}
                                  className="mb-1 pl-0 text-white hover:text-brand text-[12px] md:text-[14px]"
                                >
                                  {item.title}
                                </Button>
                              </Link>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Fourth Column */}
                    <div className="flex flex-col  md:items-center">
                      <div className="text-right md:text-left">
                        <h2 className="mb-2 text-2xl font-bold text-brand text-right md:text-left">
                          Legal
                        </h2>
                        {SITECONFIG.footerNav.legal.map((item, index) => {
                          return (
                            <div key={index} className="flex flex-row">
                              <Link key={index} href={item.slug}>
                                <Button
                                  variant={"link"}
                                  className="mb-1 pr-0 text-white hover:text-brand md:pl-0 text-[12px] md:text-[14px]"
                                >
                                  {item.title}
                                </Button>
                              </Link>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
        <hr className="border-gray-500" />

        {/* Second Row */}
        <div className="flex h-[80px] flex-col justify-center">
          <div className="text-center text-xs text-white">
            ©2024 Digital Xperience Group (DXG) ®All Rights Reserved. <br />
            Design & Developed by{" "}
            <Link
              className="text-brand"
              href="https://www.bayshorecommunication.com/"
              target="_blank"
            >
              BayShore Communication
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
