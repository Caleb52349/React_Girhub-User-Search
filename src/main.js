import React, { useEffect, useState } from "react"
import './Styles/main.css';



const avatar = 'https://avatars.githubusercontent.com/u/583231?v=4'
const username = 'https://github.com/octocat'

function Main() {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [userName, setUsername] = useState('');
    const [followers, setFollowers] = useState('');
    const [following, setFollowing] = useState('');
    const [repos, setRepos] = useState('');
    const [avatar, setAvatar] = useState('');
    const [userInput, setUserInput] = useState('');
    const [location, setLocation] = useState('');
    const [blog, setBlog] = useState('');
    const [twitter, setTwitter] = useState('');
    const [company, setCompany] = useState('');
    const [bio, setBio] = useState('');
    const [userlink, setUserLink] = useState('');
    const [error, setError] = useState(null);
    

    useEffect(() => {
        fetch("https://api.github.com/users/octocat")
            .then(res => res.json())
            .then(data => {
                setData(data);

            });
    }, []);

    const setData = ({
        name,
        created_at,
        login,
        followers,
        following,
        public_repos,
        avatar_url,
        location,
        blog,
        twitter_username,
        company,
        bio,
        html_url
    }) => {
        setName(name);
        setDate(created_at);
        setUsername(login);
        setFollowers(followers);
        setFollowing(following);
        setRepos(public_repos);
        setAvatar(avatar_url);
        setLocation(location);
        setBlog(blog);
        setTwitter(twitter_username);
        setCompany(company);
        setBio(bio);
        setUserLink(html_url);
    };

    const dateFormat = (date)=>{
        const arrDate = date.slice(0, 10).split("-");
        let newDate = new Date(arrDate);
        const dateFormatted = `${arrDate[2]} ${newDate.toLocaleString("en-us", {
        month: "short",
        year: "numeric",
        })}`;
        return dateFormatted;
    };

    const handleSearch = e => {
        setUserInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://api.github.com/users/${userInput}`)
            .then(res => res.json())
            .then(data => {
                if (data.message) {
                    setError(data.message)
                } else {
                    setData(data);
                    setError(null);
                }
            })
    }
    return ( 
        <main>
        <div className = "search-bar" >
        <form onSubmit = { handleSubmit } >
        <img src = "./images/icon-search.svg"alt = "icon-searchbar"width = { 25 }height = { 24 }></img> 
        <input type = "text"onChange = {handleSearch} placeholder = "Search Github username" ></input> 
        <button className = "btn"> Search </button> 
        </form> 
        </div> {error ? (<h1> {error} </h1>):(
                <div className = "profile-card">
                <div className = "avatar" >
                <img alt src = {avatar}></img>
                </div> 
                <div className = "infos" >
                <h2 className = "name"> {name} </h2> 
                <p className = "username" ><a href = {userlink}target = "_blank">@{ userName } </a></p>
                <p className = "joined_at"> Joined {dateFormat(date)} </p> 
                </div> 
                <div className = "bio" >
                <p className = "disabled" > {bio ? ( <p> {bio} </p>) :(<h2>This profile has no bio</h2>)}</p> 
                </div> 
                <div className = "stats">
                <div className = "stat">
                <p className = "label"> Repos </p> 
                <p className = "value"> { repos } </p> 
                </div> 
                <div className = "stat">
                <p className = "label"> Followers </p> <p className = "value" > {followers} </p> 
                </div> 
                <div className = "stat" >
            <p className = "label" > Following </p> <
                p className = "value" > {following} </p> 
                </div> 
                </div> 
                <div className = "contacts">
                <div className = "contact location" >
                <div className = "icon" >
                <img src = "./images/icon-location.svg" ></img> 
                </div> 
                <p> { location ? ( <p> {location} </p>) : (<p>Not available</p> ) } </p> 
                </div> 
                <div className = "contact blog">
                <div className = "icon">
                <img src = "./images/icon-website.svg"></img> 
                </div> 
                <p> {blog ? (<p> {blog} </p>) : (<p>Not available</p>) }</p>
                </div> 
                <div className = "contact twitter disabled">
                <div className = "icon">
                <img src = "./images/icon-twitter.svg"></img>
                </div> 
                <p> <span> </span>{twitter ?(<p>{twitter}</p >) : (<p> Not available </p>)}</p>
                </div> 
                <div className = "contact company">
                <div className = "icon">
                <img src = "./images/icon-company.svg"></img> 
                </div> 
                <p> {company ? (<p> {company} </p>) : (<p>Not available</p> )}</p> 
                </div> 
                </div> 
            </div>
            )
        } 
        </main>
    );
}

export default Main