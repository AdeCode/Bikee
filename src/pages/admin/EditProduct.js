import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query'
import productService from '../../@services/productService'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import {useMutation} from 'react-query'
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import productTypes from '../../components/@shared/productTypes';
import MenuItem from '@mui/material/MenuItem';
import ImageUpload from '../../components/@shared/ImageUpload';


const useStyles = makeStyles((theme)=>({
    title:{
      marginBottom: '20px',
      fontWeight: 'bold',
    },
    
  }))

function EditProduct() {
    const classes = useStyles()

    const {productId} = useParams()

    const navigate = useNavigate()

    const [image, setImage] = useState(null)

    const [imageURL, setImageURL] = useState(null)

    const selectFile = (e) => {
      const data = e.target.files[0]
      if(data !== null){
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
        const payload = {
          name: data.get('name'),
          type: data.get('type'),
          image_url: imageURL !== null ? imageURL : product.data.image_url,
          amount: data.get('amount'),
          property:[
            {
              weight: data.get('weight'),
              charging: data.get('charging'),
              battery: data.get('battery'),
              speed: data.get('speed'),
            }
          ],
          productId:productId
        }
        updateProductMutation.mutate(payload)
        console.log(payload)
        
      };

    useEffect(()=>{

    })

    const {data:product, isLoading, error, isError} = useQuery(['product',{productId}], productService.getProduct)

    // product && console.log(product.data)

    if (isLoading) return 'Loading...'

    if (isError) {
        return <span>{error.message}</span>
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
            helperText="Please select product type"
            name='type'
          >
            {productTypes.map((product) => (
              <MenuItem key={product.value} value={product.value}>
                {product.label}
              </MenuItem>
            ))}
          </TextField>
          {/* <TextField
            id="outlined-error-helper-text"
            label="Product Type"
            required
            type='text'
            name='type'
            value={product.data.type}
          /> */}
        </div>
        <div>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">N</InputAdornment>}
            label="Amount"
            name='amount'
            // defaultValue={product.data.amount}
            value={product.data.amount}
          />
        </FormControl>
        </div>
        
        <div>
          <TextField
            id="filled-error"
            label="Weight"
            defaultValue="Weight"
            variant="filled"
            name='weight'
            value={product.data.property[0].weight}
          />
          <TextField
            id="filled-error-helper-text"
            label="Battery"
            // defaultValue="Hello World"
            // helperText="Incorrect entry."
            variant="filled"
            name="battery"
            value={product.data.property[0].battery}
          />
        </div>
        <div>
          <TextField
            id="filled-error"
            label="Charging"
            // defaultValue="1 hr"
            variant="filled"
            name='charging'
            value={product.data.property[0].charging}
          />
          <TextField
            id="filled-error-helper-text"
            label="Speed"
            defaultValue="100km/hr"
            // helperText="Incorrect entry."
            variant="filled"
            name="speed"
            value={product.data.property[0].speed}
          />
        </div>
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
            <img src={product.data.image_url} alt={product.data.name} width='200px' height='200px'/>
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
          sx={{ mt: 3, mb: 2 }}
        >
          Update Product
        </Button>
      </Box>
    </Box>
    </div>
  )
}

export default EditProduct