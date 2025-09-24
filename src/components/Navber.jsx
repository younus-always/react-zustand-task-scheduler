import { DatePicker } from "antd";
import { Plus } from "lucide-react";

const Navber = ({ timer, showModal }) => {
      return (
            <nav className="flex items-center justify-between bg-gradient-to-r from-red-600 via-slate-700 to-slate-800  text-slate-50 h-16 w-full fixed top-0 left-0 px-4 md:px-8">
                  <div className="flex items-center">
                        <button className="w-10 h-10 rounded-full bg-radial from-blue-600 via-blue-400 to-blue-600 font-bold">Pl</button>
                        <span className="font-bold text-xl ml-px">anner</span>
                  </div>
                  <div className="flex items-center justify-center gap-4">
                        <h3 className="text-xl font-semibold hidden md:block">{timer}</h3>
                        <DatePicker />
                        <button onClick={showModal} className="bg-gradient-to-br from-blue-600 via-violet-500 to-blue-600 text-white flex items-center justify-center gap-1 font-medium py-2 px-3 text-xs rounded-md cursor-pointer hover:scale-105 transition duration-300 focus:shadow-lg">
                              <Plus className="w-4 h-4" />
                              Add Task
                        </button>
                  </div>
            </nav>
      )
}

export default Navber
