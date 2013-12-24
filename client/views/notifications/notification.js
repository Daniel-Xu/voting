Template.notification.helpers({
    notificationPostPath: function(){
        return Router.routes.postPage.path({_id: this.postId}) 
    }
})

Template.notification.events({
    "click a": function(e) {
        Notifications.update(this._id, {$set: {read: true}})        
    }
})
