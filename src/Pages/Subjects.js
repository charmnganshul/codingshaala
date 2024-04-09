import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Subjects() {
    const navigate = useNavigate()
    const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`bg-yellow-600 flex flex-col text-white w-64 ${
          sidebarOpen ? "" : "hidden lg:flex"
        }`}
      >
        <div className="p-4 text-2xl font-bold">Dashboard</div>
        {/* Add sidebar links here */}
        <ul className="py-2 px-4">
          <li className="mb-2">
            <a href="#" className="block text-white hover:text-gray-300">
              Students
            </a>
          </li>
          <li className="mb-2">
            <a onClick={()=>navigate('/subjects')} className="block cursor-pointer text-white hover:text-gray-300">
              Subjects
            </a>
          </li>
          
        </ul>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <div className="bg-green-600 p-4">
          <button
            className="text-white focus:outline-none"
            onClick={toggleSidebar}
          >
            ☰
          </button>
          {/* <span className="text-2xl font-bold ml-4">Student Management</span> */}
        </div>

        {/* Main content goes here */}
        <div className="flex flex-col gap-4 overflow-x-hidden overflow-y-auto p-4">
          <div className="bg-red-400 flex justify-between">
            <label className="text-2xl">Subjects</label>
            <nav className="rounded-md">
              <ol className="list-reset flex">
                <li>
                  <a
                    href="#"
                    className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <span className="mx-2 text-neutral-500 dark:text-neutral-400">
                    /
                  </span>
                </li>
                <li className="text-neutral-500 dark:text-neutral-400">
                Subjects
                </li>
              </ol>
            </nav>
          </div>
          <div className="flex flex-wrap justify-between">
            <div className="w-[23%] h-[14vh] flex justify-between p-4 items-center bg-cyan-200 rounded-xl">
              <div className="flex flex-col text-center text-md">
                <label>All Courses</label>
                <label className="text-xl font-bold">04/06</label>
              </div>
              <img src="https://preschool.dreamstechnologies.com/template/assets/img/icons/teacher-icon-01.svg"></img>
            </div>
            <div className="w-[23%] h-[14vh] flex justify-between p-4 items-center bg-cyan-200 rounded-xl">
              <div className="flex flex-col text-center text-md">
                <label>All Projects</label>
                <label className="text-xl font-bold">40/60</label>
              </div>
              <img src="https://preschool.dreamstechnologies.com/template/assets/img/icons/teacher-icon-01.svg"></img>
            </div>
            <div className="w-[23%] h-[14vh] flex justify-between p-4 items-center bg-cyan-200 rounded-xl">
              <div className="flex flex-col text-center text-md">
                <label>Test Attended</label>
                <label className="text-xl font-bold">04/06</label>
              </div>
              <img src="https://preschool.dreamstechnologies.com/template/assets/img/icons/teacher-icon-01.svg"></img>
            </div>
            <div className="w-[23%] h-[14vh] flex justify-between p-4 items-center bg-cyan-200 rounded-xl">
              <div className="flex flex-col text-center text-md">
                <label>Test Passed</label>
                <label className="text-xl font-bold">04/06</label>
              </div>
              <img src="https://preschool.dreamstechnologies.com/template/assets/img/icons/teacher-icon-01.svg"></img>
            </div>
          </div>
          <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">#</th>
                  <th scope="col" className="px-6 py-4">Course Name</th>
                  <th scope="col" className="px-6 py-4">Notes</th>
                  <th scope="col" className="px-6 py-4">Topics Timeline</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                  <td className="whitespace-nowrap px-6 py-4">HTML</td>
                  <td className="whitespace-nowrap px-6 py-4">Otto</td>
                  <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                </tr>
                <tr
                  className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                  <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                  <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                  <td className="whitespace-nowrap px-6 py-4">@fat</td>
                </tr>
                <tr
                  className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
                  <td className="whitespace-nowrap px-6 py-4">Larry</td>
                  <td className="whitespace-nowrap px-6 py-4">Wild</td>
                  <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
          {/* Your main content */}
        </div>
      </div>
    </div>
  )
}

export default Subjects
