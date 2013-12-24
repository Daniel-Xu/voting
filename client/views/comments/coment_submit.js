Template.commentSubmit.events({
    "submit form": function(e){
        e.preventDefault() 

        var $body = $(e.target).find("[name=body]")
        var comment = {
            body: $body.val(), 
            postId: this._id
        }
        console.log(this)
        
        Meteor.call('comment', comment, function(err, id){
            if(err) {
                throwError(err.reason)
            }else{
                $body.val('')
            }
        })
    }
})
