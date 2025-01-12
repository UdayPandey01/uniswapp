import React from 'react';
import { RxCross1 } from 'react-icons/rx';
import { Toggle } from '../index';

const Token = ({ setOpenSetting }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md space-y-6 mt-4"> 
                <div className="flex justify-between items-center">
                    <h4 className="text-2xl text-gray-600 font-semibold">Setting</h4>
                    <RxCross1 onClick={() => setOpenSetting(false)} className="cursor-pointer" />
                </div>
                <div className="space-y-4">
                    <div>
                        <p className="text-gray-600">Slippage Tolerance</p>
                        <div className="flex items-center space-x-2 mt-2">
                            <button className="px-4 py-2 font-semibold border border-gray-300 rounded-lg hover:bg-gray-200">Auto</button>
                            <input type="text" placeholder="0.10%" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none" />
                        </div>
                    </div>
                    <div>
                        <p className="text-gray-600">Slippage Tolerance</p>
                        <div className="flex items-center space-x-2 mt-2">
                            <input type="text" placeholder="20" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none" />
                            <button className="px-4 py-2 border border-gray-300 font-semibold rounded-lg hover:bg-gray-200">minutes</button>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold">Interface Setting</h2>
                        <div className="flex items-center justify-between mt-2">
                            <p className="text-gray-600">Transaction deadline</p>
                            <Toggle label={"No"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Token;