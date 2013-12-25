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
    //posts: function(){
        //return Posts.find({}, {sort: {submitted: -1}});
    //}
    //
    hasMorePosts: function(){
        //without rewind, fetch will be called only once
        this.posts.rewind();

        //if current cursor has 5 post, and the limit is 5, we suppose there's still
        //post in the database, but it also can be 0. This is just a imperfection.
        return Router.current().limit() == this.posts.fetch().length
    }
});

