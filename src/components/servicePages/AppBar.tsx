import {useAppSelector} from "../../redux/hooks.ts";

const AppBar = () => {
    const user = useAppSelector(state => state.auth);
    return (
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            {user.displayName || user.authUser || 'Guest'}
        </div>
    );
};

export default AppBar;