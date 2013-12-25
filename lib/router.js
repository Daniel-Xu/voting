Router.configure({
    layoutTemplate: "layout", 
    loadingTemplate: "loading", 
    waitOn: function(){
        //return Meteor.subscribe("posts")
        return  Meteor.subscribe('notifications')
    }
});

PostsListController = RouteController.extend({
    template: "postsList", 
    increment: 5, 
    limit: function(){
        return postLimit = parseInt(this.params.postLimit)||this.increment;
    }, 

    findOptions: function(){
        return {sort: { submitted: -1}, limit: this.limit()}
    }, 

    waitOn: function() {
        return Meteor.subscribe("posts", this.findOptions())
    }, 

    data: function(){
        return {
            posts: Posts.find({}, this.findOptions())    
        }
    }

})

//within data function: "this " corresponds to matched route
Router.map(function(){
    this.route('postPage', {
        path: "/posts/:_id", 
        data: function(){ return Posts.findOne(this.params._id) }, 
        waitOn: function(){
            //the parameter will pass to publicatioin
            return Meteor.subscribe("comments", this.params._id)
        }

    })
    this.route('postSubmit', {
        path: "/submit" 
    })

    this.route('postEdit', {
        path: "/posts/:_id/edit", 
        data: function() { return Posts.findOne(this.params._id)}
    })
    
    //prevent conflicting
    this.route('postsList', {
        path: '/:postLimit?', 
        controller: PostsListController
    })
})


var requireLogin = function() {
    if (! Meteor.user()) {
        if (Meteor.loggingIn())
            this.render(this.loadingTemplate)
        else
            this.render('accessDenied') 
        this.stop()
    }
}

Router.before(requireLogin, {only: 'postSubmit'})
Router.before(function(){ clearErrors()})
