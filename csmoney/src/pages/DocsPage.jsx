import HeaderComponent from "../compontents/header/HeaderComponent";
import FooterComponent from "../compontents/footer/FooterComponent";
import { Component, Fragment } from "react";


class DocsPage extends Component {
    constructor (props) {
        super(props);

        this.theme = localStorage.getItem("theme");
    }


    render () {

        localStorage.setItem("page", "docs");

        return <Fragment>
            <HeaderComponent />
            <div className="mt-32 flex flex-row">
                <div className="pl-10 list-none flex flex-col gap-10 w-1/5">
                    <h3 className={this.theme === "primary" ? "text-primary font-bold" : "text-secondary_h_text font-bold"}>All documentations</h3>
                    <nav className="flex flex-col gap-4">
                        <li>
                            <a href="#nav1" className={this.theme === "primary" ? "text-primary_text hover:text-primary hover:font-bold delay-300 duration-300" : "text-secondary_text hover:text-secondary_h_text hover:font-bold delay-300 duration-300"}>What is CSMoney</a>
                        </li>
                        <li>
                            <a href="#nav2" className={this.theme === "primary" ? "text-primary_text hover:text-primary hover:font-bold delay-300 duration-300" : "text-secondary_text hover:text-secondary_h_text hover:font-bold delay-300 duration-300"}>Items</a>
                        </li>
                        <li>
                            <a href="#nav3" className={this.theme === "primary" ? "text-primary_text hover:text-primary hover:font-bold delay-300 duration-300" : "text-secondary_text hover:text-secondary_h_text hover:font-bold delay-300 duration-300"}>Inventory</a>
                        </li>
                        <li>
                            <a href="#nav4" className={this.theme === "primary" ? "text-primary_text hover:text-primary hover:font-bold delay-300 duration-300" : "text-secondary_text hover:text-secondary_h_text hover:font-bold delay-300 duration-300"}>Reviews</a>
                        </li>
                        <li>
                            <a href="#nav5" className={this.theme === "primary" ? "text-primary_text hover:text-primary hover:font-bold delay-300 duration-300" : "text-secondary_text hover:text-secondary_h_text hover:font-bold delay-300 duration-300"}>Favourites</a>
                        </li>
                        <li>
                            <a href="#nav6" className={this.theme === "primary" ? "text-primary_text hover:text-primary hover:font-bold delay-300 duration-300" : "text-secondary_text hover:text-secondary_h_text hover:font-bold delay-300 duration-300"}>Blogs</a>
                        </li>
                        <li>
                            <a href="#nav7" className={this.theme === "primary" ? "text-primary_text hover:text-primary hover:font-bold delay-300 duration-300" : "text-secondary_text hover:text-secondary_h_text hover:font-bold delay-300 duration-300"}>Supported languages</a>
                        </li>
                    </nav>
                </div>
                <div className="border-l-4 pl-10 w-full pr-10">
                    <h2 className={this.theme === "primary" ? "font-bold text-primary text-3xl" : "font-bold text-secondary_h_text text-3xl"}>CSMoney Documentation: Getting started</h2>
                    <br />
                    <h4 className={this.theme === "primary" ? "rounded-md bg-primary p-5 text-white font-bold w-100" : "rounded-md bg-secondary_h_text p-5 text-white font-bold w-100"} id="nav1">What is CSMoney?</h4>
                    <br />
                    <p className={this.theme === "primary" ? "text-primary_text" : "text-secondary_text"}>CSMoney is a free web app when help many user!</p>
                    <br />
                    <h4 className={this.theme === "primary" ? "rounded-md bg-primary p-5 text-white font-bold w-100" : "rounded-md bg-secondary_h_text p-5 text-white font-bold w-100"} id="nav2">Items</h4>
                    <br />
                    <p className={this.theme === "primary" ? "text-primary_text" : "text-secondary_text"}>You can see all information about your skin item from 3 platforms: Steam, CSMoney, CSMarket!</p>
                    <br />
                    <h4 className={this.theme === "primary" ? "rounded-md bg-primary p-5 text-white font-bold w-100" : "rounded-md bg-secondary_h_text p-5 text-white font-bold w-100"} id="nav3">Inventory</h4>
                    <br />
                    <p className={this.theme === "primary" ? "text-primary_text" : "text-secondary_text"}>You can see price your steam cs2 inventory!</p>
                    <br />
                    <h4 className={this.theme === "primary" ? "rounded-md bg-primary p-5 text-white font-bold w-100" : "rounded-md bg-secondary_h_text p-5 text-white font-bold w-100"} id="nav4">Reviews</h4>
                    <br />
                    <p className={this.theme === "primary" ? "text-primary_text" : "text-secondary_text"}>You can see all reviews from other users!</p>
                    <br />
                    <h4 className={this.theme === "primary" ? "rounded-md bg-primary p-5 text-white font-bold w-100" : "rounded-md bg-secondary_h_text p-5 text-white font-bold w-100"} id="nav5">Favourites</h4>
                    <br />
                    <p className={this.theme === "primary" ? "text-primary_text" : "text-secondary_text"}>You can see your favourites notes in this web application!</p>
                    <br />
                    <h4 className={this.theme === "primary" ? "rounded-md bg-primary p-5 text-white font-bold w-100" : "rounded-md bg-secondary_h_text p-5 text-white font-bold w-100"} id="nav6">Blogs</h4>
                    <br />
                    <p className={this.theme === "primary" ? "text-primary_text" : "text-secondary_text"}>Our application has blogs! You can see other news!</p>
                    <br />
                    <h4 className={this.theme === "primary" ? "rounded-md bg-primary p-5 text-white font-bold w-100" : "rounded-md bg-secondary_h_text p-5 text-white font-bold w-100"} id="nav7">Supported languages</h4>
                    <br />
                    <p className={this.theme === "primary" ? "text-primary_text" : "text-secondary_text"}>Languages who supports our application</p>
                    <br />
                    <table className="w-full">
                        <th className="grid grid-cols-2">
                            <td className={this.theme === "primary" ? "text-primary text-left" : "text-secondary_h_text text-left"}>Language original name</td>
                            <td className={this.theme === "primary" ? "text-primary text-right" : "text-secondary_h_text text-right"}>Supports</td>
                        </th>
                        <tr className="h-12">
                            <td className={this.theme === "primary" ? "text-primary_text border-b-2" : "text-secondary_text border-b-2"}>English</td>
                            <td className={this.theme === "primary" ? "text-primary_text border-b-2" : "text-secondary_text border-b-2"}>Yes</td>
                        </tr>
                        <tr className="h-12">
                            <td className={this.theme === "primary" ? "text-primary_text border-b-2" : "text-secondary_text border-b-2"}>Russian</td>
                            <td className={this.theme === "primary" ? "text-primary_text border-b-2" : "text-secondary_text border-b-2"}>Yes</td>
                        </tr>
                    </table>
                </div>
            </div>
            <FooterComponent />
        </Fragment>
    }
}


export default DocsPage;