import {ChangeEvent, FC, FormEvent, useState} from "react";
import {Box, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {ProductType} from "../../utils/shop-types.ts";

type Props = {
    submitFn: (product:ProductType) => void
}
const AddProductForm: FC<Props> = ({submitFn}) => {
    const  initialProduct: ProductType ={
        category: "cake", cost: 10, image: "#", title: "My cake", unit: "ea"
    }
    const [tempProduct, setTempProduct] = useState(initialProduct);
    function submitHandler(e: FormEvent<HTMLFormElement> ) {
        e.preventDefault();
        submitFn(tempProduct)
    }

    function imageHandler(e: ChangeEvent<HTMLInputElement>) {
        setTempProduct({...tempProduct, image: e. target.value});
    }

    function handleUnits(e: SelectChangeEvent) {
        setTempProduct({...tempProduct, unit: e.target.value })
    }

    function resetHandler() {
        setTempProduct(initialProduct)
    }

    return (
        <Box sx={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            position: "fixed",
            top: "0",
            left: "0",

        }}>
            <Box sx={{ width: "30%",
                minHeight: "50%",
                margin: "100px auto",
                backgroundColor: "whitesmoke",
                padding: "50px",
                borderRadius: "1rem"}}>
                <form onSubmit={submitHandler} onReset={resetHandler}>
                    <TextField label={'image URL'} variant={"outlined"} fullWidth={true}
                               onChange={imageHandler}/>

                    <Box>
                        <img src={tempProduct.image} alt="" width={"100px"}/>
                    </Box>

                    <InputLabel id="demo-simple-select-label">Unit</InputLabel>
                    <Select
                        labelId="units"
                        id="units"
                        value={tempProduct.unit}
                        label="Age"
                        onChange={handleUnits}
                    >
                        <MenuItem value={'ea'}>EA</MenuItem>
                        <MenuItem value={'piece'}>Piece</MenuItem>
                        <MenuItem value={'pack'}>Pack</MenuItem>
                    </Select>

                    <Box>
                        <Button type={'submit'}>Submit</Button>
                        <Button type={'reset'}>Reset</Button>
                    </Box>
                </form>
            </Box>
        </Box>
    );
};

export default AddProductForm;