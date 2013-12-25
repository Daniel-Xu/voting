//here options is a object, passed from subscribe
Meteor.publish('posts', function(options){
    return Posts.find({}, options)
})

Meteor.publish('singlePost', function(id){
    return id && Posts.find(id)
})
//the callback called on the server each time a client subscribes
//and the parameter is the same with subscribing process passes
Meteor.publish('comments', function(postId){
    return Comments.find({postId: postId})
})

Meteor.publish("notifications", function(){
    return Notifications.find({userId: this.userId})
})
