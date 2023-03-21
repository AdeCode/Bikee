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
import {useNavigate} from 'react-router-dom'
import { useMutation, useQueryClient } from 'react-query';
import { MdApproval } from "react-icons/md";
import helperFunction from '../../@helpers/helperFunction';
import orderService from '../../@services/orderService';
import { toast } from 'react-toastify';


function PaymentsTable({data}) {
    const navigate = useNavigate()

    const queryClient = useQueryClient()

    const approvePaymentMutation = useMutation(orderService.approvePayment, {
        onSuccess: res => {
            //console.log(res)
            toast.success(res.message, {
              theme: "colored",
            })  
            //reload data  
            queryClient.invalidateQueries('payments')        
        },
        onError: err => {
            toast.error(err.response.data.message[0], {
              theme: "colored",
            })
        }
    })

    const columns = useMemo(
        () => [
          {
            accessorKey: 'user.email', //access nested data with dot notation
            header: 'Email',
          },
          {
            accessorKey: 'amount', //access nested data with dot notation
            header: 'Amount',
            Cell: ({ renderedCellValue }) => helperFunction.nairaFormat(renderedCellValue),
          },
          {
            accessorKey: 'provider',
            header: 'Provider',
          },
          {
            accessorKey: 'status', //normal accessorKey
            header: 'Status',
            Cell: ({ cell }) => (
                <Box
                  component="span"
                  sx={(theme) => ({
                    borderRadius: '0.25rem',
                    color: 
                        cell.getValue() === 'successful'
                            ? 'green'
                            : cell.getValue() === 'pending'
                            ? '#CCCC00'
                            : 'red',
                    p: '0.25rem',
                  })}
                >
                  {cell.getValue()}
                </Box>
            ),
          },
          {
            accessorKey: 'order_ref',
            header: 'Order Ref',
          },
        ],
        [],
      );
    
      return <MaterialReactTable 
                columns={columns} data={data}
                enableRowActions 
                renderRowActionMenuItems={({ closeMenu, row }) => [
                    <MenuItem
                      key={1}
                      onClick={() => {
                        console.log(row.original.id)
                        approvePaymentMutation.mutate({order_ref:row.original.order_ref})
                        closeMenu();
                      }}
                      sx={{ m: 0 }}
                    >
                      <ListItemIcon>
                        <MdApproval />
                      </ListItemIcon>
                      Approve
                    </MenuItem>,
                    <MenuItem
                      key={0}
                      onClick={() => {
                        // View profile logic...
                        console.log(row.original.id)
                        navigate(`/dashboard/payment/${row.original.id}`)
                        closeMenu();
                      }}
                      sx={{ m: 0 }}
                    >
                      <ListItemIcon>
                        <AccountCircle />
                      </ListItemIcon>
                      View Details
                    </MenuItem>,
                    
                  ]}
            />;
}

export default PaymentsTable