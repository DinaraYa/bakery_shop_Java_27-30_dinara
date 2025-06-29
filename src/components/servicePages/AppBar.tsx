import {useEffect} from "react";
import {auth} from "../firebase/firebase.ts"
import {useAppSelector} from "../../redux/hooks.ts";



const AppBar = () => {
    const {authUser} = useAppSelector(state => state.auth);

    useEffect(() => {
        const user = auth.currentUser;
        if (user !== null) {
            const displayName = user.displayName;
        }
    }, [])
    return (
        <div style={{display: "flex", justifyContent: "flex-end"}}>
                Name: {displayName}
        </div>
    );
};

export default AppBar;