import React, { useState } from "react";
import '../Styles/DarkMode.css'
import '../Styles/header.css'


const DarkMode = () => {
    let clickedClass ="clicked";
    const body = document.body;
    const lightTheme ="light";
    const darkTheme = "dark";
    let theme;


    
if (localStorage)
{
    theme = localStorage.getItem("theme");

}

if(theme === lightTheme || theme === darkTheme)
{
    body.classList.add(theme);
}
else{
    body.classList.add(lightTheme);
}


const switchTheme = (e) => {
    if(theme === darkTheme){
        body.classList.replace(darkTheme, lightTheme);
        e.target.classList.remove(clickedClass);
        localStorage.setItem("theme", "light");
        theme = lightTheme;
        document.getElementById("text").innerHTML ="Dark";
        document.getElementById("DarkMode").src='./images/icon-moon.svg';
        
        

        
    }else{
        body.classList.replace(lightTheme, darkTheme);
        e.target.classList.add(clickedClass);
        localStorage.setItem("theme", "dark");
        theme = darkTheme;
        document.getElementById("text").innerHTML ="Light";
        document.getElementById("DarkMode").src='./images/icon-sun.svg';
        
        
        
    }
}




    return(
        
        <><h4 id="text" >{theme === lightTheme ?"Dark":"Light"}</h4>
        
        <img className={theme === "dark"?clickedClass: ""}id="DarkMode"  onClick={(e) => switchTheme(e)}  
        src={theme === lightTheme ?"./images/icon-moon.svg":"./images/icon-sun.svg"} alt="icon-theme" width={20} height={20}></img>
        </>

        
    )
}

export default DarkMode;

