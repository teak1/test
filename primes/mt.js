onmessage=function(data){
  data=data.data;
  n=data.number;
  c=data.checks;
  for(var i = 0;i<c.length;i++){
    if(n/c[i]===Math.floor(n/c[i]))post(false);
  }
  post(true);
}
function post(msg){
  postMessage(msg);
  throw "";
}
