Router.configure({
    layoutTemplate: "layout", 
    loadingTemplate: "loading", 
    waitOn: function(){
        //return Meteor.subscribe("posts")
        return  Meteor.subscribe('notifications')
    }
});

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
        waitOn: function() {
            var postLimit = parseInt(this.params.postLimit)||5;
            return Meteor.subscribe("posts", {sort: { submitted: -1}, limit: postLimit})
        }, 

        data: function(){
            var postLimit = parseInt(this.params.postLimit)||5

            return {
                posts: Posts.find({}, {sort: { submitted: -1}, limit: postLimit})    
            }
        }
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
