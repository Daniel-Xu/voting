//notice that there's no var before variable
//so it will be accessible in the whole app
Posts = new Meteor.Collection('posts');

Posts.allow({
    insert: function(userId, doc){
        return !! userId; 
    }
})
