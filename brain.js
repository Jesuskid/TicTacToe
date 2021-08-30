
function calculations(x, y, z) {
    var res = false;
    if(x==='X' && y==='X'){
        z.innerHTML = 'O'
        res = true
    }else if(z==='X' && y==='X'){
        x.innerHTML = 'O'
        res = true
    }else if(x==='X' && z==='X'){
        y.innerHTML = 'O'
        res = true
    }

    return res
}

function check(b1,b2,b3,b4,b5,b6,b7,b8,b9) {
    boxes = [b1,b2,b3,b4,b5,b6,b7,b8,b9]
    new_boxes =  []
    for(i in boxes){
        if(boxes[i].length <= 0){
            new_boxes.push(boxes[i])
        }
    }

    var randomIndex = Math.floor(Math.random() * boxes.length);
    new_boxes[randomIndex] = 'O'

}