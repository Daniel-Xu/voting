Template.notifications.helpers({
    notificationCount: function(){
        return Notifications.find({userId: Meteor.userId(), read: false}).count()
    }, 

    notifications: function(){
        return Notifications.find({userId: Meteor.userId(), read: false})         
    }
    
})
