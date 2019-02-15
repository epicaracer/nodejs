// //https://mongoosejs.com/docs/queries.html
// //testApp로 DB명 생성

global.mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/testApp')
.then(()=> console.log('Successfully connected to mongodb'))
.catch(e => console.console.error(e));
