var n=1;
const createCardNode = ()=>{
    const card = document.createElement("div")
    card.className="card"
    const card_h = document.createElement("div")
    card_h.className= "card__header card-red"
    const card_l = document.createElement("div")
    card_l.className= "card-header__left"
    const el = document.createElement("div")
    el.className= "elipse"
    const prim = document.createTextNode('1')
    el.appendChild(prim)
    card_l.appendChild(el)
    card_h.appendChild(card_l)
    card.appendChild(card_h)
}
const addCard=()=>{
    mountNode.appendChild(createCardNode())
}
addCardButton.addEventListener('click', addCard)