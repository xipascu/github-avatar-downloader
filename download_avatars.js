var request = require('request');
var https = require('https');
var GITHUB_USER = "xipascu";
var GITHUB_TOKEN = "cb6ac202730aab2d7a2f1e6e6787a0226ed90b40";
var userAgent = 

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
    var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
    var options = {
        url: requestURL,
        headers: {
          'User-Agent': 'Xipascu'
        }
    };

    request(options, function(err, response, body) {
        if (err) {
                //return callback on error msg
            return cb(err);
        } else {
            var data  = JSON.parse(body);
            console.log("The body: ", data);
        }
    })
    

}    



getRepoContributors("jquery", "jquery", function(err, result) {
    console.log("Errors:", err);
    console.log("Result:", result);
  });



//in function:
    // var url =  ``
    // var url = `https://api.github.com/repos/${repoOwner}/${repoName}/contributors`
    // request(url, function (err, response, body) {
    //     if(err) { return cb(err); } // If error - bail out

    //     console.log('Downloaded contributors: ', body);

    // })


//getRepoContributors('jquery', 'jquery', onContributersDownloaded);

//fetch the list of contributors 
//   https://api.github.com/repos/jquery/jquery/contributors

// function onContributersDownloaded(err, contributors) {
//     if(err) {
//         console.error("Error: ", err.message);
//         process.exit(1); // If error - bail out
//     }
//     console.log(contributors);
// }