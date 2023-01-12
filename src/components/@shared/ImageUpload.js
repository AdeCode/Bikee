import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import productService from '../../@services/productService';
import { toast } from 'react-toastify';
import {useMutation} from 'react-query'

function ImageUpload({selectFile, image}) {
    const [currentFile, setCurrentFile] = useState(null);
    const [progress, setProgress] = useState(0);
    const [uploading, setUploading] = useState(false);


    // const selectFile = (e) => {
    //     const data = e.target.files[0]
    //     setImage(data);
    //     console.log(image)
    // }

    // const uploadImageMutation = useMutation(productService.uploadImage, {
    //     onSuccess: res => {
    //         console.log(res.url)
    //         toast.success(res.message, {
    //           theme: "colored",
    //         })            
    //     },
    //     onError: err => {
    //         toast.error(err.response.data.message[0], {
    //           theme: "colored",
    //         })
    //     }
    // })

    // useEffect(()=>{
    //     const formData = new FormData();
    //     formData.append('file', image)
    //     console.log(formData)
    //     uploadImageMutation.mutate(formData)
    // },[image])

  return (
    <div>
        <div className="form-group">
            <label htmlFor="upload">Upload Image</label>
            <input type="file" name='file' onChange={selectFile}/>
            {
                image &&
                <div>
                    <span>{image.name}</span>
                    <div className="w-44 h-44">
                        <img src={URL.createObjectURL(image)} alt={image.name}/>
                    </div>
                </div>
            }
            {/* <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            >
                Upload Image
            </Button> */}
        </div>
    </div>
  )
}

export default ImageUpload