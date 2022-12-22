//jshint esversion:6
export function getDate() {
    const today = new Date();
    
    const options = {
        weekday: "long",
        month: "long",
        year: "numeric"
    }
    
    return today.toLocaleDateString("en-US", options);
}