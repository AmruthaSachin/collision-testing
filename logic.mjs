// logic.mjs
export function checkCollision(snake, canvasWidth, canvasHeight) {
    let head = snake[0];
    if (head.x < 0 || head.x >= canvasWidth || head.y < 0 || head.y >= canvasHeight) return true;
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) return true;
    }
    return false;
}
