import { Badge } from "antd"
import { Plus } from "lucide-react"

export const App = () => {
  return (
    <div className="bg-gray-200 min-h-screen overflow-hidden">
      <nav className="bg-white h-16 w-full fixed top-0 left-0">

      </nav>
      <section className="w-full fixed left-0 top-16 h-[calc(100%-128px)] overflow-y-visible overflow-x-auto grid grid-cols-3 gap-5 p-6">
        {/* Highest box */}
        <div className="h-full min-h-0">
          <Badge.Ribbon
            text="Highest"
            className="bg-gradient-to-br from-rose-500 via-pink-500 to-rose-500 font-medium"
          />
          <div className="bg-white p-6 rounded-lg h-full">
            <button className="bg-gradient-to-br from-blue-600 via-violet-500 to-blue-600 text-white flex items-center justify-center gap-1 font-medium py-2 px-3 text-xs rounded-md cursor-pointer hover:scale-105 transition duration-300 focus:shadow-lg">
              <Plus className="w-4 h-4"/>
              Add Task
            </button>
          </div>
        </div>
        {/* Medium box */}
        <div className="h-full min-h-0">
          <Badge.Ribbon
            text="Medium"
            className="bg-gradient-to-br from-indigo-500 via-blue-500 to-indigo-500 font-medium"
          />
          <div className="bg-white p-14 rounded-lg h-full">

          </div>
        </div>
        {/* Lowest box */}
        <div className="h-full min-h-0">
          <Badge.Ribbon
            text="Lowest"
            className="bg-gradient-to-br from-amber-500 via-orange-500 to-amber-500 font-medium"
          />
          <div className="bg-white p-14 rounded-lg h-full">

          </div>
        </div>
      </section>
      <footer className="bg-white h-16 w-full fixed bottom-0 left-0">

      </footer>
    </div>
  )
}