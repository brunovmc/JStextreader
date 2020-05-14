// new File(18, { type: "post/noticia/teste1"});
//
// document.getElementById('inputfile')
//     .addEventListener('change', function() {
//
//     var fr=new FileReader();
//     fr.onload=function(){
//         document.getElementById('output')
//                 .textContent=fr.result;
//     }
//
//     readAsText(File);
// })
$.ajax({
  type: 'get',
  url: 'https://github.com/brunovmc/JStextreader/blob/master/post/noticia/teste1',
  xhrFields: {
    withCredentials: true
  }
});

 $(".content").load("https://github.com/brunovmc/JStextreader/blob/master/post/noticia/teste1");



//
//
// function printFile(File) {
//   var reader = new FileReader();
//   reader.onload = function(evt) {
//     document.getElementById('output')
//             .textContent = reader.result;
//   };
//   reader.readAsText(File);
// }
