import logo from '../assets/react.svg'

const Navbar = () => {
  return (
    <>
      <div className="container">
        <nav className="flex justify-between mx-5 py-2 text-slate-800 text-lg">
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <ul className="flex justify-center items-center gap-5 font-semibold ">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Portfolio</a>
              <a href="#">Contact</a>
              <button className="btn hover:bg-rose-500 hover:text-white">
                Hire Me
              </button>
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
