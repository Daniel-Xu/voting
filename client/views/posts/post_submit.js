Template.postSubmit.events({
    'submit form': function(e) {
        e.preventDefault() 

        var post = {
            url: $(e.target).find('[name=url]').val(),
            title: $(e.target).find('[name=title]').val(), 
            message: $(e.target).find('[name=message]').val()
        }

        //the post is the postAttributes in definition of post function
        
        Meteor.call('post', post, function(err, id){
            if(err) {
                throwError(err.reason) 

                if(err.error === 302) {
                    Router.go("postPage", {_id: err.details}) 
                }
            }

            Router.go('postPage', {_id: id})
        })
    }
})
