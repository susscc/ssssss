// This is a JavaScript file
//APIキー
var appKey="b20dcb04c50903ea6acb3e3fb913b3bca250050ef10f1675be899b08c572f8c1";
var clientKey="779418e6934fb0905f54c2fa5715794b85742ed613f2f30e8c611fd072ed2452";
var ncmb=new NCMB(appKey,clientKey);

 var GameScore = ncmb.DataStore("GameScore");

// クラスの新しいインスタンスを生成
var gameScore = new GameScore();

gameScore.set("score", 1337)
         .set("playerName", "Taro")
         .set("cheatMode", false)
         .save()
         .then(function(gameScore){
          // 保存後の処理
         })
         .catch(function(err){
          // エラー処理
         });