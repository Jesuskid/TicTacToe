val = 'X';
winner = '';
is_winner_found = 0
counter = 1

pxName = ''
pyName = ''
pxScore = 0
pyScore = 0


var modal = true
modalPage = document.getElementById('modal')
modalPage1 = document.getElementById('modal1')
modalCtrl1 = document.getElementById('modal-controller')
modalCtrl2 = document.getElementById('modal-controller-2')


person = document.getElementById('results')
boxes = document.querySelectorAll('.box')

won = document.getElementById('won')





boxes.forEach(function (box) {
    box.addEventListener('click', function () {
        if(this.innerHTML === ''){
            this.innerHTML = val
        }

        if (val === 'X'){
            val = 'O'
        }else if(val === 'O'){
            val = 'X'
        }

        if (is_winner_found === 0){
            check_winner()
        }
        counter += 1

    })

})

function if_equals_x(a,b,c) {
    if (a==='X' && b==='X' && c==='X'){
        return true
    }

}

function if_equals_o(a,b,c) {
    if (a==='O' && b==='O' && c==='O'){
        return true
    }

}

function check_winner() {
    var b1 = document.getElementById('1').innerHTML
    var b2 = document.getElementById('2').innerHTML
    var b3 = document.getElementById('3').innerHTML
    var b4 = document.getElementById('4').innerHTML
    var b5 = document.getElementById('5').innerHTML
    var b6 = document.getElementById('6').innerHTML
    var b7 = document.getElementById('7').innerHTML
    var b8 = document.getElementById('8').innerHTML
    var b9 = document.getElementById('9').innerHTML

    if (if_equals_x(b1, b2, b3)) {
        winner = 'X'
    }else if (if_equals_x(b4, b5, b6)) {
        winner = 'X'
    } else if (if_equals_x(b7, b8, b9)) {
        winner = 'X'
    } else if (if_equals_x(b1, b4, b7)) {
        winner = 'X'
    } else if (if_equals_x(b2, b5, b8)) {
        winner = 'X'
    } else if (if_equals_x(b3, b6, b9)) {
        winner = 'X'
    } else if (if_equals_x(b1, b5, b9)) {
        winner = 'X'
    } else if (if_equals_x(b3, b5, b7)) {
        winner = 'X'
    } else if (if_equals_o(b1, b2, b3)) {
        winner = 'O'
    } else if (if_equals_o(b4, b5, b6)) {
        winner = 'O'
    } else if (if_equals_o(b7, b8, b9)) {
        winner = 'O'
    } else if (if_equals_o(b1, b4, b7)) {
        winner = 'O'
    } else if (if_equals_o(b2, b5, b8)) {
        winner = 'O'
    } else if (if_equals_o(b3, b6, b9)) {
        winner = 'O'
    } else if (if_equals_o(b1, b5, b9)) {
        winner = 'O'
    } else if (if_equals_o(b3, b5, b7)) {
        winner = 'O'
    }

    if (winner.length > 0){
        is_winner_found += 1
        if (winner === 'X'){
            won.innerHTML = `<span style="color: green;" class="winner">${pxName}</span`
            setTimeout(function () {
                modalPage1.style.display = 'block'
                pxScore += 1
                document.getElementById('px-score').innerHTML = pxScore

            }, 500)
        }else if (winner === 'O'){
            won.innerHTML =  `<span style="color: blue;" class="winner">${pyName.toLocaleUpperCase()}</span`
           setTimeout(function () {
               modalPage1.style.display = 'block'
               pyScore += 1
               document.getElementById('py-score').innerHTML = pyScore

           }, 500)
        }
    }else if(winner.length === 0 && counter === 9){
        won.innerHTML = `<h2>The Game is a Draw</h2><h4>No one wins this round</h4>`
        modalPage1.style.display = 'block'
    }


}

function modal_close() {
    modalPage.style.display = 'none';

}


function start() {
    pxInput = document.getElementById('px').value
    pyInput = document.getElementById('py').value

    px = document.getElementById('playerx')
    py = document.getElementById('playery')



    if (pxInput.length > 0 && pyInput.length > 0){
        px.innerHTML = pxInput+'(X)'+': '
        py.innerHTML = pyInput+'(O)'+': '

        pxName = pxInput
        pyName = pyInput

        modalPage.style.display = 'none';
    }
}

function restart() {
    counter = 1;
    is_winner_found = 0;
    winner = ''
    document.getElementById('1').innerHTML = ''
    document.getElementById('2').innerHTML = ''
    document.getElementById('3').innerHTML = ''
    document.getElementById('4').innerHTML = ''
    document.getElementById('5').innerHTML = ''
    document.getElementById('6').innerHTML = ''
    document.getElementById('7').innerHTML = ''
    document.getElementById('8').innerHTML = ''
    document.getElementById('9').innerHTML = ''
    modalPage1.style.display = 'none'
    val = 'X'

}

console.log(boxes)