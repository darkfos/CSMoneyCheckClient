import { Fragment, Component } from "react";
import HeaderComponent from "../compontents/header/HeaderComponent";
import FooterComponent from "../compontents/footer/FooterComponent";
import { TextField, MenuItem } from "@mui/material";
import CustomBtn from "../compontents/buttons/CustomButton";


class ItemsPage extends Component {
    constructor(props) {
        super(props);

        this.theme = localStorage.getItem("theme");
        this.markets = [
            {
                "value": "CSMarket",
                "label": "csmarket" 
            },
            {
                "value": "CSMoney",
                "label": "csmoney"
            },
            {
                "value": "Steam",
                "label": "steammarket"
            }
        ];

        localStorage.setItem("market", this.markets[0].value);

        this.state = {
            marketNow: localStorage.getItem("market")
        };
    }

    render() {
        localStorage.setItem("page", "items");
        return <Fragment>
            <HeaderComponent />
            <div className="mt-40 w-11/12 m-auto">
                <h2 className={this.theme === "primary" ? "text-primary font-bold text-3xl text-center" : ""}>Check item data</h2>
                <br />
                <br />
                <div className="w-8/12 m-auto flex flex-row justify-center gap-5">
                    <TextField
                        id="standard-select-currency"
                        select
                        label="Select"
                        value={this.state.marketNow}
                        onChange={(e) => {
                            this.setState({marketNow: e.target.value}, () => {
                                localStorage.setItem("market", e.target.value);
                            });
                        }}
                        helperText="Please select your market"
                        className="w-3/12 m-auto"
                        >
                        {this.markets.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField id="standard-basic" label="Item name" className="w-4/12"></TextField>
                    <CustomBtn text="Find" style={this.theme === "primary" ? "bg-primary rounded-md h-3/4 p-4 w-1/4 text-white" : ""}/>
                </div>
            </div>
            <FooterComponent />
        </Fragment>
    }
}


export default ItemsPage;