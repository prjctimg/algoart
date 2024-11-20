const Navbar = (props)=>{

return <div className="navbar bg-base-100">
<div className="navbar-start">
  <div className="dropdown">
    
    {/* biome-ignore lint/a11y/useSemanticElements: This div component is housing other elements */}
    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
      <svg 
      
      alt='Menu icon'
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h8m-8 6h16" />
      </svg>
    </div>
    <ul
    
      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
      <li><a href='/'>Home</a></li>
      <li>
        <a href='/guides'>Guides</a>
        
      </li>
      <li><a href='/playground'>Playground</a></li>
    </ul>
  </div>
  <a href='/' className="btn btn-ghost text-xl">algo-art</a>
</div>
<div className="navbar-center hidden lg:flex">
  <ul className="menu menu-horizontal px-1">
    <li><a href='/'>Home</a></li>
    <li>
      <a href="/guides">Guides</a>
    </li>
    <li><a href='/playground'>Playground</a></li>
  </ul>
</div>


{/* Add links here to socials */}
<div className="navbar-end">
  <a className="btn">Socials</a>
</div>
</div>

}


export default Navbar


