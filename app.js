console.log("SUAS Running!");
sessionStorage.clear();
function fun(nameb, linksb){

    console.log("submit clicked");
    var name = document.getElementById(nameb).value;
    var links = document.getElementById(linksb).value;
   
   
   
    flink = extractLinks(links)
   // console.log(name)
    console.log(flink)
    // alert("Take a deep deep breath buddy!");
  
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("length", flink.length);
    for (var i = 0 ; i < flink.length ; i ++){
        sessionStorage.setItem(""+i,flink[i]);
    }



}

function extractLinks(links) {
    var flinks= [];
    var str = "";
   // console.log(links.length)
  for (var i = 0;i<links.length;i++){
      //console.log(i)
      
      if (links[i]!=','){
              str += links[i];
          
              if(i == links.length-1){   
                  flinks.push(str);
                     // console.log("end");
                  } 
          
          }
      
          
      else if (links[i] ==','){
              flinks.push(str);
              str = '';
          }
  }

      return flinks;
}