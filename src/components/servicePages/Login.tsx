import type {LoginData} from "../../utils/shop-types.ts";
import SignInForm from "../templates/SignInForm.tsx";
import {useAppDispatch} from "../../redux/hooks.ts";
import {loginAction} from "../../redux/slices/authSlice.ts";
import {login} from "../../firebase/firebaseAuthService.ts";
import {useNavigate} from "react-router-dom";


const Login = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    // const submitFn = (loginData: LoginData) => {
    //     // console.log(JSON.stringify(loginData))
    //     dispatch(loginAction(loginData.email));
    // }
    const loginWithFirebase = async (loginData: LoginData) => {
        try {
            const email = await login(loginData);
            dispatch(loginAction(email));
            navigate('/')
        } catch (e) {
            console.log(e); // Todo
        }
    }
    return (
        <div>
            <SignInForm submitFn={loginWithFirebase} />
        </div>
    );
};

export default Login;