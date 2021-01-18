
var usrname = sessionStorage.getItem("name");
var l = sessionStorage.getItem("length");
console.log(l)
var links = [];
var ids = [];
var ll= 'https://youtu.be/'
var len = ll.length;


for (var i= 0; i < l ; i++){
    links.push(sessionStorage.getItem(""+i))
    ids.push(links[i].substring(len,links[i].length));
    
}
//https://www.youtube.com/watch?v=BuYLZigga7U,https://www.youtube.com/watch?v=IHQr0HCIN2w,https://www.youtube.com/watch?v=NDXuPCmbPVY
console.log(links)
console.log(ids)

//mainBanner.src = "https://www.youtube.com/embed/BuYLZigga7U?rel=0"
setTimeout(function(){ alert("NOTICE : \n CHUHA MAAR KE KHANA BAND KAREIN AUR COPY KITAB KHOL LEIN"); }, 5000);


window.onload = function() {
    var minute = 0;
    var sec = 0;
    setInterval(function() {
      document.getElementById("timer").innerHTML ="Up Next🔥 > Time Elasped  "+ minute + " min : " + sec+"sec";
      sec++;
      if (sec == 60) {
        minute ++;
        sec = 0;
       
      }
    }, 1000); 
  }