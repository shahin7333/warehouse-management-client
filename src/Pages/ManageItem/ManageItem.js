import React from 'react'
import useManages from '../../hooks/UseManage/UseManage'

const ManageItem = ({ manage }) => {
  const { name, price, img } = manage
  const [manages,setManages] = useManages()
  const deleteBtn = (id) => {
    const agree = window.confirm('You are deleting your item!')
    if (agree) {
      const url = `https://ancient-plains-18330.herokuapp.com/manage/${id}`
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining=manages.filter(manage=>manage._id !==id)
          setManages(remaining);
        })
    }
  }
  return (
    <div className="manage-card card border-0 mx-0 col-sm-4 col-md-3 col-lg-2 m-3">
      <img src={img} alt="" />
      <br />
      <small>
        <b>{name}</b>
      </small>
      <br />
      <small>{price}</small>
      <button
        onClick={() => deleteBtn(manage._id)}
        className="bg-dark text-white py-1 rounded-bottom border-0"
      >
        Delete
      </button>
    </div>
  )
}

export default ManageItem
