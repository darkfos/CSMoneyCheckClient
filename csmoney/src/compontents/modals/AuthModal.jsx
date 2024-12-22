import { Modal, TextField } from "@mui/material";
import { useState } from "react";
import AuthImage from "../../static/images/logo.png";
import CustomBtn from "../buttons/CustomButton";
import { useDispatch } from "react-redux";
import { setModal } from "../../store/authSlice";
import UserBaseData from "../../service/dto/userDTO";
import authService from "../../service/AuthService";
import MuiAlert from '@mui/lab/Alert';


function AuthModal({open}) {

    const [modalOpen, setMod] = useState(open);
    const [password, setPassword] = useState(null);
    const [email, setEmail] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const dispatcher = useDispatch();
    const service = new authService();

    const theme = localStorage.getItem("theme");

    let closeModal = (e) => {
        setMod(false);
        dispatcher(setModal(false));
    }


    // Auth requests
    
    const registerReq = async () => {
        let dtoUserData = new UserBaseData();
        dtoUserData.email = email;
        dtoUserData.password = password;
        let req = await service.registerUser(dtoUserData);

        if (req === true) {
            setSuccessMessage(true);
        }
    }

    const authReq = async () => {
        let dtoUserData = new UserBaseData();
        dtoUserData.email = email;
        dtoUserData.password = password;

        let req = await service.authUser(dtoUserData);

        if (req) {
            closeModal(true);
        }
    }


    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} onClick={(e) => {
            setSuccessMessage(false);
        }}/>;
    }

    return <Modal
        open={modalOpen}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        className="bg-primary m-auto absolute w-8/12 h-3/5 rounded-md"
    >
    <div className="flex flex-row gap-10 h-full">
        <div className="p-20 flex flex-col gap-5 w-8/12 mt-20">
            <h2 className={theme === "primary" ? "text-white font-bold text-3xl text-center" : ""}>Welcome &#128075;</h2>
            <TextField id="standard-basic" label="Email" onChange={(e) => {
                setEmail(e.target.value);
            }}/>
            <TextField 
                        id="password" 
                        label="Password" 
                        type="password"
                        variant="outlined" 
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
            <div className="flex flex-row gap-10 justify-center">
                <CustomBtn text="Auth" style={theme === "primary" ? "bg-white p-2 rounded-md w-4/12 text-primary_text hover:bg-primary_ac_text hover:delay-300 hover:duration-300" : ""} onclick={authReq} />
                <CustomBtn text="Reg" style={theme === "primary" ? "bg-white p-2 rounded-md w-4/12 text-primary_text hover:bg-primary_ac_text hover:delay-300 hover:duration-300" : ""} onclick={registerReq} />
            </div>
            {
                successMessage ? <Alert severity="info">You was register!</Alert> : ""
            }
        </div>
        <img src={AuthImage} className="p-10 w-10/12 rounded-2xl opacity-90 transition hover:rounded-md hover:scale-105 hover:duration-300 hover:delay-300 ease-in-out" />
        <CustomBtn text="&#x2716;" style="absolute ml-4 mt-4 bg-white rounded-md p-2 hover:bg-primary_ac_text hover:delay-300 hover:duration-300" onclick={closeModal}></CustomBtn>
    </div>
    </Modal>
}


export default AuthModal;