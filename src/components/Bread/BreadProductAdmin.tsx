import {useAppSelector} from "../../redux/hooks.ts";
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import {Avatar, Box} from "@mui/material";



const BreadProductAdmin = () => {
    const {currProds} = useAppSelector(state => state.products);
    const rows = currProds;
    const columns: GridColDef<(typeof rows)[number]>[]=[
        { field: 'id', headerName: 'ID', width: 90, flex: 0.3 },
        { field: 'title', headerName: 'Product Name', width: 150, flex: 1 },
        { field: 'category', headerName: 'Category', width: 90, flex: 0.4 },
        { field: 'unit', headerName: 'Unit', width: 90, flex: 0.4 },
        { field: 'cost', headerName: 'Price in ILS', width: 90, flex: 0.4 },
        { field: 'image', width: 200, flex: 0.5, renderCell: (params) => {
            return (
                <Avatar src={'/images/'+ params.value}/>
            )
            } }
    ]
    return (
        <Box>
            <DataGrid columns={columns} rows={rows} />
        </Box>
    );
};

export default BreadProductAdmin;