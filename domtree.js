const width = 500; //树的宽度
const height = 600; //树的长度
const quantity = 150; //树枝的数量
const types = ["text", "select", "progress", "meter", "button", "radio", "checkbox"];
const greetings = [
  //文字
  "小李子",
  "菜包子",
  "Merry Christmas",
  "Merry Christmas",
  "Merry Christmas",
  "Merry Christmas",
  "饼老师",
  "12月25",
  "蟹老板",
  "Merry Christmas",
  "Happy Holidays",
  " 毛毛省考必上岸！",
  "12月25",
  "必上岸！",
  "Merry Christmas",
  "圣诞节",
  "Merry Christmas",
  "KFC V 我50",
];
let tree = document.querySelector(".tree"),
  treeRotation = 0;
tree.style.width = width + "px";
tree.style.height = height + "px";
// tree.style.backgroundColor='pink'
 
window.addEventListener("resize", resize, false);
 
// The tree
for (var i = 0; i < quantity; i++) {
  let element = null,
    type = types[Math.floor(Math.random() * types.length)],
    greeting = greetings[Math.floor(Math.random() * greetings.length)];
 
  //树枝随机宽高
  let x = width / 2,
    y = Math.round(Math.random() * height);
 
  let rx = 0,
    ry = Math.random() * 360,
    rz = -Math.random() * 15;
 
  let elemenWidth = 5 + ((y / height) * width) / 2,
    elemenHeight = 26;
 
  switch (type) {
    case "button":
      element = document.createElement("button");
      element.textContent = greeting;
      element.style.width = elemenWidth + "px";
      element.style.height = elemenHeight + "px";
      break;
    case "progress":
      element = document.createElement("progress");
      element.style.width = elemenWidth + "px";
      element.style.height = elemenHeight + "px";
      if (Math.random() > 0.5) {
        element.setAttribute("max", "100");
        element.setAttribute("value", Math.round(Math.random() * 100));
      }
      break;
    case "select":
      element = document.createElement("select");
      element.setAttribute("selected", greeting);
      element.innerHTML = "<option>" + greetings.join("</option><option>") + "</option>";
      element.style.width = elemenWidth + "px";
      element.style.height = elemenHeight + "px";
      break;
    case "meter":
      element = document.createElement("meter");
      element.setAttribute("min", "0");
      element.setAttribute("max", "100");
      element.setAttribute("value", Math.round(Math.random() * 100));
      element.style.width = elemenWidth + "px";
      element.style.height = elemenHeight + "px";
      break;
    case "text":
    default:
      element = document.createElement("input");
      element.setAttribute("type", "text");
      element.setAttribute("value", greeting);
      element.style.width = elemenWidth + "px";
      element.style.height = elemenHeight + "px";
  }
 
  element.style.transform = `translate3d(${x}px, ${y}px, 0px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg)`;
 
  tree.appendChild(element);
}
 
// 设置雪花
for (var i = 0; i < 200; i++) {
  let element = document.createElement("input");
  element.setAttribute("type", "radio");
 
  let spread = window.innerWidth / 2;
 
  let x = Math.round(Math.random() * spread) - spread / 4,
    y = Math.round(Math.random() * height),
    z = Math.round(Math.random() * spread) - spread / 2;
 
  let rx = 0,
    ry = Math.random() * 360,
    rz = 0;
 
  if (Math.random() > 0.5) element.setAttribute("checked", "");
 
  element.style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg)`;
 
  tree.appendChild(element);
}
 
function resize() {
  tree.style.top = (window.innerHeight - height - 100) / 2 + "px";
}
 
resize();
