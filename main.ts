namespace SpriteKind {
    export const explode4 = SpriteKind.create()
    export const explode = SpriteKind.create()
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    jump_counter = 0
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jump_counter == 0) {
        Hero.vy = -150
        jump_counter += 1
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(explode[randint(0, explode.length - -1)], Hero, randint(-15, 15), randint(-30, -35))
})
let projectile: Sprite = null
let explode: Sprite[] = []
let jump_counter = 0
let Hero: Sprite = null
Hero = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . f f b b b b f f f . . . . 
    . . f b b b d f f f b b f . . . 
    . . f f f d d d d b b b f . . . 
    . f b d f d 1 f b 1 f b b f . . 
    . f b d f d d b b b b b f f . . 
    . f b b b b 2 2 2 2 2 b b f . . 
    . f b f f b 2 f f f 2 b c f . . 
    . f f f b b 2 2 2 2 2 b c f . . 
    . . f c c b b b b b f f f . . . 
    . . f c c c f c c f f c f . . . 
    . . . f f c f c c c f f . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
jump_counter = 0
explode = [sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . d d d d d . . . . . . . . . . 
    . d d d d d . . . . . . . . . . 
    . d d d d d . . . . . . . . . . 
    . d d d d d . . . . . . . . . . 
    . d d d d d . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.explode), sprites.create(img`
    2 
    `, SpriteKind.explode), img`
    5 . 
    . . 
    `, img`
    3 . 
    . . 
    `, img`
    1 . 
    . . 
    `]
tiles.setTilemap(tilemap`level1`)
game.onUpdateInterval(10, function () {
    Hero.vy += 5
    for (let value of explode) {
        value.vy += 5
    }
})
game.onUpdateInterval(10, function () {
    if (Hero.vx > 0) {
        Hero.vx += -2
    }
    if (Hero.vx < 0) {
        Hero.vx += 2
    }
})
game.onUpdateInterval(10, function () {
    if (controller.right.isPressed()) {
        if (Hero.vx < 200) {
            Hero.vx += 10
        }
    }
    if (controller.left.isPressed()) {
        if (Hero.vx < 200) {
            Hero.vx += -10
        }
    }
})
game.onUpdateInterval(300, function () {
    if (Hero.vx != 0) {
        animation.runImageAnimation(
        Hero,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . f f b b b b f f f . . . . 
            . . f b b b d f f f b b f . . . 
            . . f f f d d d d b b b f . . . 
            . f b d f d 1 f b 1 f b b f . . 
            . f b d f d d b b b b b f f . . 
            . f b b b b 2 2 2 2 2 b b f . . 
            . f b f f b 2 f f f 2 b c f . . 
            . f f f b b 2 2 2 2 2 b c f . . 
            . . f c c b b b b b f f f . . . 
            . . f c c c f c c f f c f . . . 
            . . . f f c f c c c f f . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . f f f b b b b f f . . . . 
            . . f b b f d d f f f f f . . . 
            . . f b b f d d d b b b f . . . 
            . f b f f d 1 f b 1 f b b f . . 
            . f b d d d d b b b b b f f . . 
            . f f f b b 2 2 2 2 2 b b f . . 
            . f b f f b 2 f f f 2 b f f . . 
            . f b b b b 2 2 2 2 2 b c f . . 
            . . f c c f b b b f c c f . . . 
            . . f c f c c c f f c c f . . . 
            . . . f f c c c f c f f . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . f f f b f b b f f . . . . 
            . . f b b d d f b f f f f . . . 
            . . f b f f f d d f b b f . . . 
            . f b d d d 1 f b 1 f b b f . . 
            . f f f f d d b b b b b b f . . 
            . f b f b b 2 2 2 2 2 b b f . . 
            . f b b f b 2 f f f 2 b f f . . 
            . f b b f b 2 2 2 2 2 b c f . . 
            . . f f c c f b b c c f f . . . 
            . . f c c f f c f f c c f . . . 
            . . . f f f c c f c f f . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        false
        )
    }
})
