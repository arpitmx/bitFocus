

firebase.initializeApp(firebaseConfig);


var usrname = sessionStorage.getItem("name");
var l = sessionStorage.getItem("length");
console.log(l)
var links = [];
var ids = [];
var ll= 'https://youtu.be/'
var len = ll.length;
var listed = false;
var pstate = false;
var status = 'online'

///////////////////////////////////////////////////////////////////////////////////////////////////
  

for (var i= 0; i < l ; i++){
    links.push(sessionStorage.getItem(""+i))
    ids.push(links[i].substring(len,links[i].length));
    
}
console.log(links)
console.log(ids)

currV= ids[0];


 

///////////////////////////////////////////////// YT API //////////////////////////////////

var tag = document.createElement('script');
tag.src = "http://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubePlayerAPIReady() {
player = new YT.Player('banner', {
height: '390',
width: '640',
videoId: currV,
events: {
  'onReady': onPlayerReady,
  'onStateChange': onPlayerStateChange
},
playerVars:{'rel':0,'showinfo' :0}

});
}

function onPlayerReady(e){
  console.log('PLAYER READY')
  //console.log(player.getDuration()+" sec");
  console.log(player.getVideoData().title);
  document.getElementById("vtitle").innerHTML= player.getVideoData().title;


}

function onReady() {
  player.addEventListener('onStateChange', function(e) {
    document.getElementById("vtitle").innerHTML= player.getVideoData().title;

});}


      function onPlayerStateChange(e) {
        //console.log('State is:', e.data);
        document.getElementById("vtitle").innerHTML= player.getVideoData().title;

      if(e.data == 1){
        console.log('Started')
        pstate = true;
        document.getElementById("banner").style.borderColor= "purple";

      }else if (e.data == 2){
        console.log('Paused')
        pstate = false;
        document.getElementById("banner").style.borderColor= "red";

        //changecolor()
      }else if(e.data == 3){
        console.log('Buffering')
               document.getElementById("banner").style.borderColor= "blue";

        pstate = false;
      }
      else if(e.data == 5){
        console.log('Qued and paused')
        pstate = false;
      }
      else if(e.data == -1){
        console.log('Unstarted')
        pstate = false;
        document.getElementById("banner").style.borderColor= "cyan";

      }

  }

       
/////////////////////////////// YT API //////////////////////////////////////////////////



//////////////////////////TIMER//////////////////////////////

      window.onload = function() {
        var minute = 0;
        var sec = 0;
        setInterval(function() {
          if(pstate==true){
          document.getElementById("timer").innerHTML ="Up Next🔥 > Time Elapsed  "+ minute + " min : " + sec+"sec";
          sec++;
          if (sec == 60) {
            minute ++;
            sec = 0;
           
          }
        }}, 1000); 
      }
  
////////////////////////////////////////////////////////////////



// console.log(newPostKey)
// status = 'online'

// var html = "";
//       html += "<li id = "+usrname+">";
//         html += "<em><b>"+usrname +"</b></em>"+ " : "+ status;
//       html += "</li>";
//       //statusbox.innerHTML += html;
//       listed = true;
// document.getElementById("status") += html

// var upData = {usrname, status};
// var updates = {};
// updates['/user-status/' + newPostKey] = upData;
// return firebase.database().ref().update(updates);




///////////// WRITING TO FIREBASE////////////////////////////////////////////////

var newPostKey = firebase.database().ref().child('posts').push().key;

setTimeout(function(){ 
      
  //alert("S.U.A.S v 0.0.2 \n Hey, Keep youself out of the comfort zone! \n Good Luck!");

  status = 'init!' 
  console.log('join status sent')
  var upData = {usrname, status};
  var updates = {};
  updates['/user-status/' + newPostKey] = upData;

  
  return firebase.database().ref().update(updates);

  
}, 500);




setTimeout(function(){ 
      
  //alert("S.U.A.S v 0.0.2 \n Hey, Keep youself out of the comfort zone! \n Good Luck!");

  status = 'joined!' 
  console.log('join status sent')
  var upData = {usrname, status};
  var updates = {};
  updates['/user-status/' + newPostKey] = upData;

  
  return firebase.database().ref().update(updates);

  
}, 2000);


document.addEventListener('visibilitychange', function(ev) {
  
  console.log(`Tab state : ${document.visibilityState}`);
 
 if (document.visibilityState=='visible' ){

  console.log('visible now') 
  status = 'online' 
var upData = {usrname, status};
var updates = {};
updates['/user-status/' + newPostKey] = upData;

return firebase.database().ref().update(updates);

  }

  else{

  status = 'offline'
  var upData = {usrname, status};
  var updates = {};
  updates['/user-status/' + newPostKey] = upData;

return firebase.database().ref().update(updates);
}

}

);


/////////////////////////////// WRITING TO FIREBASE/////////////////////////////////



    // function sendMessage(status){

 
    //  // document.getElementById("messagebox");
    //   firebase.database().ref("user-status/").push().set({
    //       "username":usrname,
    //       "status": status
    //   });
  
    //   return false;
    // }

  

    /////////////////////////////// READING AND UPDATING THE LIST ================

    
    


    firebase.database().ref("user-status").on("child_changed", function(snapshot){
      
   
      
        console.log('Status wrote')
      
       var st =  snapshot.val().status
       var usr =snapshot.val().usrname 

       if (st=='online'){
        
        
       
        var html = "";
        html += "<li>";
          html += "<em><b>"+usr+"</b></em>"+ " : <text style='color:green;' >focused</text>" ;
        html += "</li>";


        document.getElementById("status").innerHTML += html;


       }
       else if (st=='joined!'){
        console.log('joined ref')
        var html = "";
        html += "<li>";
          html += "<em><b>"+usr+"</b></em>"+ " : <text style='color:purple;' >joined!</text>" ;
        html += "</li>";


        document.getElementById("status").innerHTML += html;

       }
       else{
        
       
      var html = "";

     
        html += "<li>";
        html += "<em><b>"+snapshot.val().usrname +"</b></em>"+ " : <text style='color:red;' >not focused</text>" ;
        html += "</li>";
        
       document.getElementById("status").innerHTML += html;
     
      }
      



    
    });
  

  

    /////////////////////////////========================================================>

