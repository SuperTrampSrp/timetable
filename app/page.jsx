import NavBar from "@/components/NavBar"
import Dashboard from "./dashboard/page"


export default function Home() {
  return (
    
    <div className="bg-slate-600 h-full w-full font-popi">

      <NavBar />
      <div className="px-20 py-10">
        <Dashboard />
      </div>
    </div>

  )
}
