const ch = document.getElementsByName("ch");
const selectAll = document.getElementById('ch__select-all');
const chGroup = document.getElementById('boxes-control');
const boxes = document.getElementsByClassName('box');

const extractId = (id) => {
    return id.substr(id.length - 3);
}

const hideBoxes = () => {
    for(let i = 0; i < ch.length; i++) {
        if(extractId(ch[i].id) === extractId(boxes[i].id)) {
            if(!ch[i].checked) {
                boxes[i].classList.add("hidden");
            } else if (ch[i].checked) {
                boxes[i].classList.remove("hidden");
            }
        }
    }
}

selectAll.addEventListener('change', (event) => {
    ch.forEach(element => {
        element.checked = event.target.checked;
    })        
});

window.addEventListener('load', () => {hideBoxes()});
chGroup.addEventListener('change', () => {hideBoxes()});