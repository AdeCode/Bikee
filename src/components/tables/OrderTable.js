import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import {
    ListItemIcon,
    MenuItem,
    Box,
} from '@mui/material';
import { AccountCircle, Send } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom'
import helperFunction from '../../@helpers/helperFunction';
import Moment from 'react-moment';


function OrderTable({ data }) {
    const navigate = useNavigate()
    const columns = useMemo(
        () => [
            {
                accessorKey: 'order_ref',
                header: 'Order Ref',
            },
            {
                accessorKey: 'total_amount', //helperFunction.nairaFormat(row.total_amount)
                header: 'Total Amount',
                Cell: ({ renderedCellValue }) => helperFunction.nairaFormat(renderedCellValue),
            },
            {
                accessorKey: 'created_at', //<Moment date={row.created_at}/>
                header: 'Order date',
                Cell: ({ renderedCellValue }) => <Moment date={renderedCellValue}/>,
            },
            {
                accessorKey: 'actions', 
                header: 'Action',
                Cell: ({ row }) => (
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                        }}
                    >
                        <Tooltip title="View">
                            <IconButton onClick={() => 
                                {
                                    //console.log(row.original.id);
                                    navigate(`/dashboard/order/${row.original.id}`)
                                }
                            }>
                                <VisibilityIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
                ),
            }
        ],
        [],
    );

    return <MaterialReactTable
        columns={columns} data={data}
    />;
}

export default OrderTable