import {useAppSelector} from "../../redux/hooks.ts";
import BreadProductsUser from "./BreadProductsUser.tsx";
import BreadProductAdmin from "./BreadProductAdmin.tsx";


const Bread = () => {
    const {authUser} = useAppSelector(state => state.auth)
    if (authUser && authUser.includes('admin')) {
        return <BreadProductAdmin/>
    }
    return <BreadProductsUser/>
};

export default Bread;