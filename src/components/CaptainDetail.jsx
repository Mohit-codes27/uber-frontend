import React, {useContext} from 'react'
import { CaptainDataContext } from '../context/CaptainContext'

const CaptainDetail = () => {

  const { captain } = useContext(CaptainDataContext)

  return (
    <div>
      <div className="flex items-center justify-between">
          <div className='flex items-center justify-start gap-3'>
            <img className='h-10 w-10 rounded-full object-cover' src="https://imgs.search.brave.com/-ByF2XTLK4DwY7kHWi2skCHEzhwEVtjAq9Ks7B00vhE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvNS9Qcm9m/aWxlLVBORy1GaWxl/LnBuZw" alt="" />
            <h4 className='text-lg font-medium capitalize'>{captain.fullName.firstName + " " + captain.fullName.lastName}</h4>
          </div>
          <div>
            <h4 className='text-xl font-semibold'>$25.78</h4>
            <p className='text-sm text-gray-600'>Earned</p>
          </div>
        </div>
        <div className='flex p-3 mt-8 bg-gray-100 rounded-xl justify-center gap-5 items-start'>
          <div className='text-center'>
            <i className="text-3xl mb-2 font-thin ri-time-line"></i>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>
          </div>
          <div className='text-center'>
            <i className="text-3xl mb-2 font-thin ri-speed-up-fill"></i>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>
          </div>
          <div className='text-center'>
            <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>
          </div>
        </div>
    </div>
  )
}

export default CaptainDetail
