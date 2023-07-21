import React, { useState } from "react";
import "../newProduct/newProdcut.scss";
import { LinearProgress, Typography, Box } from "@mui/material";
import { addProduct } from "../../rtk/apiCalls";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../../firebase";
import { useDispatch } from "react-redux";

function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [img, setImg] = useState("");
  const [cat, setCat] = useState([]);
  const dispatch = useDispatch();
  const [prog, setProg] = useState(false);
  const handelChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handelCat = (e) => {
    setCat(e.target.value.split(","));
  };
  const handelClick = (e) => {
    e.preventDefault();
    const storage = getStorage(app);
    const fileName = new Date().getTime() + img.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, img);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setProg(progress);

        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          const product = { ...inputs, img: downloadURL, categorie: cat };
          addProduct(dispatch, product);
        });
      }
    );
  };
  return (
    <div className='prog'>
      <div className='newProduct'>
        <h1 className='newProductTitle'>New Product</h1>
        <form className='newProductForm'>
          <div className='newProductItem'>
            <label>Image</label>
            <input
              onChange={(e) => setImg(e.target.files[0])}
              type='file'
              id='file'
            />
          </div>
          <div className='newProductItem'>
            <label>Title</label>
            <input
              onChange={handelChange}
              name='title'
              type='text'
              placeholder='Apple Airpods'
            />
          </div>
          <div className='newProductItem'>
            <label>Description</label>
            <input
              onChange={handelChange}
              name='desc'
              type='text'
              placeholder=' Descr...'
            />
          </div>
          <div className='newProductItem'>
            <label>Price</label>
            <input
              onChange={handelChange}
              name='price'
              type='text'
              placeholder='$$$'
            />
          </div>
          <div className='newProductItem'>
            <label>Categories</label>
            <input
              onChange={handelCat}
              name='categories'
              type='text'
              placeholder='..,..,....'
            />
          </div>
          <div className='newProductItem'>
            <label>Stock</label>
            <input
              onChange={handelChange}
              name='inStock'
              type='text'
              placeholder='123'
            />
          </div>
          <div className='newProductItem'>
            <label>Active</label>
            <select name='active' id='active'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
          </div>
          <button onClick={handelClick} className='newProductButton'>
            Create
          </button>
        </form>
      </div>
      {/* <Box className='progress' sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress variant='determinate' {...prog} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant='body2' color='text.secondary'>{`${Math.round(
            prog
          )}%`}</Typography>
        </Box>
      </Box> */}
    </div>
  );
}

export default NewProduct;
