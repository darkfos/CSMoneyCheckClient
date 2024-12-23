import { Component, useState } from "react";
import Logo from "../../static/images/logo.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setModal, getModal, setAccessToken, setRefreshToken } from "../../store/authSlice";
import AuthModal from "../modals/AuthModal";

import NightThemeIcon from "../../static/images/night_8543282.png";
import LightThemeIcon from "../../static/images/contrast_16992013.png";


class HeaderComponent extends Component {
    constructor(props) {
        super(props);

        this.colorTheme = localStorage.getItem("theme");
        this.pageNow = localStorage.getItem("page");
        this.isOpenModal = false;
        this.setTokens = this.setTokens.bind(this);

    }

    setTokens() {
        try {
            
            var access_token = document.cookie.split(" ")[0].split("=")[1].split(";")[0];
            var refresh_token = document.cookie.split(" ")[1].split("=")[1].split(";")[0];
            
            this.props.setAccessToken(access_token);
            this.props.setRefreshToken(refresh_token);

        } catch {
            access_token = false;
            refresh_token = false;
        }
    }

    setLocaleStorageData(data) {
        localStorage.setItem("page", data);
    }

    render() {
        
        this.setTokens();

        const {auth} = this.props;
        
        switch (this.colorTheme) {
            case "primary":
                document.body.className = "bg-white";
                break;
            case "secondary": 
                document.body.className = "bg-secondary";
                break;
        }

        const page = (
            <header className="w-11/12 m-auto mt-6">
                <nav className="flex flex-row list-none justify-left items-center gap-12">
                    <li>
                        <img src={Logo} alt="Logo" className="w-40 mx-10"/>
                    </li>
                    <li></li>
                    <li>
                        <Link to="/" id="main" className={this.colorTheme === "primary" ? this.pageNow === "main" ? "bg-primary_bg rounded-md text-primary_text p-3 border-none hover:bg-primary_bg hover:border-2 hover:rounded-md hover:p-3 hover:text-primary_text_hover" : "text-primary_text p-3 border-none hover:bg-primary_bg hover:border-2 hover:rounded-md hover:p-3 hover:text-primary_text_hover" : "text-secondary_text text-secondary rounded-md p-3 font-bold hover:bg-secondary_h_text hover:text-primary_text hover:font-bold delay-300 duration-300 transition ease-in-out"} onClick={(e) => {
                            this.setLocaleStorageData("main");
                        }}>Home</Link>
                    </li>
                    <li>
                        <Link to="/docs" id="docs" className={this.colorTheme === "primary"? this.pageNow === "docs" ? "bg-primary_bg rounded-md text-primary_text p-3 border-none hover:bg-primary_bg hover:border-2 hover:rounded-md hover:p-3 hover:text-primary_text_hover" : "text-primary_text p-3 border-none hover:bg-primary_bg hover:border-2 hover:rounded-md hover:p-3 hover:text-primary_text_hover" : "text-secondary_text text-secondary rounded-md p-3 font-bold hover:bg-secondary_h_text hover:text-primary_text hover:font-bold delay-300 duration-300 transition ease-in-out"} onClick={(e) => {
                            this.setLocaleStorageData("docs");
                        }}>Docs</Link>
                    </li>
                    <li>
                        <Link to="/blogs" id="blogs" className={this.colorTheme === "primary"? this.pageNow === "blogs" ? "bg-primary_bg rounded-md text-primary_text p-3 border-none hover:bg-primary_bg hover:border-2 hover:rounded-md hover:p-3 hover:text-primary_text_hover" : "text-primary_text p-3 border-none hover:bg-primary_bg hover:border-2 hover:rounded-md hover:p-3 hover:text-primary_text_hover" : "text-secondary_text text-secondary rounded-md p-3 font-bold hover:bg-secondary_h_text hover:text-primary_text hover:font-bold delay-300 duration-300 transition ease-in-out"} onClick={(e) => {
                            this.setLocaleStorageData("blogs");
                        }}>Blogs</Link>
                    </li>
                    <li>
                        <Link to="/items" id="items" className={this.colorTheme === "primary"? this.pageNow === "items" ? "bg-primary_bg rounded-md text-primary_text p-3 border-none hover:bg-primary_bg hover:border-2 hover:rounded-md hover:p-3 hover:text-primary_text_hover" : "text-primary_text p-3 border-none hover:bg-primary_bg hover:border-2 hover:rounded-md hover:p-3 hover:text-primary_text_hover" : "text-secondary_text text-secondary rounded-md p-3 font-bold hover:bg-secondary_h_text hover:text-primary_text hover:font-bold delay-300 duration-300 transition ease-in-out"} onClick={(e) => {
                            this.setLocaleStorageData("items");
                        }}>Items</Link>
                    </li>
                    <li>
                        <Link to="/reviews" id="reviews" className={this.colorTheme === "primary"? this.pageNow === "reviews" ? "bg-primary_bg rounded-md text-primary_text p-3 border-none hover:bg-primary_bg hover:border-2 hover:rounded-md hover:p-3 hover:text-primary_text_hover" : "text-primary_text p-3 border-none hover:bg-primary_bg hover:border-2 hover:rounded-md hover:p-3 hover:text-primary_text_hover" : "text-secondary_text text-secondary rounded-md p-3 font-bold hover:bg-secondary_h_text hover:text-primary_text hover:font-bold delay-300 duration-300 transition ease-in-out"} onClick={(e) => {
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
                    {auth["Access-Token"] ? 
                    <li>
                        <Link to="/profile" className={this.colorTheme === "primary"? "text-primary_text p-3 border-none hover:bg-primary_bg hover:border-2 hover:rounded-md hover:p-3 hover:text-primary_text_hover" : "text-secondary_text text-secondary rounded-md p-3 font-bold hover:bg-secondary_h_text hover:text-primary_text hover:font-bold delay-300 duration-300 transition ease-in-out"}>Profile</Link>
                    </li>
                    : 
                    <li>
                        <Link to="#" className={this.colorTheme === "primary"? "text-primary_text p-3 border-none hover:bg-primary_bg hover:border-2 hover:rounded-md hover:p-3 hover:text-primary_text_hover" : "text-secondary_text text-secondary rounded-md p-3 font-bold hover:bg-secondary_h_text hover:text-primary_text hover:font-bold delay-300 duration-300 transition ease-in-out"} onClick={(e) => {
                            this.isOpenModal = !this.isOpenModal;
                            this.props.setModal(this.isOpenModal);
                        }}>Authorization</Link>
                    </li>
                    }
                    <li>
                        {this.colorTheme === "primary" ? <img src={NightThemeIcon} className="w-1/4 hover:scale-125 duration-300 delay-300" onClick={(e) => {
                            localStorage.setItem("theme", "secondary");
                            window.location.reload();
                        }}/> : <img src={LightThemeIcon} className="w-1/4 hover:scale-125 duration-300 delay-300" onClick={(e) => {
                            localStorage.setItem("theme", "primary");
                            window.location.reload();
                        }}/>}
                    </li>
                </nav>
                {auth.Modal && <AuthModal open={auth.Modal} />}
            </header>
        );
        
        return page
    }
}


const mapStateToProps = (state) => ({
    auth: state.auth,
});

const mapDisptachToProps = {
    setModal, getModal, setAccessToken, setRefreshToken
};


export default connect(mapStateToProps, mapDisptachToProps)(HeaderComponent);
