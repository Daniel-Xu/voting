//this callback is defined in meteor
//doc is the doc you want to manipulate

ownsDocument = function(userId, doc){
    return doc && doc.userId === userId 
}
