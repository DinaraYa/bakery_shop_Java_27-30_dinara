import {useAppDispatch} from "../../redux/hooks.ts";
import type {RegisterData} from "../../utils/shop-types.ts";
import {registerAction} from "../../redux/slices/registerSlice.ts";
import SignUpForm from "../templates/SignUpForm.tsx";


const Register = () => {
    const dispatch = useAppDispatch();
    const submitRegister = (registerData: RegisterData) => {
        dispatch(registerAction(registerData));
    }
    return (
        <div>
            <SignUpForm submitRegister={submitRegister}/>
        </div>
    );
};

export default Register;