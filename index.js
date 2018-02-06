let indentString = require("indent-string")

class Activity{
    /**
     * Generic handler for all GET requests in this service
     * @param {*} query = {
     *      type: String,
     *      param: Object
     * } 
     */
    static get(query){
        let result = {status: false, resp: null};

        switch(query.type){
            case "GET_BY_ID": 
                result.resp = this.getById(query.param);
                result.status = true;
            break;

            case "GET_BY_TYPE":
                result.resp = this.getByType(query.param);
                result.status = true;
            break;
        }

        return result;

        return {
            activity_id: "1234679800",
            type: indentString('Unicorns Rainbows', 4),
        }
    }

    static getById(id){
        return {activity_id: "1234679800", type: indentString('Type 1', 4)};
    }

    static getByType(type){
        return {activity_id: "1234679800", type: indentString('Type 2', 8)};
    }
}

module.exports = Activity;