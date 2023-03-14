import { ReactElement, createContext, useState } from 'react'

const Form = () => {

    return (
        <div className="grid bg-red-300 grid-cols-2 gap-4">
            <div className="p-2">Name</div>
            <div className="p-2">Phone</div>
            <div className="col-span-full h-[300px]">message</div>
            <div className="ml-auto col-span-full">

            <div className="py-2 px-6">Reset</div>
            <div className="px-6 py-2">Submit</div>
            </div>
        </div>
    )
}


export default Form
