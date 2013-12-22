Router.configure({
    layoutTemplate: "layout", 
    loadingTemplate: "loading", 
    waitOn: function(){
        return Meteor.subscribe("posts") 
    }
});

//maybe this refers to Router
//I could be wrong
//only guessing
Router.map(function(){
    this.route('postsList', {path: '/'})
    this.route('postPage', {
        path: "/posts/:_id", 
        data: function(){ return Posts.findOne(this.params._id) }
    })
    this.route('postSubmit', {
        path: "/submit" 
    })
})



//this is refers to: a specific route
var requireLogin = function() {
    if (! Meteor.user()) {
        this.render('accessDenied') 
        this.stop()
    }
}

Router.before(requireLogin, {only: 'postSubmit'})
