const  names = require('./mockdata');


const resolvers = {

    Query: {

        getnames: () => {

            return names;
        }
    }
}

module.exports = resolvers;