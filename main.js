//header-----------------------------------------------------------------
let header = document.createElement("header");
let divHead = document.createElement("div");
let h1 = document.createElement("h1");

let texth1 = document.createTextNode("Elzero");

h1.style.color = "#28aa70"
h1.style.fontFamily="sans-serif"

header.style.cssText ="display:flex; padding: 20px; background-color: rgb(255,255,255); justify-content: space-between; align-items : center;";

h1.appendChild(texth1);
divHead.appendChild(h1);
header.appendChild(divHead);
document.body.appendChild(header);



let ulBar = document.createElement("ul");
ulBar.style.cssText="paddig: 0px; margin: 0px; display: flex; list-style: none;"
let headEle = [ "Home", "About", "Service", "Contact" ];
for (let i = 0; i < headEle.length; i++)
{
  let li = document.createElement("li");
  li.innerHTML = headEle[ i ];
  li.style.cssText="margin: 10px; list-style: none; font-size: 15px"
  ulBar.appendChild(li);
}
header.appendChild(ulBar);


//main-------------------------------------------------------------------
let main = document.createElement("main");

for (let i = 0; i <15; i++)
{
  let elements = document.createElement("section")
  elements.className="elements"
  let content = document.createElement("div");
  content.className = "content";
  let text = document.createTextNode("Product");
  content.style.cssText="font-size:10px;display: flex;justify-content: center;";
  content.appendChild(text);

  

  let span = document.createElement("span");
  span.style.cssText="display:flex; justify-content: center;font-size:25px";
  span.innerHTML = [ i + 1 ];
  elements.appendChild(span);
  elements.append(content);
  elements.style.cssText="width: calc((100% - 40px)/4);margin: 10px;background-color:#d9d9d9;  height:60px; text-aligne:center;display: grid;align-content: center;"

  main.appendChild(elements);
  main.style.cssText = "display: flex;flex-direction: row;flex-wrap: wrap;justify-content: center;";
}


document.body.appendChild(main);


//footer----------------------------------------------------------------------
let foot = document.createElement("footer");
let sect3 = document.createElement("div");
sect3.innerHTML = "CopyRight 2023";
sect3.style.color = "white";
foot.style.backgroundColor = "#23a96e"
foot.style.cssText="padding: 15px;background-color: rgb(35, 169, 110);width: 100%;margin: 10px;display: flex;justify-content: center;align-items: center;"

foot.appendChild(sect3);
main.appendChild(foot)
document.body.appendChild(foot);





