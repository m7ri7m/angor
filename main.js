function randomquote(){
var quote =["“Be yourself; everyone else is already taken.”" ,
"“So many books, so little time.”" ,
"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”"
 ,"“A room without books is like a body without a soul.”" ,
 "“Be who you are and say what you feel.”"];

 var quotewriter = [" ― Oscar Wilde" ,"― Frank Zappa" ,"― Albert Einstein" ,"― Marcus Tullius Cicero"
 ,"― Bernard M. Baruch"]
 var x = Math.floor(Math.random() * quote.length)
 document.getElementById("quote").innerHTML = quote[x] +  quotewriter[x]
}randomquote()
