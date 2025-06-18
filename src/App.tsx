import './App.css'
import {Route, Routes} from "react-router-dom";
import {Paths} from "./utils/paths.ts";
import Home from "./components/Home.tsx";
import Customers from "./components/Customers.tsx";
import Orders from "./components/Orders.tsx";
import ShoppingCart from "./components/ShoppingCart.tsx";
import Bread from "./components/Bread.tsx";
import Dairy from "./components/Dairy.tsx";
import Navigator from "./components/navigation/Navigator.tsx";
import {navItems, productsItems} from "./configurations/nav-config.ts";


function App() {
    return (
        <Routes>
            {/*<Route path={Paths.HOME} element={<Layout/>}>*/}
            <Route path={Paths.HOME} element={<Navigator items={navItems}/>}>
                <Route index element={<Home/>}/>
                <Route path={Paths.CUSTOMERS} element={<Customers/>}/>
                <Route path={Paths.ORDERS} element={<Orders/>}/>
                <Route path={Paths.CART} element={<ShoppingCart/>}/>
                {/*<Route path={Paths.PRODUCTS} element={<Products/>}/>*/}
                {/*<Route path={Paths.PRODUCTS} element={<ProductLayout/>}>*/}
                    <Route path={Paths.PRODUCTS} element={<Navigator items={productsItems} sub={'sub'}/>}>
                    <Route path={Paths.BREAD} element={<Bread/>}/>
                    <Route path={Paths.DAIRY} element={<Dairy/>}/>
                </Route>
        </Route>
        </Routes>
    )
}

export default App
