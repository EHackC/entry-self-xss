/*
*  made by EHackC
*  entry fetch v1.0.0
*  https://eddie88cho.tistory.com/4 여기를 참고해서 만들었습니다. 뒷광고 아님ㅡㅡ
*/
;var EF=(function(){
  "use strict";
  var _ef={};
  //-------------------------------------------------------------
  _ef.createCommunity=function(type,data) { 
    return createCommunity(type,data);
  };
  return _ef;
  //-------------------------------------------------------------
  function init(){
    console.log("\"매우 생즈하군..\"\n         -EHackC");
    return _ef;
  }
  function createCommunity(type,data){/*글 등록*/
    if(type==entrystory){
      query="mutation CREATE_ENTRYSTORY($content:String $text:String $image:String $sticker:String $cursor:String){createEntryStory(content:$content text:$text image:$image sticker:$sticker cursor:$cursor){warning discuss{id title content seContent created commentsLength likesLength visit category prefix groupNotice user{id nickname username profileImage{id name label{ko en ja vn}filename imageType dimension{width height}trimmed{filename width height}}status{following follower}description role}images{filename imageUrl}progress thumbnail reply bestComment{id user{id nickname username profileImage{id name label{ko en ja vn}filename imageType dimension{width height}trimmed{filename width height}}status{following follower}description role}content created removed blamed commentsLength likesLength isLike hide image{id name label{ko en ja vn}filename imageType dimension{width height}trimmed{filename width height}}sticker{id name label{ko en ja vn}filename imageType dimension{width height}trimmed{filename width height}}}blamed}}}";
    }else{
      return "ERROR: 알수없는 게시물 타입입니다. 타입을 entrystory, qna, tips중에 하나로 정했는지 확인해주시기 바랍니다";
    }
    fetch("https://playentry.org/graphql",{
      "headers":{"content-type": "application/json"},
      "body": "{\"query\":\""+query+",\"variables\":"+JSON.stringify(data)+"}",
      "method": "POST",
    });
    return;
  }
})();
