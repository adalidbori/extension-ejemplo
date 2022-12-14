var countTweets = 0;
function obtenerTweets(){
    var elementos = document.getElementsByClassName("css-1dbjc4n r-1ta3fxp r-18u37iz r-1wtj0ep r-1s2bzr4 r-1mdbhws");
    
    
    var para = document.createElement("span");
    //para.innerText = "Adalid"
    Array.from(elementos).forEach(element => {
        element.appendChild(para);
        console.log('Twitter post count: ')
    });
}

// count tweets on page load
document.addEventListener('load', () => obtenerTweets());

// oftentimes, tweets render after onload. LCP should catch them.
new PerformanceObserver((entryList) => {
  obtenerTweets();
}).observe({type: 'largest-contentful-paint', buffered: true});

// re-check as user scrolls
document.addEventListener('scroll', () => obtenerTweets());

/*Array.from(document.getElementsByClassName("css-1dbjc4n r-1ta3fxp r-18u37iz r-1wtj0ep r-1s2bzr4 r-1mdbhws")).forEach(element => {
        element.appendChild(document.createElement("span"));
    });*/
    