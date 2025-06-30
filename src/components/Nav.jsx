import { useState } from "react"

function Nav() {
    const [navDrop, setnavDrop] = useState("");

    function activeNavDrop (id) {
        setnavDrop(id);
    }

  return (
    <>  
        {/* <div className="h-[40px] w-full bg-[#de231c]">
            
        </div> */}
        <div className="m-auto flex gap-20 items-center justify-center my-2" onClick={()=>{navDrop!=="" && activeNavDrop("")}}>
            <div className="h-[80px] ">
                <img className="h-full object-cover" src="./images/logo.png" alt="Vivekanand" />
            </div>
            <ul className=" hoverNav flex gap-15 font-Lato font-bold text-md text-[#1c2b4a]">
                <li>Home</li>
                <li>About Us</li>
                <li><span className="flex flex-cols" onClick={()=>{activeNavDrop("projectDescription")}}> Project Description <svg className="-rotate-90" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1C2C46"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg></span> 
                    {
                        navDrop==="projectDescription" && 
                        <ul className="absolute font-normal hoverNav text-[#1c2b4a]">
                        <li>Education</li>
                        <li>Livelihood Program</li>
                        <li>Environment</li>
                        <li>Woman Empowerment</li>
                        <li>Working In Tribal Region</li>
                        <li>Medical</li>
                    </ul>
                    }
                </li>
                <li> <span className="flex flex-cols" onClick={()=>{activeNavDrop("mediaCenter")}}> Media Center <svg className="-rotate-90" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1C2C46"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg></span> 
                    {
                        navDrop==="mediaCenter"&&
                        <ul className="absolute font-normal hoverNav text-[#1c2b4a]">
                        <li>Events & News</li>
                        <li>Gallery</li>
                    </ul>
                    }
                </li>
                <li>Our Team</li>
                <li>Support Us</li>
                <li>Contact Us</li>
            </ul>
        </div>
    </>
    
  )
}

export default Nav