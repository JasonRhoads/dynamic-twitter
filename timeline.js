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

let allTweets = [];

for (user in users) {
    for (let i = 0; i < users[user].tweets.length; i++) {
        allTweets.push({timestamp: new Date(users[user].tweets[i].timestamp),
            html: `<div class="tweet">
            <div> 
                <img class="avatar-tiny" src=${users[user].avatarURL} /> 
            </div>
            <div class="tweet-content">
                <div class="tweet-header">
                <span class="black-bold-font">${users[user].displayName}</span> ${isVerified()} 
                <span class="grey-color">${users[user].userName} 
                    <span class="dot-seperator"></span> 
                ${formatDate(users[user].tweets[i].timestamp)}</span>
                <a href="#"><img class="tweet-icon menu-icon" src="./assets/menu.png" /></a>
                </div>
                <div class="tweet-text">
                    ${users[user].tweets[i].text}
                </div>
                <div class="tweet-icons">
                    <a href="#" class="hover-blue"><img class="tweet-icon grey-icon" src="./assets/speech-bubble.png" /> ${roundNumber(users[user].tweets[i].reply)}</a>
                    <a href="#" class="hover-green"><img class="tweet-icon" src="./assets/retweet.jpg" /> ${roundNumber(users[user].tweets[i].retweet)}</a>
                    <a href="#" class="hover-pink"><img class="tweet-icon grey-icon" src="./assets/heart.png" /> ${roundNumber(users[user].tweets[i].like)}</a>
                    <a href="#"><img class="tweet-icon grey-icon" src="./assets/data-analytics.png" /></a>
                    <a href="#"><img class="tweet-icon grey-icon" src="./assets/share.svg" /></a>
                </div>
            </div>
        </div>`
            });
    }
};

allTweets.sort(
    (a, b) => {return a.timestamp - b.timestamp}
);

for (tweet of allTweets) {
    $('#tweets').append(tweet.html);
}


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
