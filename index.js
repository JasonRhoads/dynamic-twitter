let users = {
    user1:  {
    userName: '@elonmusk',
    displayName: 'Elon Musk',
    joinedDate: 'June 2009',
    followingCount: 103,
    followerCount: 47900000,
    avatarURL: 'assets/elonmusk.jpg',
    coverPhotoURL: 'assets/elonmusk-cover.jpeg',
    verified: true,
    tweets: [
        {
            text: 'I admit to judging books by their cover',
            timestamp: '2/10/2021 00:01:20',
            reply: 150000,
            retweet: 500000,
            like: 1000000
        },
        {
            text: 'Starship to the moon',
            timestamp: '2/09/2021 18:37:12',
            reply: 152000,
            retweet: 400000,
            like: 1200000
        },
        {
            text: 'Out on launch pad, engine swap underway',
            timestamp: '2/09/2021 12:11:51',
            reply: 153000,
            retweet: 300000,
            like: 1300000
        }
    ]
    },

    user2: {
    userName: '@BillGates',
    displayName: 'Bill Gates',
    joinedDate: 'June 2009',
    followingCount: 274,
    followerCount: 53800000,
    avatarURL: 'assets/billgates.jpg',
    coverPhotoURL: 'assets/billgates-cover.jpeg',
    verified: false,
    tweets: [
        {
            text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
            timestamp: '2/10/2021 00:01:20',
            reply: 159000,
            retweet: 500000,
            like: 1700000
        },
        {
            text: 'Should I start tweeting memes? Let me know in a comment.',
            timestamp: '2/09/2021 18:37:12',
            reply: 158000,
            retweet: 1234000,
            like: 1200000
        },
        {
            text: 'In 2020, I read a book every hour.',
            timestamp: '2/09/2021 12:11:51',
            reply: 157000,
            retweet: 512000,
            like: 1900000
        }
    ]
    }
};

//hides message when Javascritp is enabled
$("#no-javascript").css('display', 'none');

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let user = users[urlParams.get('user')] || users["user1"]

// header container
$('.header-container').html(`<button class="back-button">←</button>
<div class="header-name">
    <h1> ${user.displayName} ${isVerified()}</h1>
    <p>${roundNumber(user.tweets.length)} Tweets</p>
</div>`);

//cover photo container
$('.cover-photo-container').css(`background-image`, `url("./${user.coverPhotoURL}")`)
$('.cover-photo-container').html(`<img class="avatar" src=${user.avatarURL}>`)

//profile details container
$('.profile-details-container').html(`
<button class="follow-button" id="follow-button">Follow</button>
<div class="header-name">
    <h1> ${user.displayName} ${isVerified()}</h1>
    <p>${user.userName}</p>
</div>
<p><img class="calendar-icon" src="./assets/calendar.svg"> Joined ${user.joinedDate}</p>
<p><span class="black-bold-font">${user.followingCount}</span> Following <span class="black-bold-font">${roundNumber(user.followerCount)}</span> Followers</p>
`);

//tweets container

$('.tweets-container').html(`
<div class="selector">
    <div class="tab tab-active">
        Tweets
    </div>
    <div class="tab">
        Tweets & replies
    </div>
    <div class="tab">
        Media
    </div>
    <div class="tab">
        Likes
    </div>
</div>
<div class="content">
    <div id="tweets" class="content-body show-active">
    </div>
    <div id="tweets-replies" class="content-body">
        <p>tweets and replies</p>
    </div>
    <div id="media" class="content-body">
        <p>media</p>
    </div>
    <div id="likes" class="content-body">
        <p>likes</p>
    </div>
</div>
`);

for (let i = 0; i < user.tweets.length; i++) {
    $('#tweets').append(`<div class="tweet">
    <div> 
        <img class="avatar-tiny" src=${user.avatarURL} /> 
    </div>
    <div class="tweet-content">
        <div class="tweet-header">
        <span class="black-bold-font">${user.displayName}</span> ${isVerified()} 
        <span class="grey-color">${user.userName} 
            <span class="dot-seperator"></span> 
        ${formatDate(user.tweets[i].timestamp)}</span>
        <a href="#"><img class="tweet-icon menu-icon" src="./assets/menu.png" /></a>
        </div>
        <div class="tweet-text">
            ${user.tweets[i].text}
        </div>
        <div class="tweet-icons">
            <a href="#" class="hover-blue"><img class="tweet-icon grey-icon" src="./assets/speech-bubble.png" /> ${roundNumber(user.tweets[i].reply)}</a>
            <a href="#" class="hover-green"><img class="tweet-icon" src="./assets/retweet.jpg" /> ${roundNumber(user.tweets[i].retweet)}</a>
            <a href="#" class="hover-pink"><img class="tweet-icon grey-icon" src="./assets/heart.png" /> ${roundNumber(user.tweets[i].like)}</a>
            <a href="#"><img class="tweet-icon grey-icon" src="./assets/data-analytics.png" /></a>
            <a href="#"><img class="tweet-icon grey-icon" src="./assets/share.svg" /></a>
        </div>
    </div>
</div>`)
}

//'2/10/2021 00:01:20'
function formatDate(date) {
    return new Date(date).toLocaleDateString('en-us', {year:"numeric", month:"short", day:"numeric"}) ;
}

function isVerified() {
    return (user.verified) ? `<img class="twitter-verified-badge" src ="./assets/Twitter_Verified_Badge.svg" />` : "";
}

function roundNumber(number) {
    if (number >= 1000000) {
        return (number / 1000000).toFixed(1) + "M";
    } else if (number > 1000) {
        return (number / 1000).toFixed(1) + "K";
    } else {
        return number;
    }
}

// //function to remove show-active class & add to clicked 
// function setNewActive(el) {
//     //select all .content-body
//     let contentBodies = document.getElementsByClassName('content-body');
//     //remove. show-active
//     for (let contentBody of contentBodies) {
//         contentBody.classList.remove('show-active');
//     }
//     //add .show-active back to clicked
//     document.getElementById(el.textContent.trim()).classList.add('show-active');

//     let tabs = document.getElementsByClassName('tab');

//     for (let tab of tabs) {
//         tab.classList.remove('tab-active');
//     }
//     el.classList.add('tab-active');
// }


// //select tab class, and loop through
// let tabs = document.getElementsByClassName('tab');
// for (var tab of tabs) {
//     //add click listener to each tab
//     tab.addEventListener('click', e => {
//         setNewActive(e.currentTarget);
//     })
// }
    