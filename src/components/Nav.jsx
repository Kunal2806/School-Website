import { useState } from "react"
import { Link } from "react-router-dom";
function Nav() {
    // const [navDrop, setnavDrop] = useState("");

    // function activeNavDrop (id) {
    //     setnavDrop(id);
    // }

    const [toggleButton, setToggleButton] = useState(false)

    const clickToggleButton = () => {
        setToggleButton(!toggleButton)
    }

  return (
    <>  
        <div className=" m-auto flex flex-col items-center justify-center my-2" onClick={()=>{navDrop!=="" && activeNavDrop("")}}>
            <div className="w-full flex justify-between px-5">
                <div className="h-[100px] w-full flex items-start">
                    <img className="h-full object-cover " src="./images/logo.png" alt="Vivekanand" />
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
                <li><Link to='/'>Home</Link></li>
                <li> <Link to="/about">About Us</Link></li>
                <li><Link to="/project"><span className="flex flex-cols" onClick={()=>{activeNavDrop("projectDescription")}}> Project Description 
                    {/* <svg className="-rotate-90" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg> */}
                    </span> </Link>
                    {/* {
                        navDrop==="projectDescription" && 
                        <ul className="p-3 absolute font-normal hoverNav text-[#1c2b4a] py-2 z-11 px-1 bg-white rounded-md">
                        <li>Education</li>
                        <li>Livelihood Program</li>
                        <li>Environment</li>
                        <li>Woman Empowerment</li>
                        <li>Working In Tribal Region</li>
                        <li>Medical</li>
                    </ul>
                    } */}
                </li>
                <li> <span className="flex flex-cols" onClick={()=>{activeNavDrop("mediaCenter")}}> <Link to="/media">Media Center</Link>
                    {/* <svg className="-rotate-90" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg> */}
                    </span> 
                    {/* {
                        navDrop==="mediaCenter"&&
                        <ul className="p-3 absolute font-normal hoverNav text-[#1c2b4a] bg-white py-2 px-1 rounded-md z-11">
                        <li>Events & News</li>
                        <li>Gallery</li>
                    </ul>
                    } */}
                </li>
                <li>Our Team</li>
                <li> <Link to='/support'>Support Us</Link> </li>
                <li> <Link to='/contact'>Contact Us</Link></li>
            </ul>
            {
                toggleButton &&
                <ul className=" hoverNav w-full md:hidden flex flex-col md:flex-row p-5 itmes-center gap-5 md:gap-15 font-Lato justify-center font-bold text-md text-white mt-2 bg-[#1c2b4a] py-2 ">
                    <li><Link to='/'>Home</Link></li>
                    <li> <Link to="/about">About Us</Link></li>
                    <li><span className="flex flex-cols" onClick={()=>{activeNavDrop("projectDescription")}}> Project Description
                         {/* <svg className="-rotate-90" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg> */}
                    </span> 
                        {/* {
                            navDrop==="projectDescription" && 
                            <ul className="p-3 absolute font-normal hoverNav text-[#1c2b4a] py-2 z-11 px-1 bg-white rounded-md">
                                <li>Education</li>
                                <li>Livelihood Program</li>
                                <li>Environment</li>
                                <li>Woman Empowerment</li>
                                <li>Working In Tribal Region</li>
                                <li>Medical</li>
                            </ul>
                        } */}
                    </li>
                    <li> <span className="flex flex-cols" onClick={()=>{activeNavDrop("mediaCenter")}}> Media Center 
                        {/* <svg className="-rotate-90" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg> */}
                        </span> 
                        {/* {
                            navDrop==="mediaCenter"&&
                            <ul className="p-3 absolute font-normal hoverNav text-[#1c2b4a] bg-white py-2 px-1 rounded-md z-11">
                            <li>Events & News</li>
                            <li>Gallery</li>
                        </ul>
                        } */}
                    </li>
                    <li>Our Team</li>
                    <li> <Link to='/support'>Support Us</Link> </li>
                    <li> <Link to='/contact'>Contact Us</Link></li>
                </ul>
                
            }
            
        </div>
    </>
    
  )
}

export default Nav