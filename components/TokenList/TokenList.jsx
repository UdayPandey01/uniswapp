import React from 'react'
import { RxCross1 } from 'react-icons/rx'

const TokenList = ({ setOpenTokenBox, tokenData }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 bg-opacity-70">
      <div className="p-4 bg-gray-100 rounded-3xl w-1/4 relative">
        <p onClick={() => setOpenTokenBox(false)} className="cursor-pointer absolute top-3 right-3">
          <RxCross1 />
        </p>
        <div>
          <h2 className="text-center mb-5 text-xl font-semibold">Your Token List</h2>
        </div>
        {tokenData.map((el, index) => (
          <div key={index} className="p-3 hover:bg-gray-200 rounded-md mb-3 shadow-sm">
            <div>
              <p className="text-lg font-bold">{el.symbol}</p>
              <p className="text-sm text-gray-600">
                <span className="font-bold text-black">{el.userBalanace}</span> {el.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TokenList