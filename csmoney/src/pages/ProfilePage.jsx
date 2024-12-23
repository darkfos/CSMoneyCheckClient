import { Component, Fragment } from "react";
import HeaderComponent from "../compontents/header/HeaderComponent";
import FooterComponent from "../compontents/footer/FooterComponent";
import UsetAvatar from "../static/images/standart_us_avatar.jpg";
import CustomBtn from "../compontents/buttons/CustomButton";
import LockIcon from "@mui/icons-material/Lock";
import GradeIcon from "@mui/icons-material/Grade";
import SystemSettingsIcon from "@mui/icons-material/SettingsSuggest";
import MuiAlert from '@mui/lab/Alert';
import "../static/styles/index.css";


class ProfilePage extends Component {
    constructor (props) {
        super(props);
        
        this.theme = localStorage.getItem("theme");
        this.state = {
            menuUser: null
        }
        this.switchUserMenu = this.switchUserMenu.bind(this);
    }

    render() {
        return <Fragment>
            <HeaderComponent />
            <div className="mt-40 w-10/12 m-auto flex flex-col gap-20">
                <header className="flex flex-row gap-20 items-center">
                    <img src={UsetAvatar} className="w-1/8 rounded-md" />
                    <h3 className={this.theme === "primary" ? "text-primary font-bold text-2xl" : "text-secondary_text font-bold text-2xl"}>User name</h3>
                </header>
                <div className="">
                    <h2 className={this.theme === "primary" ? "text-primary font-bold text-3xl" : "text-secondary_h_text font-bold text-3xl"}>My information</h2>
                    <br />
                    <div className="flex flex-row flex-wrap gap-5">
                        <div className={this.theme === "primary" ? "flex flex-col gap-5 justify-left items-left p-5 bg-primary rounded-md text-white w-1/4" : "flex flex-col gap-5 justify-left items-left p-5 bg-secondary_h_text rounded-md text-white w-1/4"}>
                            <h3 className={this.theme === "primary" ? "text-primary_text font-bold" : ""}>Used operation</h3>
                            <p>0</p>
                        </div>
                        <div className={this.theme === "primary" ? "flex flex-col gap-5 justify-left items-left p-5 bg-primary rounded-md text-white w-1/4" : "flex flex-col gap-5 justify-left items-left p-5 bg-secondary_h_text rounded-md text-white w-1/4"}>
                            <h3 className={this.theme === "primary" ? "text-primary_text font-bold" : ""}>Favourites</h3>
                            <p>0</p>
                        </div>
                        <div className={this.theme === "primary" ? "flex flex-col gap-5 justify-left items-left p-5 bg-primary rounded-md text-white w-1/4" : "flex flex-col gap-5 justify-left items-left p-5 bg-secondary_h_text rounded-md text-white w-1/4"}>
                            <h3 className={this.theme === "primary" ? "text-primary_text font-bold" : ""}>Date registration</h3>
                            <p>2024-12-12</p>
                        </div>
                        <div className={this.theme === "primary" ? "flex flex-col gap-5 justify-left items-left p-5 bg-primary rounded-md text-white w-1/4" : "flex flex-col gap-5 justify-left items-left p-5 bg-secondary_h_text rounded-md text-white w-1/4"}>
                            <h3 className={this.theme === "primary" ? "text-primary_text font-bold" : ""}>Email</h3>
                            <p>bla bla bla</p>
                        </div>
                    </div>
                    <br />
                    <h2 className={this.theme === "primary" ? "text-primary font-bold text-3xl" : "text-secondary_h_text font-bold text-3xl"}>Other operation</h2>
                    <br />
                    <div className={this.theme === "primary" ? "flex flex-row gap-20 bg-primary rounded-md w-4/6" : "flex flex-row gap-20 bg-secondary_h_text rounded-md w-4/6"} >
                        <div className="p-4 text-primary_text font-bold hover:text-primary_text_hover hover:delay-300 hover:duration-300 cursor-pointer" onClick={(e) => {
                            this.setState({ menuUser: "favourites"})
                        }}>Favourites</div>
                        <div className="p-4 text-primary_text font-bold hover:text-primary_text_hover hover:delay-300 hover:duration-300 cursor-pointer" onClick={(e) => {
                            this.setState({ menuUser: "system"})
                        }}>System</div>
                        <div className="p-4 text-primary_text font-bold hover:text-primary_text_hover hover:delay-300 hover:duration-300 cursor-pointer" onClick={(e) => {
                            this.setState({ menuUser: "other"})
                        }}>Other</div>
                    </div>
                    <br />
                    {
                        this.switchUserMenu()
                    }
                </div>
            </div>
            <FooterComponent />
        </Fragment>
    }

