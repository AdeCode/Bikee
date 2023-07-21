import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import productService from '../../@services/productService'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import MenuItem from '@mui/material/MenuItem';
import ImageUpload from '../../components/@shared/ImageUpload';
import productTypes from '../../components/@shared/productTypes';



const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: '20px',
    fontWeight: 'bold',
  },

}))

function AddProduct() {
  const classes = useStyles()
  const navigate = useNavigate()
  const [productType, setProductType] = useState('BIKE')
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [imageData, setImageData] = useState([]);

  const selectFile = (e) => {
    console.log(e.target.files)
    // const data = e.target.files[0]
    setImageData(imageData => [...imageData, e.target.files[0]])
    console.log(imageData)
    // if (data !== null) {
    //   setImage(data);
    //   const formData = new FormData();
    //   formData.append('file', data)
    //   uploadImageMutation.mutate(formData)
    // }
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

  const addProductMutation = useMutation(productService.addProduct, {
    onSuccess: res => {
      // console.log(res)
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
    if (image === null || image === '') {
      toast.error('Please select an image', {
        theme: "colored",
      })
    }
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const payload = {
      name: data.get('name'),
      type: data.get('type'),
      image_url: imageURL,
      amount: data.get('amount') === null ? 0 : data.get('amount'),
      amount_monthly: data.get('amount_monthly') === null ? 0 : data.get('amount_monthly'),
      amount_yearly: data.get('amount_yearly') === null ? 0 : data.get('amount_yearly'),
      property: [
        {
          weight: data.get('weight'),
          charging: data.get('charging'),
          battery: data.get('battery'),
          speed: data.get('speed'),
        }
      ]
    }
    addProductMutation.mutate(payload)
    //console.log(payload)

  };

  const handleProductTypeChange = (e) => {
    console.log(e.target.value)
    setProductType(e.target.value)
    console.log(productType)
  }

  return (
    <Box>
      <div className={classes.title}>Add Product</div>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '30ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className='flex justify-between'>
          <TextField
            id="outlined-error-helper-text"
            label="Product Name"
            required
            type='text'
            name='name'
          />
          <TextField
            id="outlined-select-currency"
            select
            label="Product Type"
            name='type'
            onChange={handleProductTypeChange}
          >
            {productTypes.map((product) => (
              <MenuItem key={product.value} value={product.value}>
                {product.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        {
          (productType === 'BIKE' || productType === 'ACCESSORY') ?
            <div>
              <FormControl sx={{ m: 1, width: '97%' }}>
                <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  startAdornment={<InputAdornment position="start">N</InputAdornment>}
                  label="Amount"
                  name='amount'
                />
              </FormControl>
            </div>
            :
            null
        }

        {
          (productType === 'INSURANCE' || productType === 'MAINTENANCE') ?
            <div className='flex'>
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Amount monthly (Accessories/Maintanance)</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  startAdornment={<InputAdornment position="start">N</InputAdornment>}
                  label="Amount mmonthly"
                  name='amount_monthly'
                />
              </FormControl>
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Amount yearly</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  startAdornment={<InputAdornment position="start">N</InputAdornment>}
                  label="Amount yearly"
                  name='amount_yearly'
                />
              </FormControl>
            </div>
            :
            null
        }
        {
          productType === 'BIKE' ?
            <>
              <div className='flex'>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">Weight</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    endAdornment={<InputAdornment position="start">kg</InputAdornment>}
                    label="Weight"
                    name='Weight'
                  />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">Battery range</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    label="Battery"
                    name='battery'
                  />
                </FormControl>
              </div>

              <div className='flex'>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">Charging time</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    endAdornment={<InputAdornment position="start">hr</InputAdornment>}
                    label="Charging"
                    name='charging'
                  />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">Speed</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    endAdornment={<InputAdornment position="start">km/hr</InputAdornment>}
                    label="Speed"
                    name='speed'
                  />
                </FormControl>
              </div>
            </>
            :
            null
        }
        {
          productType === 'BIKE' &&
          <div className='w-full'>
            <TextField
              id="outlined-multiline-static"
              label="Bike Descriptiion"
              name='description'
              multiline
              rows={4}
              sx={{ minWidth: '97%', m:0 }}
            />
          </div>
        }

        {/* <div>
          <TextField
            id="filled-error"
            label="Weight"
            defaultValue="Weight"
            variant="filled"
            name='weight'
          />
          <TextField
            id="filled-error-helper-text"
            label="Battery"
            defaultValue="Hello World"
            // helperText="Incorrect entry."
            variant="filled"
            name="battery"
          />
        </div> */}
        {/* <div>
          <TextField
            id="filled-error"
            label="Charging"
            defaultValue="1 hr"
            variant="filled"
            name='charging'
          />
          <TextField
            id="filled-error-helper-text"
            label="Speed"
            defaultValue="100km/hr"
            // helperText="Incorrect entry."
            variant="filled"
            name="speed"
          />
        </div> */}
        {/* <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={()=>ShowAlert()}
        >
          show
        </Button> */}
        <ImageUpload
          selectFile={selectFile}
          image={image}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Create Product
        </Button>
      </Box>
    </Box>

  )
}

export default AddProduct