if (Posts.find().count() === 0) {
    Posts.insert({
        title: "Introducing Voting", 
        author: "Daniel", 
        url: "http://www.google.com"

    });

    Posts.insert({
        title: "Meteor", 
        author: "Tome Coleman", 
        url: "http://www.meteor.com"

    });
    Posts.insert({
        title: "Discover Meteor", 
        author: "Tom Coleman", 
        url: "http://www.baidu.com"
    });
}

