import React from "react";

const Footer = () => {
  return (
    <div className="pb-20  mt-[150px] z-10  ">
      <div className="p-4 bg-white sm:p-[10.4px] dark:bg-gray-900">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://ljku.edu.in/" className="flex items-center">
              <img
                src="./Images/footer-logo.png"
                className="mr-3 h-6"
                alt="footer-logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap text-black dark:text-white">
                Lok Jagruti University
              </span>
            </a>
          </div>
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              <span>© All Rights Reserved By </span>
              <a
                href="https://ljku.edu.in/"
                target={"_blank"}
                className="hover:underline"
              >
                LJKU
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
