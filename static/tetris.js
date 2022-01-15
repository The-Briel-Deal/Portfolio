let createBoard = () => {
    var tetrisBoard = $("#tetris");
    for (x = 0; x < 40; x++) {
        for (y = 0; y < 30; y++) {
            tetrisBoard.append(`<span class="tetris_unfilled" id="${x}_${y}"></span>`)
        };
        tetrisBoard.append(`<br>`)
    };

    var x = 0;
    var y = 10;
    var x_p = 0;
    var y_p = 0;
    $("html").keydown(function (event) {
        changeBlockPos(event.key);
    });

    full_block = [{
        x: 6,
        y: 4,
        x_p: 0,
        y_p: 0
    }, {
        x: 5,
        y: 4,
        x_p: 0,
        y_p: 0
    }, {
        x: 4,
        y: 4,
        x_p: 0,
        y_p: 0
    }, {
        x: 4,
        y: 3,
        x_p: 0,
        y_p: 0
    }]
    // for(i=0; i<full_block.length; i++){
    //     console.log(`${i} x: ${full_block[i].x}`);
    //     console.log(`${i} y: ${full_block[i].y}`);
    // }

    function refresh() {
        for (i = 0; i < full_block.length; i++) {
            $(`#${full_block[i].x_p}_${full_block[i].y_p}`).removeClass("tetris_filled");
        }
        for (i = 0; i < full_block.length; i++) {
            $(`#${full_block[i].x}_${full_block[i].y}`).addClass("tetris_filled");
            full_block[i].x_p = full_block[i].x;
            full_block[i].y_p = full_block[i].y;
        }

    }

    function changeBlockPos(r_l) {
        let g_y = 0; //Greatest Y
        let m_y = 29; //Minimum Y
        for (i = 0; i < full_block.length; i++){
            if(full_block[i].y > g_y){
                g_y = full_block[i].y
            }
            if(m_y > full_block[i].y){
                m_y = full_block[i].y
            }
        }
            switch (r_l) {
                case "ArrowRight":
                    if (g_y < 29) {
                        for (i = 0; i < full_block.length; i++) {
                            full_block[i].y++;
                        }
                    }
                    refresh();
                    break;
                case "ArrowLeft":
                    if (m_y > 0){
                        for (i = 0; i < full_block.length; i++) {
                            full_block[i].y--;
                        }
                    }
                    refresh();
                    break;
                case "ArrowDown":
                    for (i = 0; i < full_block.length; i++) {
                        full_block[i].x++;
                    }
                    refresh();
                    break;
                default:
                    break;
            };
    }
    setInterval(() => {
        for (i = 0; i < full_block.length; i++) {
            full_block[i].x++;
        }
        refresh();
    }, 1000);

};
createBoard();