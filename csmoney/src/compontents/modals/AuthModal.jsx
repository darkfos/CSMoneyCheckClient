import { Modal, TextField, InputLabel } from "@mui/material";
import { useState } from "react";
import AuthImage from "../../static/images/auth.png"
import CustomBtn from "../buttons/CustomButton";


function AuthModal(props) {

    const [modalOpen, setModal] = useState(true);
    const theme = localStorage.getItem("theme");

    let closeModal = (e) => {
        setModal(false);
    }

    return <Modal
        open={modalOpen}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        className="bg-primary m-auto absolute w-8/12 h-3/5 rounded-md"
    >
    <div className="flex flex-row gap-10 h-full">
        <div className="p-20 flex flex-col gap-5 w-8/12">
            <h2 className={theme === "primary" ? "text-white font-bold text-3xl text-center" : ""}>Authorization</h2>
            <TextField id="standard-basic" label="Email"/>
            <TextField 
                        id="password" 
                        label="Password" 
                        type="password"
                        variant="outlined" 
                    />
            <div className="flex flex-row gap-10 justify-center">
                <CustomBtn text="Auth" style={theme === "primary" ? "bg-white p-2 rounded-md w-4/12 text-primary_text" : ""}/>
                <CustomBtn text="Reg" style={theme === "primary" ? "bg-white p-2 rounded-md w-4/12 text-primary_text" : ""} />
            </div>
        </div>
        <img src={AuthImage} className="p-10 w-full rounded-3xl opacity-90" />
        <CustomBtn text="&#x2716;" style="absolute ml-4 mt-4 bg-white rounded-md p-2 hover:bg-primary_ac_text hover:delay-300 hover:duration-300" onclick={closeModal}></CustomBtn>
    </div>
    </Modal>
}


export default AuthModal;