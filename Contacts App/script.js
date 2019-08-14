
let saveContact = (localStorage.getItem('saveContact')? JSON.parse(localStorage.getItem('saveContact')) : []);






//add an event listner of keyup to the input

document.getElementById('filterInput').addEventListener('keyup', searchContacts);


function searchContacts() {
    //get the value of the input and change it to upperCase;
    const inputValue = document.getElementById('filterInput').value.toUpperCase();

    //get the ul
    let ul = document.querySelectorAll('ul');
    for(let i = 0; i < ul.length; i++) {
        //get all lis with a class of "collection-item"
        let li = ul[i].querySelectorAll('li.collection-item');

        // iterate through the array of lis with a for loop;
        for( let k = 0; k < li.length; k++) {
            //get the all a tags inside the li
            let a = li[k].getElementsByTagName('a')[0];
            console.log(a)

            //check if the input value is equal to the names on the contacts;
            if(a.innerText.toUpperCase().substring(0, inputValue.length) === inputValue) {
                li[k].style.display = '';
            } else {
                li[k].style.display = 'none';
            }
        }
    }
     
}


loadContacts()

function loadContacts() {
    if(!saveContact) { return false};
    for( let i = 0; i < saveContact.length; i++) {
        let contact = saveContact[i];

        addContactsToDom(contact);
    }
}




//event listner for add button
document.querySelector('.add-btn').addEventListener('click', () => {
    let contactName = document.querySelector('.add-contact').value;
    let contactNum = document.querySelector('.add-number').value;

    if(contactName && contactNum) {
        addContactsToDom(contactName, contactNum);
        saveContacts(contactName, contactNum);
    } else {
        alert("Fill in a name and phone number")
        return false;
    }

});


function saveContacts(contactName, contactNum) {
    let capL = contactName[0].toUpperCase();
    let capFirst = capL + contactName.substring(1, contactName.length);
    let contact = `${capFirst} ${contactNum}`
    saveContact.push(contact)
    localStorage.setItem('saveContact', JSON.stringify(saveContact))
}


//event listener for enter keys
document.querySelector('.add-number').addEventListener('keydown', function (e) {
    let contactName = document.querySelector('.add-contact').value;
    let contactNum = document.querySelector('.add-number').value;
    if ((e.code === 'Enter' || e.code === 'NumpadEnter') && contactName && contactNum) {
      addContactsToDom(contactName, contactNum);
      saveContacts(contactName, contactNum)
    }
  });


