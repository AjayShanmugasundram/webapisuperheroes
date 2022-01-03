let wrap = document.createElement("div")
wrap.setAttribute("class", "container")
document.body.appendChild(wrap)

let title = document.createElement("h1")
title.setAttribute("class", "text-center text-light")
title.innerText = ("SUPER HEROES")
title.setAttribute("id", "title")
wrap.appendChild(title)


let row = document.createElement("div")
row.setAttribute("class", "row")
row.setAttribute("id", "row1")
wrap.appendChild(row)



let col1 = document.createElement("div")
col1.setAttribute("class", "col-sm-12 col-md-4 col-lg-4 col-xl-4 py-2");
col1.setAttribute("id","main")
row.appendChild(col1)

let card = document.createElement("div")
card.setAttribute("class", "card h-100 ")
col1.appendChild(card)

let cardhead = document.createElement("div")
cardhead.setAttribute("class", "card-header bg-dark")
card.appendChild(cardhead)

let select1 = document.createElement("input");
select1.setAttribute("type", "text")
select1.setAttribute("id", "superheroesselection")
select1.setAttribute("placeholder", "Enter the ID of a Hero Eg:1 - UPTO 732 HEROES")
select1.setAttribute("class", "bg-dark border-0 text-light  fs-6 d-block col-12 ")
cardhead.appendChild(select1)

let cardbody = document.createElement("div")
cardbody.setAttribute("class", "card-body cardbg")
card.appendChild(cardbody)

let countryimage = document.createElement("img")
countryimage.setAttribute("class", " card-img-top my-5")
countryimage.setAttribute("id", "thirukural")
// countryimage.setAttribute("src", "my-review-of-justice-league-2017.jpeg")
cardbody.appendChild(countryimage)

let cardnative = document.createElement("div")
cardnative.setAttribute("class", "card-text")
cardnative.innerText = ("RESPONSE :")
cardbody.appendChild(cardnative)

let spann1 = document.createElement("span")
spann1.setAttribute("id", "response")
spann1.setAttribute("class","text-light fs-5")
cardnative.appendChild(spann1)

let cardregion = document.createElement("div")
cardregion.setAttribute("class", "card-text ")
cardregion.innerText = ("ID:")
cardbody.appendChild(cardregion)


let spanr1 = document.createElement("span")
spanr1.setAttribute("id", "id")
spanr1.setAttribute("class","text-light fs-5 ")
cardregion.appendChild(spanr1)


let te = document.createElement("div")
te.setAttribute("class", "card-text my-3")
te.innerText = ("NAME   :")
cardbody.appendChild(te)


let spanp1 = document.createElement("span")
spanp1.setAttribute("id", "NAME")
spanp1.setAttribute("class","text-light")
te.appendChild(spanp1)
//////////////////////////////////////////////////
let em = document.createElement("div")
em.setAttribute("class", "card-text")
em.innerText = ("INTELLIGENCE :")
cardbody.appendChild(em)


let spanp2 = document.createElement("span")
spanp2.setAttribute("id", "connections")
spanp2.setAttribute("class","text-light")
em.appendChild(spanp2)



let strength = document.createElement("div")
strength.setAttribute("class", "card-text")
strength.innerText = ("STRENGTH :")
cardbody.appendChild(strength)


let strength1 = document.createElement("span")
strength1.setAttribute("id", "strength")
strength1.setAttribute("class","text-light")
strength.appendChild(strength1)




let speed = document.createElement("div")
speed.setAttribute("class", "card-text")
speed.innerText = ("SPEED :")
cardbody.appendChild(speed)


let speed1 = document.createElement("span")
speed1.setAttribute("id", "speed")
speed1.setAttribute("class","text-light")
speed.appendChild(speed1)





let durability = document.createElement("div")
durability.setAttribute("class", "card-text")
durability.innerText = ("DURABILITY :")
cardbody.appendChild(durability)


let durability1 = document.createElement("span")
durability1.setAttribute("id", "durability")
durability1.setAttribute("class","text-light")
durability.appendChild(durability1)







let power = document.createElement("div")
power.setAttribute("class", "card-text")
power.innerText = ("POWER :")
cardbody.appendChild(power)


let power1 = document.createElement("span")
power1.setAttribute("id", "power")
power1.setAttribute("class","text-light")
power.appendChild(power1)



let combat = document.createElement("div")
combat.setAttribute("class", "card-text")
combat.innerText = ("COMBAT :")
cardbody.appendChild(combat)


let combat1 = document.createElement("span")
combat1.setAttribute("id", "combat")
combat1.setAttribute("class","text-light")
combat.appendChild(combat1)
/////////////////////////////////////////////////////////////////////////////////

let cardfooter = document.createElement("div")
cardfooter.setAttribute("class", "card-footer cardbg")
card.appendChild(cardfooter)

let thankyou=document.createElement("div")
thankyou.setAttribute("id","thankyou")
thankyou.innerHTML=("ALIASES : ")
thankyou.setAttribute("class","text-warning")
cardfooter.appendChild(thankyou)

let spanfa = document.createElement("span")
spanfa.setAttribute("id", "firstappearance")
spanfa.setAttribute("class","text-light")
thankyou.appendChild(spanfa)

let button=document.createElement("button")
button.setAttribute("id","Bu")
button.setAttribute("onclick","th()")
button.innerHTML=("SUBMIT")
button.setAttribute("class", "btn text-light btn-outline-light btn-primary")
cardhead.appendChild(button)




function th(){

let va = document.querySelector('input').value
console.log(va)

for (i = 0; i<=732; i++) {
    if (i == va) {
        fetch(`https://superheroapi.com/api.php/1283410865457087/${i}`)
            .then((d) => d.json())
            .then((data) => {
            
                document.getElementById("response").innerHTML = data.response
                document.getElementById("id").innerHTML = data.id
                document.getElementById("NAME").innerHTML = data.name
                console.log(data.image.url)
                document.getElementById("thirukural").setAttribute("src", data.image.url)
                document.getElementById("connections").innerHTML = data.powerstats.intelligence
                document.getElementById("strength").innerHTML = data.powerstats.strength
                document.getElementById("speed").innerHTML = data.powerstats.speed
                document.getElementById("durability").innerHTML = data.powerstats.durability
                document.getElementById("power").innerHTML = data.powerstats.power
                document.getElementById("combat").innerHTML = data.powerstats.combat
                document.getElementById("firstappearance").innerHTML=data.biography.aliases
                
            })
    }
}
}