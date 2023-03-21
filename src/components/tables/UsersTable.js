import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import {
    Box,
    Button,
    ListItemIcon,
    MenuItem,
    Typography,
    TextField,
} from '@mui/material';
import { AccountCircle, Send } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'
import Tooltip from '@mui/material/Tooltip';
import VisibilityIcon from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';


function UsersTable({ data }) {
    const navigate = useNavigate()

    const columns = useMemo(
        () => [
            {
                accessorKey: 'first_name', //access nested data with dot notation
                header: 'First Name',
            },
            {
                accessorKey: 'last_name',
                header: 'Last Name',
            },
            {
                accessorKey: 'email', //normal accessorKey
                header: 'Email',
            },
            {
                accessorKey: 'phone',
                header: 'Phone',
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
                            <IconButton onClick={() => {
                                navigate(`/dashboard/user/${row.original.id}`)
                            }
                            }>
                                <VisibilityIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
                ),

            },
        ],
        [],
    );

    return <MaterialReactTable
        columns={columns} data={data}
    />;
}

export default UsersTable