//render contacts to dom
function addContactsToDom(contactName, contactNum) {
    if(contactNum === undefined){
        contactNum = ''
    }
    let capL = contactName[0].toUpperCase();
    let capFirst = capL + contactName.substring(1, contactName
.length);

    let ul = document.getElementById('names');
    let bValues = document.getElementById('B');
    let cValues = document.getElementById('C');
    let dValues = document.getElementById('D');
    let eValues = document.getElementById('E');
    let fValues = document.getElementById('F');
    let gValues = document.getElementById('G');
    let hValues = document.getElementById('H');
    let iValues = document.getElementById('I');
    let jValues = document.getElementById('J');
    let kValues = document.getElementById('K');
    let lValues = document.getElementById('L');
    let mValues = document.getElementById('M');
    let nValues = document.getElementById('N');
    let oValues = document.getElementById('O');
    let pValues = document.getElementById('P');
    let qValues = document.getElementById('Q');
    let rValues = document.getElementById('R');
    let sValues = document.getElementById('S');
    let tValues = document.getElementById('T');
    let uValues = document.getElementById('U');
    let vValues = document.getElementById('V');
    let wValues = document.getElementById('W');
    let xValues = document.getElementById('X');
    let yValues = document.getElementById('Y');
    let zValues = document.getElementById('Z');



    

    switch(capFirst[0]) {
            case "A": if(ul.innerHTML) {
                ul.innerHTML += `<li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            } else {
                ul.innerHTML += `<li id="capital-letters"><h5>A</h5></li><li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            }
            break;

            case "B": if(bValues.innerHTML) {
                bValues.innerHTML += `<li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            } else {
                bValues.innerHTML += `<li id="capital-letters"><h5>B</h5></li><li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            }
            break;
            
            case "C" :if(cValues.innerHTML) {
                cValues.innerHTML += `<li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            } else { cValues.innerHTML += `<li id="capital-letters"><h5>C</h5></li><li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            }
            break;

            case "D" : if(dValues.innerHTML) {
                dValues.innerHTML += `<li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            } else { dValues.innerHTML += `<li id="capital-letters"><h5>D</h5></li><li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            }
            break;

            case "E" : if(eValues.innerHTML) {
                eValues.innerHTML += `<li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            } else { eValues.innerHTML += `<li id="capital-letters"><h5>E</h5></li><li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            }
            break;

            case "F": if(fValues.innerHTML) {
                fValues.innerHTML += `<li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            } else { fValues.innerHTML += `<li id="capital-letters"><h5>F</h5></li><li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            }
            break;

            case "G" :if(gValues.innerHTML) {
                gValues.innerHTML += `<li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            } else { gValues.innerHTML += `<li id="capital-letters"><h5>G</h5></li><li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            }
            break;

            case "H": if(hValues.innerHTML) {
                hValues.innerHTML += `<li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            } else { hValues.innerHTML += `<li id="capital-letters"><h5>H</h5></li><li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            }
            break;

            case "I" : if(iValues.innerHTML) {
                iValues.innerHTML += `<li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            } else { iValues.innerHTML += `<li id="capital-letters"><h5>I</h5></li><li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            }
            break;

            case "J" : if(jValues.innerHTML) {
                jValues.innerHTML += `<li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            } else { jValues.innerHTML += `<li id="capital-letters"><h5>J</h5></li><li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            }
            break;

            case "K" : if(kValues.innerHTML) {
                kValues.innerHTML += `<li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            } else { kValues.innerHTML += `<li id="capital-letters"><h5>K</h5></li><li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            }
            break;

            case "L" : if(lValues.innerHTML) {
                lValues.innerHTML += `<li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            } else { lValues.innerHTML += `<li id="capital-letters"><h5>L</h5></li><li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            } 
            break;

            case "M" : if(mValues.innerHTML) {
                mValues.innerHTML += `<li class="collection-item"><a href="#">${capFirst} ${contactNum} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            } else { mValues.innerHTML += `<li id="capital-letters"><h5>M</h5></li><li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            }
            break;

            case "N" : if(nValues.innerHTML) {
                nValues.innerHTML += `<li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            } else { nValues.innerHTML += `<li id="capital-letters"><h5>N</h5></li><li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            }
            break;

            case "O" : if(cValues.innerHTML) {
                cValues.innerHTML += `<li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            } else { oValues.innerHTML += `<li id="capital-letters"><h5>O</h5></li><li class="collection-item"><a href="#">${capFirst} ${contactNum}</a></li>`;
            }
            break;
            case "P": if(pValues.innerHTML) {
                pValues.innerHTML += `<li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            } else { pValues.innerHTML += `<li id="capital-letters"><h5>P</h5></li><li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            }
            break;
            case "Q" : if(qValues.innerHTML) {
                qValues.innerHTML += `<li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            } else { qValues.innerHTML += `<li id="capital-letters"><h5>Q</h5></li><li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            }
            break;

            case "R" : if(rValues.innerHTML) {
                rValues.innerHTML += `<li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            } else { rValues.innerHTML += `<li id="capital-letters"><h5>R</h5></li><li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            }
            break;
            case "S" : if(sValues.innerHTML) {
                sValues.innerHTML += `<li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            } else { sValues.innerHTML += `<li id="capital-letters"><h5>S</h5></li><li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            }
            break;
            case "T" : if(tValues.innerHTML) {
                tValues.innerHTML += `<li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            } else { tValues.innerHTML += `<li id="capital-letters"><h5>T</h5></li><li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            }
            break;

            case "U" : if(uValues.innerHTML) {
                uValues.innerHTML += `<li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            } else { uValues.innerHTML += `<li id="capital-letters"><h5>U</h5></li><li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            }
            break;

            case "V" : if(vValues.innerHTML) {
                vValues.innerHTML += `<li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            } else { vValues.innerHTML += `<li id="capital-letters"><h5>V</h5></li><li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            }
            break;
            case "W" :if(wValues.innerHTML) {
                wValues.innerHTML += `<li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            } else { wValues.innerHTML += `<li id="capital-letters"><h5>W</h5></li><li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            }
            break;
            case "X" : if(xValues.innerHTML) {
                xValues.innerHTML += `<li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            } else { xValues.innerHTML += `<li id="capital-letters"><h5>X</h5></li><li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            }
            break;
            case "Y" : if(yValues.innerHTML) {
                yValues.innerHTML += `<li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            } else { yValues.innerHTML += `<li id="capital-letters"><h5>Y</h5></li><li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            }
            break;
            case "Z" : if(zValues.innerHTML) {
                zValues.innerHTML += `<li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            } else { zValues.innerHTML += `<li id="capital-letters"><h5>Z</h5></li><li class="collection-item"><a href="#">${capFirst} ${contactNum}</a><button id = "delete-btn">Delete</button></li>`;
            }
            break;
    }

    const deleteBtns = document.querySelectorAll('button#delete-btn');
    deleteBtns.forEach(deleteBtn => {
        deleteBtn.addEventListener('click', deleteContact)
    });

    document.querySelector('.add-contact').value = '';
    document.querySelector('.add-number').value = '';

    
   

}

function deleteContact () {
    
    const contact = this.parentNode;
    const text = contact.childNodes[0].innerText
    const parent = contact.parentNode;

    

    saveContact = JSON.parse(localStorage.getItem('saveContact'));
    for(let i = 0; i< saveContact.length; i++) {
        if(text === saveContact[i]) {
            saveContact.splice(saveContact.indexOf(text),1);
            parent.removeChild(contact);
            localStorage.setItem('saveContact', JSON.stringify(saveContact))
        }
         if(parent.childNodes.length === 1) {
        parent.removeChild(parent.childNodes[0])
        }
        
    }
   

}


