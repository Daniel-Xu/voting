var postsData = [
    {
        title: "introducing Voting", 
        author: "helloworld",
        url: 'http://www.baidu.com'
    },

    {
        title: "introducing Google", 
        author: "helloworld 2",
        url: 'http://www.google.com'
        
    },

    {
        title: "introducing Riverhouse", 
        author: "helloworld3",
        url: 'http://www.codeschool.com'
    },
];

Template.postsList.helpers({
    posts: postsData
});

