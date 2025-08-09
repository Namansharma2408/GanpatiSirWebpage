import React from 'react'
import { useParams } from 'react-router-dom'
import { Outlet } from "react-router-dom";

const FacilitesData = () => {
  const facility = useParams()
  return (
    <div className='bg-red-500 text-9xl z-50'>
      <div>
        hii {facility}
      </div>
    <Outlet />
    </div>
  )
}

export default FacilitesData