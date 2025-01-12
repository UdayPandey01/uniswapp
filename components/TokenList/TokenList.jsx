import React from 'react'
import { RxCross1 } from 'react-icons/rx'

const TokenList = ({ setOpenTokenBox, tokenDate }) => {
  const data = [1, 2, 3, 4, 5, 6, 7]
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="p-5 bg-gray-100 rounded-lg w-1/4 relative">
        <p onClick={() => setOpenTokenBox(false)} className="cursor-pointer absolute top-3 right-3">
          <RxCross1 />
        </p>
        <div>
          <h2 className="text-center mb-5 text-xl font-semibold">Your Token List</h2>
        </div>
        {data.map((el, index) => (
          <div key={index} className="p-3 hover:bg-gray-200 rounded-md mb-3 shadow-sm">
            <div>
              <p className="text-lg font-bold">HEY</p>
              <p className="text-sm text-gray-600">
                <span className="font-bold text-black">34</span> GOLD COIN
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TokenList