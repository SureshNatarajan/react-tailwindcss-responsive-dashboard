import React from 'react'
import Card from "../components/Card";
import { FcPieChart, FcCalendar, FcEngineering } from "react-icons/fc";
import { GrScorecard } from "react-icons/gr";

const MainPage = () => {
  const Employees = [
    { 
      id : "1",
      name: "Ram",
      emailId: "ram@ram.com",
      doj : "01-01-1970",
      title : "CEO",
      skillSet : "Management",
      imageUrl : "https://plus.unsplash.com/premium_photo-1694088838471-2ba2f1d03d23?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5OTk0NzkwNA&ixlib=rb-4.0.3&q=80&w=300"
    },
    { 
      id : "2",
      name: "Rahim",
      emailId: "Rahim@Rahim.com",
      doj : "01-02-1970",
      title : "COO",
      skillSet : "Management",
      imageUrl : "https://images.unsplash.com/photo-1698350214935-902a5f8d719b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5OTk0Nzg3Nw&ixlib=rb-4.0.3&q=80&w=300"
    },
    { 
      id : "3",
      name: "Roger",
      emailId: "Roger@Roger.com",
      doj : "01-03-1970",
      title : "CFO",
      skillSet : "Management",
      imageUrl : "https://plus.unsplash.com/premium_photo-1670876807656-28aa4685ea0d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5OTk0Nzc2Nw&ixlib=rb-4.0.3&q=80&w=300"
    },
    { 
      id : "4",
      name: "Raj",
      emailId: "Raj@Raj.com",
      doj : "01-04-1970",
      title : "Director",
      skillSet : "Management",
      imageUrl : "https://images.unsplash.com/photo-1698584109676-f0d1515a9fe7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5OTk0ODAzMQ&ixlib=rb-4.0.3&q=80&w=300"
    }

  ];

  return (
    <div className="h-screen flex-1 p-2 bg-gray-200">
        <div className='bg-white shadow-[10px_20px_20px_10px_#00000000] py-6 px-6 pr-8 ml-2'>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl">Hello World</h1>
        </div>
        <div className="p-2 ml-2 mt-2">
          <div className="grid grid-cols-4 h-full">
            <div className="bg-white shadow-[10px_20px_20px_10px_#00000024] border border-inevitable-blue border-spacing-2 p-2 m-2 items-center text-center font-bold text-black">
              <FcPieChart /> Goals
            </div>
            <div className="bg-white shadow-[10px_20px_20px_10px_#00000024] border border-inevitable-blue border-spacing-2 p-2 m-2 items-center text-center font-bold text-black">
              <FcCalendar /> Leaves
            </div>
            <div className="bg-white shadow-[10px_20px_20px_10px_#00000024] border border-inevitable-blue border-spacing-2 p-2 m-2 items-center text-center font-bold text-black">
              <GrScorecard /> Operational Excellence
            </div>
            <div className="bg-white shadow-[10px_20px_20px_10px_#00000024] border border-inevitable-blue border-spacing-2 p-2 m-2 items-center text-center font-bold text-black">
              <FcEngineering /> Engineering Excellence
            </div>
          </div>
        </div>
        <div className="px-5 mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          { Employees.map((employee) => (
            <div key = {employee.id} className="shadow-[10px_20px_20px_10px_#00000024] bg-white group relative border border-gray-400 px-5 py-2">
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75">
                <img 
                  src={employee.imageUrl} 
                  alt = ""
                  height="96"
                  width="96"
                  className="object-center p-1 rounded-full mb-4 shadow-lg"
                />
              </div>
              <div className="mt-4 flex justify-between"> 
                <div>
                    <h1 className="text-lg text-black font-bold">
                      <span aria-hidden="true" className="absolute inset-0" />{employee.name}
                    </h1>
                    <p className="mt-1 text-sm text-gray-500">{employee.doj}</p>
                    <p className="mt-1 text-sm text-gray-500">{employee.emailId}</p>
                    <p className="mt-1 text-sm text-gray-500">{employee.title}</p>
                    <span className="mt-1 text-sm text-gray-500" /> {employee.skillSet}
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default MainPage