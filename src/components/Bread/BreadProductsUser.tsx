import {useAppSelector} from "../../redux/hooks.ts";
import {Card,CardActions, CardContent, CardMedia, Grid} from "@mui/material";
import {ProductType} from "../../utils/shop-types.ts";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import {addProductUnitToCart, removeProductUnitFromCart} from "../../firebase/firebaseCartService.ts";



const BreadProductsUser = () => {
    const {currProds} = useAppSelector(state => state.products);
    const navigate = useNavigate();
    const {authUser} = useAppSelector(state => state.auth);
    const {cartProducts} = useAppSelector(state => state.cart);

    const getCount =  (currProduct: ProductType): number => {
        const product = cartProducts.find(prod => prod.cartProdId === currProduct.id )
        return product?.count || 0;
    }

    return (
        <Grid container>
            {currProds.map((item: ProductType) =>
                <Grid key={item.id!} size={{xs: 12, sm: 6, md: 3}}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={"/images/"+item.image}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {item.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small"
                            onClick={async ()=> {
                                if (!authUser) navigate("/login")
                                await addProductUnitToCart(`${authUser!}_collection`, item.id!)
                            }}
                            >+</Button>
                            <Typography>{getCount(item)}</Typography>
                            <Button size="small"
                            onClick={async () => {
                                if (!authUser) navigate("/register")
                                await removeProductUnitFromCart(`${authUser!}_collection`, item.id!)
                            }}>-</Button>
                        </CardActions>
                    </Card>
                </Grid>
            )}
        </Grid>
    );
};

export default BreadProductsUser;