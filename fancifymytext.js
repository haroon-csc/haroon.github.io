function alart()
{
	alert("Hello, world!");
	document.getElementById("texter").style.fontSize = "24pt";
}

function fancy() 

{
  if (document.getElementById("Nice").checked) {
    alert("Oh FancyShmancy");
    document.getElementById("texter").style.fontWeight = "bold";
    document.getElementById("texter").style.color = "blue";
    document.getElementById("texter").style.textDecoration = "underline";} 
}
function boring()
{
if (document.getElementById("Nice2").checked){
    alert("Alright, BoringBetty");
    document.getElementById("texter").style.fontWeight = "normal";
    document.getElementById("texter").style.color = "black";
    document.getElementById("texter").style.textDecoration = "none";
    document.getElementById("texter").style.fontSize = "11pt";
  }
}

function moo()
{
  document.getElementById("texter").style.textTransform = "uppercase";
  var parts = document.getElementById("texter").value.split(".");
  document.getElementById("texter").value = parts.join("-Moo");
}