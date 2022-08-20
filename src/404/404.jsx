import React from "react";
import './404.css'
import { Link } from "react-router-dom";

const Page = () =>{
  return(
    <div>
        <div class="noise"></div>
<div class="overlay"></div>
<div class="terminal">
  <h1>Error <span class="errorcode">404</span></h1>
  <p class="output">The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
  <p class="output">Please try to <a href="#1">go back</a> or <Link to={'/back'}>return to the homepage</Link>.</p>
  <p class="output">Good luck.</p>
</div>
    </div>
  )
}

export default Page