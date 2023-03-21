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


function ProductTable({ data }) {
    const navigate = useNavigate()
    const columns = useMemo(
        () => [
            {
                accessorKey: 'name', //access nested data with dot notation
                header: 'Name',
                Cell: ({ renderedCellValue, row }) => (
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                      }}
                    >
                      <img
                        alt="avatar"
                        height={30}
                        width={30}
                        src={row.original.image_url}
                        loading="lazy"
                        style={{ borderRadius: '50%' }}
                      />
                      {/* using renderedCellValue instead of cell.getValue() preserves filter match highlighting */}
                      <span>{renderedCellValue}</span>
                    </Box>
                  ),
            },
            {
                accessorKey: 'type',
                header: 'Category',
            },
            {
                accessorKey: 'amount', //normal accessorKey
                header: 'Amount',
                Cell: ({ row }) => (row.original.type === 'BIKE' || row.original.type === 'ACCESSORY') ? row.original.amount : row.original.amount_yearly},
            {
                accessorKey: 'actions', //normal accessorKey
                header: 'Action',
                Cell: ({ row }) => (
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                        }}
                    >
                        <Tooltip title="Edit">
                            <IconButton onClick={() => navigate(`/dashboard/product/${row.original.id}/edit`)}>
                                <EditIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="View">
                            <IconButton onClick={() => navigate(`/dashboard/product/${row.original.id}`)}>
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
        // enableRowActions
        // renderRowActionMenuItems={({ closeMenu, row }) => [
        //     <MenuItem
        //         key={0}
        //         onClick={() => {
        //             // View profile logic...
        //             console.log(row.original.id)
        //             closeMenu();
        //         }}
        //         sx={{ m: 0 }}
        //     >
        //         <ListItemIcon>
        //             <AccountCircle />
        //         </ListItemIcon>
        //         View Details
        //     </MenuItem>,
        //     <MenuItem
        //         key={1}
        //         onClick={() => {
        //             // Send email logic...
        //             closeMenu();
        //         }}
        //         sx={{ m: 0 }}
        //     >
        //         <ListItemIcon>
        //             <Send />
        //         </ListItemIcon>
        //         Send Email
        //     </MenuItem>,
        // ]}
    />;
}

export default ProductTable