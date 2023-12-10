import Image from "next/image";
import AntDesign from "/public/images/technology/AntDesign.png";
import Apache from "/public/images/technology/Apache.jpg";
import Bootstrap from "/public/images/technology/Bootstrap.jpg";
import CSS from "/public/images/technology/CSS.png";
import HTML from "/public/images/technology/HTML.png";
import JavaScript from "/public/images/technology/JavaScript.jpg";
import MySQL from "/public/images/technology/MySQL.png";
import NextJs from "/public/images/technology/NextJs.png";
import React from "/public/images/technology/React.png";
import SQL from "/public/images/technology/SQL.jpg";
import VueJs from "/public/images/technology/VueJs.png";
import Laravel from "/public/images/technology/laravel.png";
import php from "/public/images/technology/php.png";
import tailwindcss from "/public/images/technology/tailwindcss.jpg";

function Skills() {
  return (
    <div>
      <>
        <section
          id="technology"
          className="technology_area page_area pb-12 lg:pb-18 sm:pb-6  pt-12 lg:pt-18 sm:pt-6"
        >
          <div className="container mx-auto px-12 lg:py-4 sm:py-2">
            <h2 className="text-center text-xl lg:text-4xl sm:text-base font-bold  lg:mt-4 sm:mt-2 mb-8 md:mb-12">
              My Skills
            </h2>

            <div className="technology-wrapper mb-16 mt-12">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
                <div className="single_tech_item ">
                  <Image src={php} className="techlogy-img" alt="logo" />
                  <p className="mt-2"> PHP</p>
                </div>
                <div className="single_tech_item ">
                  <Image src={Laravel} className="techlogy-img" alt="logo" />
                  <p className="mt-2">Laravel</p>
                </div>

                <div className="single_tech_item ">
                  <Image src={SQL} className="techlogy-img" alt="logo" />
                  <p className="mt-2">SQL</p>
                </div>
                <div className="single_tech_item ">
                  <Image src={MySQL} className="techlogy-img" alt="logo" />
                  <p className="mt-2">MySQL</p>
                </div>

                <div className="single_tech_item ">
                  <Image src={HTML} className="techlogy-img" alt="logo" />
                  <p className="mt-2">HTML</p>
                </div>
                <div className="single_tech_item ">
                  <Image src={CSS} className="techlogy-img" alt="logo" />
                  <p className="mt-2">CSS</p>
                </div>
                <div className="single_tech_item ">
                  <Image src={Bootstrap} className="techlogy-img" alt="logo" />
                  <p className="mt-2">Bootstrap</p>
                </div>
                <div className="single_tech_item ">
                  <Image src={tailwindcss} className="techlogy-img" alt="logo" />
                  <p className="mt-2">Tailwind CSS</p>
                </div>
                <div className="single_tech_item ">
                  <Image src={AntDesign} className="techlogy-img" alt="logo" />
                  <p className="mt-2">Ant Design</p>
                </div>
                <div className="single_tech_item ">
                  <Image src={JavaScript} className="techlogy-img" alt="logo" />
                  <p className="mt-2">JavaScript </p>
                </div>
                <div className="single_tech_item ">
                  <Image src={VueJs} className="techlogy-img" alt="logo" />
                  <p className="mt-2">VueJs</p>
                </div>
                <div className="single_tech_item ">
                  <Image src={React} className="techlogy-img" alt="logo" />
                  <p className="mt-2">React</p>
                </div>
                <div className="single_tech_item ">
                  <Image src={NextJs} className="techlogy-img" alt="logo" />
                  <p className="mt-2">NextJs</p>
                </div>

                <div className="single_tech_item ">
                  <Image src={Apache} className="techlogy-img" alt="logo" />
                  <p className="mt-2">Apache</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

export default Skills;
