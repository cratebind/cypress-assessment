export default function Dashboard() {
  return (
<div className="min-h-screen flex flex-row bg-gray-100">
  <div className="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
    <div className="flex items-center justify-center h-20 shadow-md">
    <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
    </div>
    <ul className="flex flex-col py-4">
      <li>
        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800  focus:text-indigo-600 focus:text-indigo-600">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
          <span className="text-sm font-medium">Dashboard</span>
        </a>
      </li>
      <li>
        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800  focus:text-indigo-600">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-user"></i></span>
          <span className="text-sm font-medium">Profile</span>
        </a>
      </li>
      <li>
        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800  focus:text-indigo-600">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-bell"></i></span>
          <span className="text-sm font-medium">Notifications</span>
          <span className="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">5</span>
        </a>
      </li>
      <li>
        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800  focus:text-indigo-600">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-log-out"></i></span>
          <span className="text-sm font-medium">Logout</span>
        </a>
      </li>
    </ul>
  </div>
  
  <div className="min-h-full w-full flex flex-col py-12 pt-48 sm:px-6 lg:px-8">
    <div className="border-b border-gray-200 shadow">
        <table className="divide-y divide-gray-300 w-full">
            <thead className="bg-gray-50 text-left">
                <tr>
                    <th className="px-6 py-2 text-xs text-gray-500">
                        ID
                    </th>
                    <th className="px-6 py-2 text-xs text-gray-500">
                        Name
                    </th>
                    <th className="px-6 py-2 text-xs text-gray-500">
                        Email
                    </th>
                    <th className="px-6 py-2 text-xs text-gray-500">
                        Created_at
                    </th>
                    <th className="px-6 py-2 text-xs text-gray-500">
                        Edit
                    </th>
                    <th className="px-6 py-2 text-xs text-gray-500">
                        Delete
                    </th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-300">
                <tr className="whitespace-nowrap">
                    <td className="px-6 py-4 text-sm text-gray-500">
                        1
                    </td>
                    <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">
                            Jon doe
                        </div>
                    </td>
                    <td className="px-6 py-4">
                        <div className="text-sm text-gray-500">jhondoe@example.com</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                        2021-1-12
                    </td>
                    <td className="px-6 py-4">
                        <a href="#" className="px-4 py-1 text-sm text-blue-600 bg-blue-200 rounded-full focus:outline">Edit</a>
                    </td>
                    <td className="px-6 py-4">
                        <a href="#" className="px-4 py-1 text-sm text-red-400 bg-red-200 rounded-full focus:outline">Delete</a>
                    </td>
                </tr>
                <tr className="whitespace-nowrap">
                    <td className="px-6 py-4 text-sm text-gray-500">
                        1
                    </td>
                    <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">
                            Jon doe
                        </div>
                    </td>
                    <td className="px-6 py-4">
                        <div className="text-sm text-gray-500">jhondoe@example.com</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                        2021-1-12
                    </td>
                    <td className="px-6 py-4">
                        <a href="#" className="px-4 py-1 text-sm text-blue-600 bg-blue-200 rounded-full focus:outline">Edit</a>
                    </td>
                    <td className="px-6 py-4">
                        <a href="#" className="px-4 py-1 text-sm text-red-400 bg-red-200 rounded-full focus:outline">Delete</a>
                    </td>
                </tr>
                <tr className="whitespace-nowrap">
                    <td className="px-6 py-4 text-sm text-gray-500">
                        1
                    </td>
                    <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">
                            Jon doe
                        </div>
                    </td>
                    <td className="px-6 py-4">
                        <div className="text-sm text-gray-500">jhondoe@example.com</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                        2021-1-12
                    </td>
                    <td className="px-6 py-4">
                        <a href="#" className="px-4 py-1 text-sm text-blue-600 bg-blue-200 rounded-full focus:outline">Edit</a>
                    </td>
                    <td className="px-6 py-4">
                        <a href="#" className="px-4 py-1 text-sm text-red-400 bg-red-200 rounded-full focus:outline">Delete</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

</div>
  )
}