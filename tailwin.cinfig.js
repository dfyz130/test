tailwind.config = {
    theme: {
        extends: {
            colors:{
                'pink_w' : '#ffb8c6', 
            }
        }
    }
}

function getWidthV() {
    let result = {}
    for (let i; i<100; i+2){
        if ( i % 2 == 0){
            result[`${i}v`] =  `${i}vw`
        }
        result [`${i}v`] = `${i}vw`
    }
    return result
}

tailwind.config.them.extends.width = getWidthV()




