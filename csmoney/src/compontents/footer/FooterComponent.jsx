import { Fragment } from "react";
import CustomBtn from "../buttons/CustomButton";
import { useState } from "react";


function FooterComponent() {

    const themeColor = localStorage.getItem("theme");
    const [cookieMessage, setCookieMessage] = useState(localStorage.getItem("isVisit"));

    const changeCookies = (e) => {
        localStorage.setItem("isVisit", true);
        setCookieMessage(localStorage.getItem("isVisit"));
    }

    return <Fragment>
            {cookieMessage ?
            ""
            :
            <div className={themeColor === "primary"? "w-11/12 m-auto flex flex-row items-center gap-10 bg-primary_ac_text p-2 rounded-md absolute mt-12 left-24" : "p-2 rounded-md mt-12 absolute left-24 w-11/12 m-auto flex flex-row items-center gap-10 bg-secondary_h_text"} id="cookieMessage">
                <p className={themeColor === "primary"? "text-white font-bold" : "text-white font-bold"}>Please confirm our politics for cookies</p>
                <CustomBtn text="Confirm" style={themeColor === "primary"? "p-3 bg-primary text-white font-bold rounded-md delay-300 duration-300 transition ease-in-out" : "p-3 bg-secondary_button_bg text-white font-bold rounded-md hover:bg-secondary_button_bg_hover delay-300 duration-300 transition ease-in-out"} onclick={changeCookies} />
            </div>
            }
            <footer className={themeColor === "primary" ? "bg-primary mt-40 p-10" : "bg-secondary_footer_bg mt-40 p-10"}>
                <div className="flex flex-row gap-72 w-10/12 m-auto">
                    <div>
                        <h2 className={themeColor === "primary" ? "text-white font-bold text-2xl": "text-secondary_text font-bold text-2xl"}>CSMONEY</h2>
                        <br />
                        <p className={themeColor === "primary" ? "text-primary_text font-bold text-md": "font-bold"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, numquam! Voluptatum eum fuga est nemo pariatur totam, amet fugit magni laboriosam minima aperiam distinctio, sint, praesentium id. Vel, fuga nostrum?</p>
                    </div>
                    <div>
                        <h2 className={themeColor === "primary" ? "text-white font-bold text-xl": "text-secondary_text font-bold text-xl"}>LINKS</h2>
                        <br />
                        <nav className="list-none flex flex-col gap-2">
                            <li>
                                <a href="" className={themeColor === "primary" ? "text-primary_text font-bold text-md": "font-bold text-md"}>Inventory</a>
                            </li>
                            <li>
                                <a href="" className={themeColor === "primary" ? "text-primary_text font-bold text-md": "font-bold text-md"}>Profile</a>
                            </li>
                            <li>
                                <a href="" className={themeColor === "primary" ? "text-primary_text font-bold text-md": "font-bold text-md"}>Item</a>
                            </li>
                        </nav>
                    </div>
                    <div>
                        <h2 className={themeColor === "primary" ? "text-white font-bold text-xl": "text-secondary_text font-bold text-xl"}>LEGAL</h2>
                        <br />
                        <nav className="list-none flex flex-col gap-2">
                            <li>
                                <a href="" className={themeColor === "primary" ? "" : "font-bold"}>Privacy Policy</a>
                            </li>
                            <li>
                                <a href="" className={themeColor === "primary" ? "" : "font-bold"}>Terms of Service</a>
                            </li>
                            <li>
                                <a href="" className={themeColor === "primary" ? "" : "font-bold"}>Cookies Policy</a>
                            </li>
                        </nav>
                    </div>
                </div>
                <div className="w-10/12 m-auto">
                    <br />
                    <hr />
                    <br />
                    <p className={themeColor === "primary" ? "text-primary_text font-bold text-xl": "font-bold text-xl"}>
                        © 2024 steamwebapi.com. All rights reserved. Not affiliated with Valve, Steam, or other services.
                        This site offers developer-focused free and paid Steam APIs.
                        Not affiliated with Valve or the official Steam Web API or Steamapis.
                    </p>
                </div>
            </footer>
        </Fragment>
}

export default FooterComponent;