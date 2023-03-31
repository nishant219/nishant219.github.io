import React from "react";
import{AiFillTwitterCircle, AiFillLinkedin, AiFillGithub, AiFillInstagram} from "react-icons/ai";

const Footer = () => {
    return (
        <div className="mt-12 lg:mt-15 sm:pb-36 sm:py-12 py-6">
            <div className="max-w-4xl px-4 mx-auto text-gray-800 dark:text-white">
                <div className="pb-10 mb-1 border-t-2 border-gray-300 dark:border-white-300"/>

                <div className="flex flex-col justify-between lg:flex-row items-center">

                    <p className="font-burtons">Built with Next.js and Tailwind</p>

                    <div className="flex flex-wrap text-5xl  pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
                        <a
                            href="https://twitter.com/nishant44238894"
                            className={"transition-colors hover:text-blue-500"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <AiFillTwitterCircle />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/nishantpatil219"
                            className={"transition-colors hover:text-teal-500"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <AiFillLinkedin /> 
                        </a>
                        <a
                            href="https://github.com/nishant219"
                            className={"transition-colors hover:text-yellow-300"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <AiFillGithub />
                        </a>
                        <a
                            href="https://www.instagram.com/__nishant_219__/"
                            className={"transition-colors hover:text-pink-400"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <AiFillInstagram />
                        </a>
                    </div>

                </div>
  
        {/* <div class="relative border border-solid border-teal-400 mt-3 md:mb-1" data-te-input-wrapper-init>
          <input
            type="text"
            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-secondary-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInput1"
            placeholder="Email address" />
          <label
            for="exampleFormControlInput1"
            class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-secondary-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-blue-600 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-secondary-200 dark:peer-focus:text-secondary-200"
            >Email address
          </label>
        </div> */}


            </div>
        </div>
    )
}

export default Footer;