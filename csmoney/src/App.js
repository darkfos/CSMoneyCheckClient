import HeaderComponent from "./compontents/header/HeaderComponent";
import { Fragment } from "react";
import Image1 from "./static/images/home_1.png";
import IconCalc from "./static/images/calculator_12549941.png"
import IconWeapon from "./static/images/machine-gun_10846977.png"
import IconProfile from "./static/images/user_7855633.png"
import IconReview from "./static/images/review_2326145.png"
import IconBlog from "./static/images/comment-alt-edit_9821493.png"
import IConGun from "./static/images/gun_750067.png"
import Cs3Image from "./static/images/CS2-3.jpg"
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import FooterComponent from "./compontents/footer/FooterComponent";
import CustomBtn from "./compontents/buttons/CustomButton";
import AuthModal from "./compontents/modals/AuthModal";
import "./static/styles/index.css"


function App() {
  const colorTheme = localStorage.getItem("theme");
  return (
    <Fragment>
      <HeaderComponent />
      <main className="mt-40">
        <div className="grid grid-cols-2 gap-40 items-center w-10/12 m-auto">
          <div className="flex flex-col gap-12">
            <h2 className={colorTheme === "primary" ? "text-primary text-3xl font-bold w-3/4" : "text-secondary"}>Free, Reliable, Scalable
            Rest - API for Steam game Cs</h2>
            <p className={colorTheme === "primary" ? "text-primary_text" : "text-secondary_text"}>
            Our mission is to provide the ultimate Steam API – the largest, most up-to-date solution for your projects. Access profiles, items, inventories, price histories, market prices, collections, and more in a straightforward JSON format. Our API is fast, efficient, and developer-friendly, making retrieving Steam game data is simple and without blocking. 
            </p>
            <div className="flex flex-row">
              <svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <div className="min-w-0 flex-1 pl-5  text-sm text-gray-400">
                <p>Rated by users</p>
              </div>
            </div>           
          </div>
          <div>
            <img src={Image1} className="rounded-2xl w-auto"/>
          </div>
        </div>
        <div className={colorTheme === "primary" ? "grid grid-rows-2 mt-40 bg-primary_bg" : "grid grid-rows-2 mt-40"}>
          <header className="w-10/12 m-auto text-center mt-12 flex flex-col gap-4">
            <h3 className={colorTheme === "primary" ? "text-primary_text font-bold text-xl" : ""}>#WHATCANIDO</h3>
            <h1 className={colorTheme === "primary" ? "text-3xl text-white font-bold" : "text-2xl"}>What can i do in this web app</h1>
            <p className={colorTheme === "primary" ? "text-white font-bold w-9/12 m-auto" : ""}>Discover the Power of Our Marketplace API: Buy and Sell Skins with Ease. Create an Inventory Worth Calculator or Customize Your Gaming Experience with Ingame Skinchanger. Foster Thriving Communities, Build Discord Bots, and Track User Inventories and Profiles. Unleash the Potential of Our Versatile API. </p>
          </header>
          <div className="w-10/12 m-auto flex flex-row gap-8 flex-wrap justify-center -mt-20 pb-8">
            <div className="flex flex-col gap-4 bg-white rounded-2xl w-1/4 p-4">
              <img src={IconCalc} className="w-12 m-auto -mt-9 bg-primary_ac_text p-2 rounded-2xl"/>
              <h2 className="font-bold">Inventory worth calculator</h2>
              <p>You can create an inventory value calculator similar to csbackpack.net. You can achieve this by using our Steam Profile API and, in addition, the Inventory API. </p>
            </div>
            <div className="flex flex-col gap-4 bg-white rounded-2xl w-1/4 p-4">
              <img src={IconWeapon} className="w-12 m-auto -mt-9 bg-primary_ac_text p-2 rounded-2xl"/>
              <h2 className="font-bold">Item data</h2>
              <p>You can create an inventory value calculator similar to csbackpack.net. You can achieve this by using our Steam Profile API and, in addition, the Inventory API. </p>
            </div>
            <div className="flex flex-col gap-4 bg-white rounded-2xl w-1/4 p-4">
              <img src={IconReview} className="w-12 m-auto -mt-9 bg-primary_ac_text p-2 rounded-2xl"/>
              <h2 className="font-bold">Reviews</h2>
              <p>You can create an inventory value calculator similar to csbackpack.net. You can achieve this by using our Steam Profile API and, in addition, the Inventory API. </p>
            </div>
            <div className="flex flex-col gap-4 bg-white rounded-2xl w-1/4 p-4">
              <img src={IconProfile} className="w-12 m-auto -mt-9 bg-primary_ac_text p-2 rounded-2xl"/>
              <h2 className="font-bold">Profile</h2>
              <p>You can create an inventory value calculator similar to csbackpack.net. You can achieve this by using our Steam Profile API and, in addition, the Inventory API. </p>
            </div>
            <div className="flex flex-col gap-4 bg-white rounded-2xl w-1/4 p-4">
              <img src={IconBlog} className="w-12 m-auto -mt-9 bg-primary_ac_text p-2 rounded-2xl"/>
              <h2 className="font-bold">Blogs</h2>
              <p>You can create an inventory value calculator similar to csbackpack.net. You can achieve this by using our Steam Profile API and, in addition, the Inventory API. </p>
            </div>
          </div>
        </div>
        <div>
          <header className={colorTheme === "primary" ? "w-10/12 m-auto flex flex-col mt-40 text-center gap-4 justify-items-center" : "w-10/12 w-auto mt-40 gap-4"}>
            <h2 className={colorTheme === "primary" ? "text-primary font-bold text-3xl" : ""}>Trusted by many users from over 4 countries</h2>
            <p className={colorTheme === "primary" ? "text-primary_text text-xl w-3/5 m-auto" : ""}>Worldwide, Trusted, and Always Present. Our Growing Stats Speak for Themselves, Providing Real and Reliable Insights.</p>
          </header>
          <div className="grid grid-cols-3 gap-1 m-auto w-6/12 mt-12 items-center justify-items-center">
            <div className={colorTheme === "primary" ? "bg-primary_bg w-3/4 text-center p-7 rounded-md text-white font-bold" : ""}>
              <h2 className="text-3xl">99.9%</h2>
              <p className={colorTheme === "primary" ? "text-primary_text" : ""}>Uptime</p>
            </div>
            <div className={colorTheme === "primary" ? "bg-primary_bg w-3/4 text-center p-7 rounded-md text-white font-bold" : ""}>
              <h2 className="text-3xl">24/7</h2>
              <p className={colorTheme === "primary" ? "text-primary_text" : ""}>Up-to-date</p>
            </div>
            <div className={colorTheme === "primary" ? "bg-primary_bg w-3/4 text-center p-7 rounded-md text-white font-bold" : ""}>
              <h2 className="text-3xl">2024</h2>
              <p className={colorTheme === "primary" ? "text-primary_text" : ""}>Trusted since</p>
            </div>
            <div className={colorTheme === "primary" ? "bg-primary_bg w-3/4 text-center p-7 rounded-md text-white font-bold" : ""}>
              <h2 className="text-3xl">1</h2>
              <p className={colorTheme === "primary" ? "text-primary_text" : ""}>User</p>
            </div>
            <div className={colorTheme === "primary" ? "bg-primary_bg w-3/4 text-center p-7 rounded-md text-white font-bold" : ""}>
              <h2 className="text-3xl">0</h2>
              <p className={colorTheme === "primary" ? "text-primary_text" : ""}>Daily Usage</p>
            </div>
            <div className={colorTheme === "primary" ? "bg-primary_bg w-3/4 text-center p-7 rounded-md text-white font-bold" : ""}>
              <h2 className="text-3xl">67949</h2>
              <p className={colorTheme === "primary" ? "text-primary_text" : ""}>Over reviews</p>
            </div>
          </div>
        </div>
        <div className="mt-40 bg-cs-pattern opacity-90 bg-cover bg-center">
          <div className="text-white w-10/12 m-auto p-40 flex flex-col gap-10">
            <h2 className="font-bold text-6xl">CS2 & more API</h2>
            <p className="text-xl">Immerse yourself in the thrilling worlds of CS2, CSGO, Dota 2 and Rust. Access crucial player information, track item prices, and optimize your gaming experience. Join our community and enjoy free access to all of our Endpoints. Sign up now and level up today! </p>
          </div>
        </div>
        <div className="mt-40 flex flex-col gap-4 w-10/12 m-auto">
          <h2 className={colorTheme === "primary" ? "text-center text-primary font-bold text-3xl" : "text-center font-bold text-3xl"}>Frequently asked questions</h2>
          <div className="flex flex-col gap-2">
            <Accordion className={colorTheme === "primary" ? "accordion_light_theme" : ""}>
              <AccordionSummary
                expandIcon={<img src={IConGun} className="w-8"/>}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                How to check item data
              </AccordionSummary>
              <AccordionDetails>Bla bla bla</AccordionDetails>
            </Accordion>
            <Accordion className={colorTheme === "primary" ? "accordion_light_theme" : ""}>
              <AccordionSummary
                expandIcon={<img src={IConGun} className="w-8"/>}
                aria-controls="panel1-content"
                id="panel2-header"
              >
                How to send review
              </AccordionSummary>
              <AccordionDetails>Bla bla bla</AccordionDetails>
            </Accordion>
            <Accordion className={colorTheme === "primary" ? "accordion_light_theme" : ""}>
              <AccordionSummary
                expandIcon={<img src={IConGun} className="w-8"/>}
                aria-controls="panel1-content"
                id="panel3-header"
              >
                How check my inventory cost
              </AccordionSummary>
              <AccordionDetails>Bla bla bla</AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div className={colorTheme === "primary" ? "m-auto w-8/12 p-10 bg-primary mt-40 rounded-md flex flex-row gap-20 items-center" : "m-auto w-8/12 p-10 mt-40 rounded-md"}>
          <div className="flex flex-col gap-6">
            <h2 className={colorTheme === "primary" ? "text-white font-bold text-3xl" : "font-bold"}>Ready to dive in?</h2>
            <p className={colorTheme === "primary" ? "text-white text-md font-bold" : ""}> Sign in with your Steam account to get started. After signing in, you get an API key that you can use to access our Steam API. Its free and easy to use. What are you waiting for? </p>
            <CustomBtn text="Login" style="transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-primary_ac_text hover:text-white duration-300 text-primary_text w-4/12 rounded-md p-2"/>
          </div>
          <img src={Cs3Image} className="w-11/12 rounded-t-lg relative left-10 top-10"/>
        </div>
      </main>
      <FooterComponent />
      <AuthModal />
    </Fragment>
  );
}


export default App;
