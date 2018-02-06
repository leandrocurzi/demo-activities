let Activity = require("./index");

let mockData = Activity.get({type:"GET_BY_ID", param: "abc123"});
console.log(mockData);