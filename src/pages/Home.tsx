import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="w-screen h-screen bg-gray-800 text-white text-center">
      <h2>Welcome</h2>
      <div className="flex justify-around">
        <Link to="/login">Login
        </Link>
        <Link to="/register">Register</Link>
        <Link to="/dash">DashBoard</Link>
      </div>
    </div>
  )
}

export default Home