    switchUserMenu() {
        switch (this.state.menuUser) {
            case "favourites": {
                return <div>
                    <h2 className={this.theme === "primary" ? "text-primary font-bold text-3xl" : "text-secondary_h_text font-bold text-3xl"}>Favourite options</h2>
                    <h6 className={this.theme === "primary" ? "text-primary_text font-bold" : "text-secondary_text font-bold"}>You can see all your favourites...</h6>
                    <br />
                    <CustomBtn text="My favourites" style={this.theme === "primary" ? "transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-primary_ac_text hover:text-white duration-300 bg-primary p-4 rounded-md text-primary_text_hover" : "transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-primary_ac_text hover:text-white duration-300 bg-secondary_h_text p-4 rounded-md text-primary_text_hover"} onclick={(e) => {
                        window.location.href = "/favourites";
                    }}/>
                </div>
            }
            case "system": {
                return <div>
                    <h2 className={this.theme === "primary" ? "text-primary font-bold text-3xl" : "text-secondary_h_text font-bold text-3xl"}>System options</h2>
                    <h6 className={this.theme === "primary" ? "text-primary_text font-bold" : "text-secondary_text font-bold"}>You can change your password or username :]</h6>
                    <br />
                    <div className="grid grid-cols-4 gap-40">
                        <CustomBtn text="Change password" style={this.theme === "primary" ? "transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-primary_ac_text hover:text-white duration-300 bg-primary p-4 rounded-md text-primary_text_hover" : "transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-primary_ac_text hover:text-white duration-300 bg-secondary_h_text p-4 rounded-md text-primary_text_hover"} onclick={(e) => {
                        }}/>
                        <CustomBtn text="Change username" style={this.theme === "primary" ? "transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-primary_ac_text hover:text-white duration-300 bg-primary p-4 rounded-md text-primary_text_hover" : "transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-primary_ac_text hover:text-white duration-300 bg-secondary_h_text p-4 rounded-md text-primary_text_hover"} onclick={(e) => {
                        }}/>
                    </div>
                </div>
            }
            case "other": {
                function Alert(props) {
                    return <MuiAlert elevation={6} variant="filled" {...props} className="w-4/6"></MuiAlert>
                }

                return <div>
                    <h2 className={this.theme === "primary" ? "text-primary font-bold text-3xl" : "text-secondary_h_text font-bold text-3xl"}>Other options</h2>
                    <br />
                    <Alert severity="warning" >You can delete your account!</Alert>
                    <br />
                    <div className="flex flex-row gap-10">
                        <CustomBtn text="Delete" style={this.theme === "primary" ? "transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-primary_ac_text hover:text-white duration-300 bg-primary p-4 rounded-md text-primary_text_hover" : "transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-primary_ac_text hover:text-white duration-300 bg-secondary_h_text p-4 rounded-md text-primary_text_hover"} onclick={(e) => {
                        }}/>
                        <CustomBtn text="Leave" style={this.theme === "primary" ? "transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-primary_ac_text hover:text-white duration-300 bg-primary p-4 rounded-md text-primary_text_hover" : "transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-primary_ac_text hover:text-white duration-300 bg-secondary_h_text p-4 rounded-md text-primary_text_hover"} onclick={(e) => {
                            document.cookie = 'access_token=; Path=/; Domain=localhost; Max-Age=-1;';
                            document.cookie = 'refresh_token=; Path=/; Domain=localhost; Max-Age=-1;';
                            window.location.href = "/";
                        }} />
                    </div>
                </div>
            }
        }
    }
}


export default ProfilePage;