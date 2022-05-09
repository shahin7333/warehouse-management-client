import React from 'react'
import { useForm } from 'react-hook-form'

const AddBicycle = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = data =>{
       console.log(data);
  const url=`https://ancient-plains-18330.herokuapp.com/manage`;
  fetch(url,{
      method: 'POST',
      headers: {
          'content-type':'application/json'
      },
     body: JSON.stringify(data)
  })
  .then(res=>res.json())
  .then(find=>{
      console.log(find);
  })
}
  return (
    <div className="text-center mx-auto w-50 mt-5">
      <h3>Add Your Bicycle</h3>
      <form
        className=" p-5 rounded d-flex flex-column"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="mb-3 border-0 bg-light ps-3 py-2 rounded"
          placeholder="Img URL"
          {...register('img', { required: true })}
        />
        <input
          className="mb-3 border-0 bg-light ps-3 py-2  rounded"
          placeholder="Name"
          {...register('name', { required: true })}
        />

        <input
          className="mb-3 border-0 bg-light ps-3 py-2  rounded"
          placeholder="Price"
          type="text && number"
          {...register('price')}
        />

        <input
          className="mb-3 bg-dark rounded-bottom border-0 text-white py-2"
          type="submit"
          value="Add Bicycle"
        />
      </form>
    </div>
  )
}

export default AddBicycle
