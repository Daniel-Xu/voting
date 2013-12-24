Template.postItem.helpers({
    domain: function(){
        var a = document.createElement('a') 
        a.href = this.url;
        return a.hostname;
    }, 

    ownPost: function(){
        // you should notice: the userId is we add when we create post properties
        // in post.js
        return this.userId == Meteor.userId()
    }, 

    //commentsCount: function(){
        //return Comments.find({postId: this._id}).count()
    //}
});
