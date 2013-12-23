//notice that there's no var before variable
//so it will be accessible in the whole app
Posts = new Meteor.Collection('posts');

Posts.allow({
    //insert: function(userId, doc){
        //return !! userId; 
    //}

    update: ownsDocument,
    remove: ownsDocument,
    fetch: ['userId']
})

Posts.deny({
    update: function(userId, doc, fieldNames){
        return (_.without(fieldNames, 'title', 'url').length > 0)
    }
})



Meteor.methods({
    post: function(postAttributes){
        var user = Meteor.user(), postWithSameLink = Posts.findOne({ url: postAttributes.url})

        if(!user)
            throw new Meteor.Error(401, " You need to log in!");

        if(!postAttributes.title)
            throw new Meteor.Error(422, " Title counld not be empty!");

        if(postAttributes.url && postWithSameLink)
            throw new Meteor.Error(302, " The url are already be post");
        

        var post = _.extend(_.pick(postAttributes, 'url', 'title', 'message'), {
            userId: user._id, 
            author: user.username,
            submitted: new Date().getTime()
        })
    
        var postId = Posts.insert(post);
        return postId;
    }

})
