// let thedaveelement=document.getElementById("dave")
function run(){
  let thedaveelement=document.getElementById("dave")
  let q=document.getElementById("question").value
  thedaveelement.innerText="annything in the string"
  let answer=Math.floor(Math.random()*11)+1
  if (answer==1)
    thedaveelement.innerText="It is certain"
  else if (answer==2)
    thedaveelement.innerText="It is decidedly so"
  else if (answer==3)
    thedaveelement.innerText="Yes"
  else if (answer==4)
    thedaveelement.innerText="No"
  else if (answer==5)
    thedaveelement.innerText="My sources say yes"
  else if (answer==6)
    thedaveelement.innerText="My sources say no"
  else if (answer==7)
    thedaveelement.innerText="Bad wifi, try again"
  else if (answer==8)
    thedaveelement.innerText="My sources are not sure"
  else if (answer==9)
    thedaveelement.innerText="No Idea! Ask again"
  else if (answer==10)
    thedaveelement.innerText="Absolutely not"
  else if (answer==11)
    thedaveelement.innerText="Bruh, dat be stupid"
}