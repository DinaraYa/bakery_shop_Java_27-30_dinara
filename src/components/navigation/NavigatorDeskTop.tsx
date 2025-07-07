import type {RouteType} from "../../utils/shop-types.ts";
import {type FC, useState} from "react";
import {AppBar, Box, Tab, Tabs} from "@mui/material";
import {Link} from "react-router-dom";
import * as React from "react";
import {Outlet} from "react-router-dom";
import {useAppSelector} from "../../redux/hooks.ts";



type Props = {
    items: RouteType[],
    sub?: string
}

const NavigatorDeskTop: FC<Props> = ({items}) => {
    const [value, setValue] = useState(0);
    const {displayName, authUser} = useAppSelector(state => state.auth);
    const handleOnChange =
        (_event: React.SyntheticEvent, newValue: number) => {
            setValue(newValue);
        }
    return (
        <Box sx={{mt: '50px'}}>
            <AppBar sx={{backgroundColor: "lightgray"}}>
                <Tabs value={value} onChange={handleOnChange}>
                    {
                        items.map(item =>
                            <Tab key={item.title}
                                 component={Link} to={item.path} label={item.title}/>
                        )
                    }
                    <Box style={{ color: 'blue', fontWeight: 'bold', marginLeft: "auto" }}>
                        <Tab
                            key="user-info"
                            label={<span>
                            {displayName || authUser}</span>}
                            disabled
                        /></Box>
                </Tabs>
            </AppBar>
            <Outlet/>
        </Box>
    );
};

export default NavigatorDeskTop;