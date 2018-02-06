let indentString = require("indent-string")

class Activity{
    static getActivity(id){
        if(!id || id.trim().length == 0) return null;

        return {
            activity_id: "1234679800",
            type: indentString('Unicorns Rainbows', 4),
        }
    }
}

module.exports = Activity;