exports.getDate = function(){
    const today = new Date();
    
    const options = {
        weekday: "long",
        month: "long",
        year: "numeric"
    }
    
    return today.toLocaleDateString("en-US", options);
}