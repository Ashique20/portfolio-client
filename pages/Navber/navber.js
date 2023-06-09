import React from "react";


const Navber =()=>{
    return (
        <div>
             <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Ashiqur Rahman</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
    
      <li>
        <details>
          <summary>
          Resume
          </summary>
          <ul className="p-2 bg-base-100">
            <li><a>View</a></li>
            <li><a>Download</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
        </div>
    )
}

export default Navber;