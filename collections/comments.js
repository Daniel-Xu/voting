Comments = new Meteor.Collection("comments")

Meteor.methods({
    comment: function(commentAttributes){
        var user = Meteor.user()
        var post = Posts.findOne(commentAttributes.postId)

        if(!user)
            throw new Meteor.Error(401, " You need to log in!")

        if(!commentAttributes.body)
            throw new Meteor.Error(422, " Title counld not be empty!")

        if(!post)
            throw new Meteor.Error(422, " You must comment on a post")

        var comment = _.extend(_.pick(commentAttributes, 'body', 'postId'), {
            userId: user._id, 
            author: user.username,
            submitted: new Date().getTime()
        })
    
        comment._id = Comments.insert(comment)
        Posts.update(comment.postId, {$inc: {commentsCount: 1}})
        createCommentNotification(comment)
        return comment._id;
    }
})
