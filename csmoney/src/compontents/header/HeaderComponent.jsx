import { Component } from "react";
import Logo from "../../static/images/logo.png";
import { Link } from "react-router-dom";


class HeaderComponent extends Component {
    constructor(props) {
        super(props);

        this.colorTheme = localStorage.getItem("theme");
    }

    render() {
        return (
            <header className="w-11/12 m-auto mt-6">
                <nav className="flex flex-row list-none justify-left items-center gap-12">
                    <li>
                        <img src={Logo} alt="Logo" className="w-40 mx-10"/>
                    </li>
                    <li></li>
                    <li>
                        <Link to="/" className={this.colorTheme === "primary"? "text-primary_text p-3 border-none hover:bg-primary_bg hover:border-2 hover:rounded-md hover:p-3 hover:text-primary_text_hover" : "text-secondary"}>Home</Link>
                    </li>
                    <li>
                        <Link to="/docs" className={this.colorTheme === "primary"? "text-primary_text p-3 border-none hover:bg-primary_bg hover:border-2 hover:rounded-md hover:p-3 hover:text-primary_text_hover" : "text-secondary"}>Docs</Link>
                    </li>
                    <li>
                        <Link to="/blogs" className={this.colorTheme === "primary"? "text-primary_text p-3 border-none hover:bg-primary_bg hover:border-2 hover:rounded-md hover:p-3 hover:text-primary_text_hover" : "text-secondary"}>Blogs</Link>
                    </li>
                    <li>
                        <Link to="/profile" className={this.colorTheme === "primary"? "text-primary_text p-3 border-none hover:bg-primary_bg hover:border-2 hover:rounded-md hover:p-3 hover:text-primary_text_hover" : "text-secondary"}>Profile</Link>
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
    }
}

export default HeaderComponent;
