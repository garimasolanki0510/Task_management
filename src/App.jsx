import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <div className="w-[100vw] h-[100vh] bg-red-900">
      {/* <div>
        <Navbar />
      </div> */}
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <AppRoutes />
      </div>
    </div>
  );
}
