//local collection, dont't sychronize with server
Errors = new Meteor.Collection(null)

throwError = function(message) {
    Errors.insert({message: message})
}
