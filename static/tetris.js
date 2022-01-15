let createBoard = () => {
    var tetrisBoard = $("#tetris");
    for (x = 0; x <40; x++){
        for (y = 0; y < 30; y++){
            tetrisBoard.append(`<span class="tetris_unfilled" id="${x}_${y}"></span>`)
        };
        tetrisBoard.append(`<br>`)
    };  
    
    var x = 0;
    var y = 10;
    var x_p = 0;
    var y_p = 0;
    $("html").keydown(function(event) {
        console.log(event.key)
        if(event.key === "ArrowRight"){
            changeBlockPos("r");
        } else if(event.key === "ArrowLeft"){
            changeBlockPos("l");
        }
      });

    function changeBlockPos(r_l){
        if(r_l === "r"){
            y++
        } else if(r_l === "l"){
            y--
        }
        $(`#${x}_${y}`).addClass("tetris_filled");
        $(`#${x_p}_${y_p}`).removeClass("tetris_filled");
        x_p = x;
        y_p = y;
    }
    setInterval(()=>{
        x++;
        $(`#${x}_${y}`).addClass("tetris_filled");
        $(`#${x_p}_${y_p}`).removeClass("tetris_filled");
        x_p = x;
        y_p = y;
        

    },1000);
        
};
createBoard();