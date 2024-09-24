import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App' 
import { toast } from 'react-toastify'

const Add = ({token}) => {

  const [image1,setImage1] = useState(false);
  const [image2,setImage2] = useState(false);
  const [image3,setImage3] = useState(false);
  const [image4,setImage4] = useState(false);

  const [name,setName] = useState("");
  const [description,setDescription] = useState("");
  const [price,setPrice] = useState("");
  const [category,setCategory] = useState("Rings");
  const [subCategory,setSubCategory] = useState("Cushion");
  const [bestseller,setBestseller] = useState(false);
  const [sizes,setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData()
      formData.append("name",name)
      formData.append("description",description)
      formData.append("price",price)
      formData.append("category",category)
      formData.append("subCategory",subCategory)
      formData.append("bestseller",bestseller)
      formData.append("sizes",JSON.stringify(sizes))

      image1 && formData.append("image1",image1)
      image2 && formData.append("image2",image2)
      image3 && formData.append("image3",image3)
      image4 && formData.append("image4",image4)

      const responce = await axios.post(backendUrl + "/api/product/add",formData,{headers:{token}})
      if (responce.data.success) {
        toast.success(responce.data.message)
        setName('');
        setDescription('');
        setImage1('');
        setImage2('');
        setImage3('');
        setImage4('');
        setPrice('');
      }
      else{
        toast.error(responce.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }



  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>

      <div>
        <p className='mb-2'>Upload Image</p>
        <div className='flex gap-2'>
          <label htmlFor="image1">
            <img className='w-20' src={!image1 ? assets.upload_area :URL.createObjectURL(image1)} alt="" />
            <input onChange={(e) =>setImage1(e.target.files[0])} type="file" id="image1" hidden />
          </label>
          <label htmlFor="image2">
            <img className='w-20' src={!image2 ? assets.upload_area :URL.createObjectURL(image2)} alt="" />
            <input onChange={(e) =>setImage2(e.target.files[0])} type="file" id="image2" hidden />
          </label>
          <label htmlFor="image3">
            <img className='w-20' src={!image3 ? assets.upload_area :URL.createObjectURL(image3)} alt="" />
            <input onChange={(e) =>setImage3(e.target.files[0])} type="file" id="image3" hidden />
          </label>
          <label htmlFor="image4">
            <img className='w-20' src={!image4 ? assets.upload_area :URL.createObjectURL(image4)} alt="" />
            <input onChange={(e) =>setImage4(e.target.files[0])} type="file" id="image4" hidden />
          </label>
        </div>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product Name</p>
        <input onChange={(e) => setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type Here' required />
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product Description</p>
        <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Write Content Here' required />
      </div>

      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8 '>
        <div>
          <p className='mb-2'>Product Category</p>
          <select onChange={(e) => setCategory(e.target.value)} className='w-full px-3 py-2'>
            <option value="Rings">Rings</option>
            <option value="Earrings">Earrings</option>
            <option value="Pendants">Pendants</option>
            <option value="Solitaires">Solitaires</option>
          </select>
        </div>
        <div>
          <p className='mb-2'>Sub Category</p>
          <select onChange={(e) => setSubCategory(e.target.value)} className='w-full px-3 py-2'>
            <option value="Cushion">Cushion</option>
            <option value="Emerald">Emerald</option>
            <option value="Heart">Heart</option>
            <option value="Oval">Oval</option>
            <option value="Pear">Pear</option>
            <option value="Princes">Princes Cut</option>
            <option value="Radiant">Radiant</option>
            <option value="Arrow">Arrow</option>
          </select>
        </div>
        <div>
          <p className='mb-2'>Product Price</p>
          <input onChange={(e) => setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' type="Number" placeholder='25' />
        </div>
      </div>

      <div>
        <p className='mb-2'>Product Sizes</p>
        <div className='flex gap-3'>
          <div onClick={() => setSizes(prev => prev.includes("Round") ? prev.filter( item => item !== "Round") : [...prev,"Round"])}>
            <p className={`${sizes.includes("Round") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>Round</p>
          </div>
          <div onClick={() => setSizes(prev => prev.includes("Princes") ? prev.filter( item => item !== "Princes") : [...prev,"Princes"])}>
            <p className={`${sizes.includes("Princes") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>Princes</p>
          </div>
          <div onClick={() => setSizes(prev => prev.includes("Oval") ? prev.filter( item => item !== "Oval") : [...prev,"Oval"])}>
            <p className={`${sizes.includes("Oval") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>Oval</p>
          </div>
          <div onClick={() => setSizes(prev => prev.includes("Pear") ? prev.filter( item => item !== "Pear") : [...prev,"Pear"])}>
            <p className={`${sizes.includes("Pear") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>Pear</p>
          </div>
        </div>
      </div>

      <div className='flex gap-2 mt-2'>
        <input onChange={() => setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id='bestseller' />
        <label className='cursor-pointer' htmlFor="bestseller">Add to bestseller</label>
      </div>

      <button type='submit' className='w-28 py-3 mt-4 bg-black text-white'>ADD</button>

    </form>
  )
}

export default Add