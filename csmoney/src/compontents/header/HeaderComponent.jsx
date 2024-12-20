import { Component } from "react";
import Logo from "../../static/images/logo.png";
import { Link } from "react-router-dom";


class HeaderComponent extends Component {
    constructor(props) {
        super(props);

        this.colorTheme = localStorage.getItem("theme");
        this.pageNow = localStorage.getItem("page");
    }

    setLocaleStorageData(data) {
        localStorage.setItem("page", data);
    }

    render() {
        console.log(this.pageNow);
        const page = (
            <header className="w-11/12 m-auto mt-6">
                <nav className="flex flex-row list-none justify-left items-center gap-12">
                    <li>
                        <img src={Logo} alt="Logo" className="w-40 mx-10"/>
                    </li>
                    <li></li>
                    <li>
                        <Link to="/" id="main" className={this.colorTheme === "primary" ? this.pageNow === "main" ? "bg-primary_bg rounded-md text-primary_text p-3 border-none hover:bg-primary_bg hover:border-2 hover:rounded-md hover:p-3 hover:text-primary_text_hover" : "text-primary_text p-3 border-none hover:bg-primary_bg hover:border-2 hover:rounded-md hover:p-3 hover:text-primary_text_hover" : "text-secondary"}>Home</Link>
                    </li>
                    <li>
                        <Link to="/docs" id="docs" className={this.colorTheme === "primary"? this.pageNow === "docs" ? "bg-primary_bg rounded-md text-primary_text p-3 border-none hover:bg-primary_bg hover:border-2 hover:rounded-md hover:p-3 hover:text-primary_text_hover" : "text-primary_text p-3 border-none hover:bg-primary_bg hover:border-2 hover:rounded-md hover:p-3 hover:text-primary_text_hover" : "text-secondary"} onClick={(e) => {
                            this.setLocaleStorageData("docs");
                        }}>Docs</Link>
                    </li>
                    <li>
                        <Link to="/blogs" id="blogs" className={this.colorTheme === "primary"? this.pageNow === "blogs" ? "bg-primary_bg rounded-md text-primary_text p-3 border-none hover:bg-primary_bg hover:border-2 hover:rounded-md hover:p-3 hover:text-primary_text_hover" : "text-primary_text p-3 border-none hover:bg-primary_bg hover:border-2 hover:rounded-md hover:p-3 hover:text-primary_text_hover" : "text-secondary"} onClick={(e) => {
                            this.setLocaleStorageData("blogs");
                        }}>Blogs</Link>
                    </li>
                    <li>
                        <Link to="/items" id="items" className={this.colorTheme === "primary"? this.pageNow === "items" ? "bg-primary_bg rounded-md text-primary_text p-3 border-none hover:bg-primary_bg hover:border-2 hover:rounded-md hover:p-3 hover:text-primary_text_hover" : "text-primary_text p-3 border-none hover:bg-primary_bg hover:border-2 hover:rounded-md hover:p-3 hover:text-primary_text_hover" : "text-secondary"} onClick={(e) => {
                            this.setLocaleStorageData("items");
                        }}>Items</Link>
                    </li>
                    <li>
                        <Link to="/reviews" id="reviews" className={this.colorTheme === "primary"? this.pageNow === "reviews" ? "bg-primary_bg rounded-md text-primary_text p-3 border-none hover:bg-primary_bg hover:border-2 hover:rounded-md hover:p-3 hover:text-primary_text_hover" : "text-primary_text p-3 border-none hover:bg-primary_bg hover:border-2 hover:rounded-md hover:p-3 hover:text-primary_text_hover" : "text-secondary"} onClick={(e) => {
                            this.setLocaleStorageData("reviews");
                        }}>Reviews</Link>
                    </li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li>
                        <Link to="/profile" className={this.colorTheme === "primary"? "text-primary_text p-3 border-none hover:bg-primary_bg hover:border-2 hover:rounded-md hover:p-3 hover:text-primary_text_hover" : "text-secondary"}>Profile</Link>
                    </li>
                    <li className={this.colorTheme === "primary"? "text-primary_text" : "text-secondary"}>Theme</li>
                </nav>
            </header>
        );
        
        return page
    }
}

export default HeaderComponent;
