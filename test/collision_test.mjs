// collision_test.mjs
import assert from 'assert';  // Correct way to import assert in ESM

import { checkCollision } from '../logic.mjs';

describe("checkCollision", function () {

    // Test for boundary collision
    it("should return true if snake head collides with boundaries", function () {
        const canvasWidth = 400;  // Canvas width
        const canvasHeight = 400; // Canvas height
        
        // Example of collision with left boundary
        const snake1 = [{ x: -10, y: 200 }];  // Snake head outside the canvas (left)
        const result1 = checkCollision(snake1, canvasWidth, canvasHeight);
        assert.strictEqual(result1, true);  // Should return true since it's out of bounds

        // Example of collision with right boundary
        const snake2 = [{ x: 410, y: 200 }];  // Snake head outside the canvas (right)
        const result2 = checkCollision(snake2, canvasWidth, canvasHeight);
        assert.strictEqual(result2, true);  // Should return true since it's out of bounds

        // Example of collision with top boundary
        const snake3 = [{ x: 200, y: -10 }];  // Snake head outside the canvas (top)
        const result3 = checkCollision(snake3, canvasWidth, canvasHeight);
        assert.strictEqual(result3, true);  // Should return true since it's out of bounds

        // Example of collision with bottom boundary
        const snake4 = [{ x: 200, y: 410 }];  // Snake head outside the canvas (bottom)
        const result4 = checkCollision(snake4, canvasWidth, canvasHeight);
        assert.strictEqual(result4, true);  // Should return true since it's out of bounds
    });

    // Test for self collision
    it("should return true if snake head collides with its body", function () {
        const snake = [
            { x: 200, y: 200 },  // head
            { x: 200, y: 200 },  // body (same position as head, collision occurs)
            { x: 300, y: 200 }   // another body segment (not colliding with the head)
        ];
        const canvasWidth = 400;
        const canvasHeight = 400;
        const result = checkCollision(snake, canvasWidth, canvasHeight);
        assert.strictEqual(result, true);  // Should return true due to self-collision
    });

    // Test for no collision
    it("should return false if snake head is free from collision", function () {
        const snake = [
            { x: 100, y: 100 },  // head
            { x: 90, y: 100 },   // body
            { x: 80, y: 100 }    // body
        ];
        const canvasWidth = 400;
        const canvasHeight = 400;
        const result = checkCollision(snake, canvasWidth, canvasHeight);
        assert.strictEqual(result, false);  // Should return false, no collision
    });
});