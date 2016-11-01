console.log('starting function');

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'eu-west-1'});

exports.handle = function(e, ctx, callback) {

    var scanningParameters = {
        TableName: 'guestbook',
        Limit: 100
    };

    docClient.scan(scanningParameters, function(err, data){
        if(err){
            callback(err, null);
        }else{
            callback(null, data);
        }
    });
}