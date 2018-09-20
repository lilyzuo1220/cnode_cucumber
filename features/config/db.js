
let MongoClient = require('mongodb').MongoClient
let assert = require('assert');
let url = 'mongodb://localhost:27017/node_club_dev'
//激活用户
let activeuser = function(user,done){
    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        console.log("Connected correctly to server");
        let collection = db.collection("users")
        //根据指定的字段找到要修改的用户 并更新某个字段的值
        collection.updateOne({ name: `${user}` }, { $set: { "active": true } }, function (err, docs) {
        assert.equal(null, err);
        })
        db.close(done);
    })
}

exports.activeuser = activeuser;