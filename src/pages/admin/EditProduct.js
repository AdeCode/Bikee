import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom';
import productService from '../../@services/productService'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { useMutation, useQueryClient, useQuery } from 'react-query'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import productTypes from '../../components/@shared/productTypes';
import MenuItem from '@mui/material/MenuItem';
import ImageUpload from '../../components/@shared/ImageUpload';


const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: '20px',
    fontWeight: 'bold',
  },

}))

function EditProduct() {
  const classes = useStyles()

  const { productId } = useParams()

  const navigate = useNavigate()

  const [image, setImage] = useState(null)

  const [imageURL, setImageURL] = useState(null)

  const queryClient = useQueryClient()

  const selectFile = (e) => {
    const data = e.target.files[0]
    if (data !== null) {
      setImage(data);
      const formData = new FormData();
      formData.append('file', data)
      uploadImageMutation.mutate(formData)
    }
  }

  const uploadImageMutation = useMutation(productService.uploadImage, {
    onSuccess: res => {
      console.log(res.url)
      setImageURL(res.url)
      toast.success(res.message, {
        theme: "colored",
      })
    },
    onError: err => {
      toast.error(err.response.data.message[0], {
        theme: "colored",
      })
    }
  })

  const updateProductMutation = useMutation(productService.updateProduct, {
    onSuccess: res => {
      console.log(res)
      toast.success(res.message, {
        theme: "colored",
      })
      queryClient.invalidateQueries('product')
      navigate('/dashboard/products')
    },
    onError: err => {
      //console.log(err)
      toast.error(err.response.data.message[0], {
        theme: "colored",
      })
    }
  })

  const deleteProductMutation = useMutation(productService.deleteProduct, {
    onSuccess: res => {
      console.log(res)
      toast.success(res.message, {
        theme: "colored",
      })
      navigate('/dashboard/products')
    },
    onError: err => {
      //console.log(err)
      toast.error(err.response.data.message[0], {
        theme: "colored",
      })
    }
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const payloadData = {
      payload: {
        name: data.get('name'),
        type: data.get('type'),
        image_url: imageURL !== null ? imageURL : product.data.image_url,
        amount: data.get('amount') === null ? 0 : data.get('amount'),
        property: [
          {
            weight: data.get('weight'),
            charging: data.get('charging'),
            battery: data.get('battery'),
            speed: data.get('speed'),
          }
        ],
      },
      productId: productId
    }
    //console.log(payload)
    updateProductMutation.mutate(payloadData)
  };

  useEffect(() => {

  })

  const { data: product, isLoading, error, isError } = useQuery(['product', { productId }], productService.getProduct)

  //product && console.log(product.data)

  if (isLoading) return 'Loading...'

  if (isError) {
    return <span>{error.message}</span>
  }

  const deleteProduct = () => {
    console.log(productId + 'delete clicked')
    const payload = {
      productId: productId
    }
    deleteProductMutation.mutate(payload)
  }

  return (
    <div>
      <Box>
        <div className={classes.title}>Edit Product</div>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div>
            {/* <TextField 
                id="outlined-basic" 
                label="Outlined" 
                variant="outlined" 
                defaultValue={product.data.name}
            /> */}
            <TextField
              id="outlined-error-helper-text"
              label="Product Name"
              required
              type='text'
              name='name'
              defaultValue={product.data.name}
            // value={product.data.name}
            />
            <TextField
              id="outlined-select-currency"
              select
              label="Product Type"
              defaultValue={product.data.type}
              //value={product.data.type}
              // helperText="Please select product type"
              name='type'
            >
              {productTypes.map((product) => (
                <MenuItem key={product.value} value={product.value} defaultValue={product.value}>
                  {product.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          {
            (product?.data.type === 'BIKE' || product?.data.type === 'ACCESSORY') ?
            <div>
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  startAdornment={<InputAdornment position="start">N</InputAdornment>}
                  label="Amount"
                  name='amount'
                  defaultValue={product.data.amount}
                //value={product.data.amount}
                />
              </FormControl>
            </div>
            :
            null
          }
          
          {
            (product?.data.type === 'INSURANCE' || product?.data.type === 'MAINTENANCE') ?
            <div className='flex'>
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Amount monthly</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  startAdornment={<InputAdornment position="start">N</InputAdornment>}
                  label="Amount mmonthly"
                  name='amount_monthly'
                  defaultValue={product.data.amount_monthly}
                />
              </FormControl>
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Amount yearly</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  startAdornment={<InputAdornment position="start">N</InputAdornment>}
                  label="Amount yearly"
                  name='amount_yearly'
                  defaultValue={product.data.amount_yearly}
                />
              </FormControl>
            </div>
              :
              null
          }
          {
            product?.data.type === 'BIKE' ?
              <>
                <div>
                  <TextField
                    id="filled-error"
                    label="Weight"
                    variant="filled"
                    name='weight'
                    defaultValue={product.data.property[0].weight}
                  />
                  <TextField
                    id="filled-error-helper-text"
                    label="Battery range"
                    // defaultValue="Hello World"
                    // helperText="Incorrect entry."
                    variant="filled"
                    name="battery"
                    defaultValue={product.data.property[0].battery}
                  />
                </div>
                <div>
                  <TextField
                    id="filled-error"
                    label="Charging time"
                    // defaultValue="1 hr"
                    variant="filled"
                    name='charging'
                    defaultValue={product.data.property[0].charging}
                  />
                  <TextField
                    id="filled-error-helper-text"
                    label="Speed"
                    // helperText="Incorrect entry."
                    variant="filled"
                    name="speed"
                    defaultValue={product.data.property[0].speed}
                  />
                </div>
              </>
              :
              null
          }

          {/* <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={()=>ShowAlert()}
        >
          show
        </Button> */}
          <div>
            {
              product.data.image_url &&
              <img src={product.data.image_url} alt={product.data.name} width='150px' height='150px' />
            }
          </div>
          <ImageUpload
            selectFile={selectFile}
            image={image}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2 }}
          >
            Update Product
          </Button>
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2, backgroundColor: 'red' }}
            onClick={deleteProduct}
          >
            Delete Product
          </Button>
        </Box>
      </Box>
    </div>
  )
}

export default EditProduct