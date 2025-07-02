import { useState } from "react"
import { Link } from "react-router-dom";
function Nav() {
    const [navDrop, setnavDrop] = useState("");

    function activeNavDrop (id) {
        setnavDrop(id);
    }

    const [toggleButton, setToggleButton] = useState(false)

    const clickToggleButton = () => {
        setToggleButton(!toggleButton)
    }

  return (
    <>  
        <div className=" m-auto flex flex-col items-center justify-center my-2" onClick={()=>{navDrop!=="" && activeNavDrop("")}}>
            <div className="w-full flex justify-between px-5">
                <div className="h-[100px] w-full flex items-start">
                    <img className="h-full object-cover " src="./images/SchoolLogo.png" alt="Vivekanand" />
                    <h1 className="h-full flex flex-col justify-center pl-4">
                        <p className="font-extrabold text-2xl md:text-4xl text-[#1c2b4a]">Vivekanand Shikshan Sansthan</p>
                        <p className="md:text-xl text-sm mt-1 text-[#1c2b4a]">Affiliated to Central Board of Secondary Education (CBSE)</p>
                    </h1>
                </div>
                <div className=" cursor-pointer flex items-center visible md:hidden" onClick={clickToggleButton}>
                    {
                        !toggleButton?
                        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="24px" fill="#1C2C46"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="24px" fill="#1C2C46"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                    }
                </div>
                
            </div>
            <ul className="md:flex hoverNav w-full hidden p-5 itmes-center gap-5 md:gap-15 font-Lato justify-center font-bold text-md text-white mt-2 bg-[#1c2b4a] py-2 ">
                <Link to='/'><li>Home</li></Link>
                 <Link to="/about"><li>About Us</li></Link>
                <li><span className="flex flex-cols" onClick={()=>{activeNavDrop("projectDescription")}}> Project Description 
                    <svg className="-rotate-90" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
                    </span> 
                    {
                        navDrop==="projectDescription" && 
                        <ul className="p-3 absolute font-normal hoverNav text-[#1c2b4a] py-2 z-11 px-4 bg-white rounded-md shadow-xl">
                         <Link to="/education"><li>Education</li></Link>
                         <Link to="/livelihood"><li>Livelihood Program</li></Link>
                        <Link to="/environment"><li>Environment</li></Link>
                         <Link to="/womenempowerment"><li>Woman Empowerment</li></Link>
                         <Link to="/tribalregion"><li>Working In Tribal Region</li></Link>
                         <Link to="/medical"><li>Medical</li></Link>
                    </ul>
                    }
                </li>
                <li> <span className="flex flex-cols" onClick={()=>{activeNavDrop("mediaCenter")}}> Media Center
                    <svg className="-rotate-90" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
                    </span> 
                    {
                        navDrop==="mediaCenter"&&
                        <ul className="p-3 absolute font-normal hoverNav text-[#1c2b4a] bg-white py-2 px-4 shadow-xl rounded-md z-11 ">
                        <Link to="/news"><li>Events & News</li></Link>
                        <Link to="/gallery"><li> Gallery</li></Link> 
                    </ul>
                    }
                </li>
                <li>Our Team</li>
                 <Link to='/support'><li>Support Us</li></Link> 
                 <Link to='/contact'><li>Contact Us</li></Link>
            </ul>
            {
                toggleButton &&
                <ul className=" hoverNav w-full md:hidden flex flex-col md:flex-row p-5 itmes-center gap-5 md:gap-15 font-Lato justify-center font-bold text-md text-white mt-2 bg-[#1c2b4a] py-2 ">
                   <Link to='/'> <li>Home</li></Link>
                     <Link to="/about"><li>About Us</li></Link>
                    <li><span className="flex flex-cols" onClick={()=>{activeNavDrop("projectDescription")}}> Project Description
                        <svg className="-rotate-90" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
                    </span> 
                        {
                            navDrop==="projectDescription" && 
                            <ul className="p-3 absolute font-normal hoverNav text-[#1c2b4a] py-2 z-11 px-1 bg-white rounded-md">
                                <Link to="/education"><li>Education</li></Link>
                                 <Link to="/livelihood"><li>Livelihood Program</li></Link>
                                <Link to="/environment"><li>Environment</li></Link>
                                 <Link to="/womenempowerment"><li>Woman Empowermen</li>t</Link>
                                <Link to="/tribalregion"><li> Working In Tribal Region</li></Link>
                                 <Link to="/medical"><li>Medical</li></Link>
                            </ul>
                        }
                    </li>
                    <li> <span className="flex flex-cols" onClick={()=>{activeNavDrop("mediaCenter")}}> Media Center 
                        <svg className="-rotate-90" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
                        </span> 
                        {
                            navDrop==="mediaCenter"&&
                            <ul className="p-3 absolute font-normal hoverNav text-[#1c2b4a] bg-white py-2 px-1 rounded-md z-11">
                            <Link to="/news"><li>Events & News</li></Link>
                             <Link to="/gallery"><li>Gallery</li></Link> 
                            </ul>
                        }
                    </li>
                    <li>Our Team</li>
                     <Link to='/support'><li>Support Us</li></Link> 
                     <Link to='/contact'><li>Contact Us</li></Link>
                </ul>
                
            }
            
        </div>
    </>
    
  )
}

export default Nav