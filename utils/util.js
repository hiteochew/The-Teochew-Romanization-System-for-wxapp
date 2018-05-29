function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function test(n){return "\n\n测试测试\n\n"}

function toClipboard(data){
  wx.getClipboardData({
    success: function (res) {
      if(res.data.length != 0){
        wx.setClipboardData({data: data})
      }
    }
  })
  return;
}

function isempty(value) {
  //return (Array.isArray(value) && value.length === 0) || (Object.prototype.isPrototypeOf(value) && Object.keys(value).length === 0);
  return Object.keys(value).length === 0;
}

function lbplayer(data,key=0,skey=0){
  var title = "";
  var url = "";

  if(key < data.content.length){   //外層判斷，是否在整個列表內
    title = data.content[key].name + ' - 潮正會潮羅方案小程序';
    url = data.content[key].voice;

    if (typeof (url) == "string") {
      //console.info("string外層 key: " + key + ":, " + title + ": " + url); //測試

      wx.playBackgroundAudio({
        dataUrl: url,
        title: title
      });
      key++;
      wx.onBackgroundAudioStop(
        function () {
          lbplayer(data, key, 0);
        });

    }else{
      //console.info("object內層 key: " + key + ": , skey: " + skey + " : " + title + ": " + url); //測試

      if (skey < data.content[key].voice.length) {   //內層判斷，是否在其中一個列表內
        wx.playBackgroundAudio({
          dataUrl: url[skey].voice,
          title: title
        });
        skey++;

        //console.info(key);
        //console.info(skey);
        //console.info(data.content[key].voice.content.length);

        wx.onBackgroundAudioStop(
          function () {
            lbplayer(data, key, skey);
          });
      } else {
        key++;
        lbplayer(data, key, 0);
      }
    }

  }else{  //超出外層範圍就return掉，不做什麽
    return;
  }

}

function singleldplayer(data, key = 0) {
  var title = "";
  var url = "";
  title = '潮正會潮羅方案小程序';

  if (typeof (data) == "string") {
      wx.playBackgroundAudio({
        dataUrl: data,
        title: title
      });
  }else{
    if (key < data.length) {
      url = data[key].voice;
      //console.info(key + ": " + data[key].voice);
      wx.playBackgroundAudio({
        dataUrl: url,
        title: title
      });

      key++;
      wx.onBackgroundAudioStop(
        function () {
          singleldplayer(data, key);
        });
    } else {
      return;
    };
  }
}

module.exports = {
  formatTime: formatTime,
  isempty: isempty,
  lbplayer: lbplayer,
  singleldplayer: singleldplayer,
  toClipboard: toClipboard
}
