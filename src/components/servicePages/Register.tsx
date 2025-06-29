// import {useAppDispatch} from "../../redux/hooks.ts";
import type {RegisterData} from "../../utils/shop-types.ts";
import SignUpForm from "../templates/SignUpForm.tsx";
import {registerWithEmailAndPassword} from "../../firebase/firebaseAuthService.ts";
import {useNavigate} from "react-router-dom";


const Register = () => {
    const navigate = useNavigate();
    // const submitRegister = (data: RegisterData) => {
    //     console.log(JSON.stringify(data));
    // }
    const signUpWithEmail  = async (data: RegisterData) => {
        const userEmailPath: RegisterData = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password
        }
        try {
           await registerWithEmailAndPassword(userEmailPath);
           navigate("/login");
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <SignUpForm submitFn={signUpWithEmail}/>
        </div>
    );
};

export default Register;