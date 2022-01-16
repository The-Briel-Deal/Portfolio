let createBoard = () => {
    var tetrisBoard = $("#tetris");
    for (x = 0; x < 40; x++) {
        for (y = 0; y < 30; y++) {
            tetrisBoard.append(`<span class="tetris_unfilled" id="${x}_${y}"></span>`)
        };
        tetrisBoard.append(`<br>`)
    };
    $("html").keydown(function (event) {
        changeBlockPos(event.key);
    });

    let block_tl = [13, 0];

    full_block = [
        [0, 1, 1],
        [0, 1, 0],
        [0, 1, 0]
    ]

    function refresh() {
        $(".tetris_filled").removeClass("tetris_filled");
        for(y = 0; y < 3; y++){
            for(x = 0; x < 3; x++){
                if(full_block[y][x]){
                    let y_pos = block_tl[1] + y;
                    let x_pos = block_tl[0] + x;
                    $(`#${y_pos}_${x_pos}`).addClass("tetris_filled");
                    console.log(`#${y_pos}_${x_pos}`)
                }
            }
        }
    }

    function changeBlockPos(r_l) {
        let x_most = 0;
            switch (r_l) {
                case "ArrowRight":
                    for(let y = 0; y < full_block.length; y++){
                        for(let x = 0; x < full_block[y].length; x++){
                            if (x > x_most){
                                x_most = x;
                            }
                        }
                    }
                    if((block_tl[0] + x_most) <= 29){
                        block_tl[0]++;
                        refresh();
                    }
                    break;
                case "ArrowLeft":
                    for(let y = 0; y < full_block.length; y++){
                        for(let x = 0; x < full_block[y].length; x++){
                            if (x > x_most){
                                x_most = x;
                            }
                        }
                    }
                    if((block_tl[0] + 2 - x_most) > 0){
                        block_tl[0]--;
                        refresh();
                    }
                    break;
                case "ArrowDown":
                    for(let lowest_point = 0; lowest_point < full_block.length; lowest_point++){
                        if(full_block[lowest_point].includes(1)){
                            var low_point = lowest_point;
                        }
                    }
                    console.log(block_tl[1] + low_point)
                    if((block_tl[1] + low_point) < 39){
                    block_tl[1]++;
                    refresh();
                    }
                    break;
                case "r":
                    let new_block = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
                    new_block[0][2] = full_block[0][0];
                    new_block[1][2] = full_block[0][1];
                    new_block[2][2] = full_block[0][2];
                    new_block[2][1] = full_block[1][2];
                    new_block[2][0] = full_block[2][2];
                    new_block[1][0] = full_block[2][1];
                    new_block[0][0] = full_block[2][0];
                    new_block[0][1] = full_block[1][0];
                    new_block[1][1] = full_block[1][1];
                    full_block = new_block;
                    refresh();
                    break;
                default:
                    break;
            };
    }
    setInterval(() => {
        for(let lowest_point = 0; lowest_point < full_block.length; lowest_point++){
            if(full_block[lowest_point].includes(1)){
                var low_point = lowest_point;
            }
        }
        if((block_tl[1] + low_point) < 39){
            block_tl[1]++;
        }
            refresh();
    }, 1000);

};
createBoard();