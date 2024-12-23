import { Component, Fragment } from "react";
import HeaderComponent from "../compontents/header/HeaderComponent";
import FooterComponent from "../compontents/footer/FooterComponent";
import IconWeapon from "../static/images/machine-gun_10846977.png";
import CustomBtn from "../compontents/buttons/CustomButton";


class ReviewsPage extends Component {
    constructor(props) {
        super(props);

        this.theme = localStorage.getItem("theme");
    }

    render() {

        localStorage.setItem("page", "reviews");

        return <Fragment>
            <HeaderComponent />
            <div className="mt-40 w-10/12 m-auto">
                <h2 className={this.theme === "primary" ? "text-primary text-3xl font-bold text-center" : "text-secondary_h_text text-3xl font-bold text-center"}>Our reviews</h2>
                <div className="w-10/12 m-auto mt-20 grid grid-cols-* justify-center gap-10">
                    <div className={this.theme === "primary" ? "bg-primary_bg rounded-md w-12/12 p-4" : "bg-secondary_h_text rounded-md w-12/12 p-4"}>
                        <img src={IconWeapon} className="w-1/12 m-auto relative -mt-8" />
                        <h4><span className={this.theme === "primary" ? "bg-white rounded-md p-1 font-bold text-primary_text" : "bg-white rounded-md p-1 font-bold text-primary_text"}>#UserName</span>  darkfos82</h4>
                        <br />
                        <span className={this.theme === "primary" ? "bg-white rounded-md p-1 font-bold text-primary_text" : "bg-white rounded-md p-1 font-bold text-primary_text"}>#Text</span>
                        <br />
                        <br />
                        <p>Bla bla</p>
                    </div>
                    <CustomBtn text="Other" style={this.theme === "primary" ? "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-primary_ac_text hover:text-white duration-300 bg-primary w-8/12 m-auto rounded-md text-white p-2" : "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-primary_ac_text hover:text-white duration-300 bg-secondary_h_text w-8/12 m-auto rounded-md text-white p-2"}/>
                </div>
            </div>
            <FooterComponent />
        </Fragment>
    }
}


export default ReviewsPage;