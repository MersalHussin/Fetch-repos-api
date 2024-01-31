// Main Variables
let theInput = document.querySelector("input[type='text']") 
let getButton  = document.querySelector(".add-name span")
let reposData = document.querySelector(".show-date")


getButton.onclick = function(){
    
    if(theInput.value === ""){
        reposData.innerHTML = "<span>No Date Found</span>"
    }else{
        let name = theInput.value   
        fetch(`https://api.github.com/users/${name}/repos`)
        .then((res)=> res.json())
        .then((repos)=>{
            // console.log(repos[0]["name"]) هيجيب الأراي الاولي بالأسم بتاعها
            //Empty The Container
            reposData.innerHTML = ""

            //Loop On Repositories
            repos.forEach(repo => {
                console.log(repo.name)
                
                //Create The Main Div Element
                let mainDiv = document.createElement("div")

                //Add Class To mainDiv
                mainDiv.className = "repo-box"
    
                //Create Repo Name Text
                let p =document.createElement("p")

                let repoName = document.createTextNode(repo.name)
                
                p.appendChild(repoName)

                //Append repo To Main Div
                mainDiv.appendChild(p)

                //Append To repos Data
                reposData.appendChild(mainDiv)

            /* --------------------------
                   --- New code ---
             --------------------------*/

                //Create Repo URL Anchor Tag
                theUrl = document.createElement("a")

                //Create Repo Text 
                theUrlTxt = document.createTextNode("Visit")

                //Append theUrlTxt To a
                theUrl.appendChild(theUrlTxt)

                //add href link
                theUrl.href = `https://github.com/${name}/${repo.name}`
                
                // Set Attribute Blank
                theUrl.setAttribute("target","_blank")

                //Append Url Anchor To Main
                mainDiv.appendChild(theUrl)

            /* --------------------------
                   --- New code ---
             --------------------------*/

                //Create Repo URL Anchor Tag
                theUrl = document.createElement("a")

                //Create Repo Text 
                theUrlTxt = document.createTextNode("Visit Live")

                //Append theUrlTxt To a
                theUrl.appendChild(theUrlTxt)

                //add href link
                theUrl.href = `https://${name}.github.io/${repo.name}`
                
                // Set Attribute Blank
                theUrl.setAttribute("target","_blank")

                //Append Url Anchor To Main
                mainDiv.appendChild(theUrl)

             /* --------------------------
                   --- New code ---
             --------------------------*/

                //Create Stars Count Span
                let starsSpan = document.createElement("span")

                //Create Stars Txt
                let starsTxt = document.createTextNode(`Stars: ${repo.stargazers_count}`)

                //Add Append to span
                starsSpan.appendChild(starsTxt)

                //Add To MainDiv
                mainDiv.appendChild(starsSpan)
                

            });
        })
    }

}
//Get Repos Function

function getRepos(){
    console.log("function Get Repos")
}
