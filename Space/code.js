var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["d5e4936b-f66c-4fc2-9402-83afc8be505a","858b951b-da76-4d77-945b-80656e87bcbc","0f1845e8-afc7-46ed-a7f5-b0491176cda4","52f6eae6-18d9-4453-a264-d85ae139977e","b757b52d-8d9a-4277-b17d-4067917bfbb7","e18ad9e9-3da3-476f-bf39-870f6ad3d4d2","7a5a05f7-2d20-4697-9cb6-1f4080c0be21","5fbde311-c6da-4399-abde-6a6f2bf32181","fe361ca5-da6b-412b-8139-6abfe7ae1e93","66b1e149-ab9b-42c6-a90a-21f7fc56a6a2","d22c2d06-bbf0-4beb-92da-32c070a3e444","55822e60-9eaa-4e12-9b81-8fa04b5148ca","853a7c7e-d850-4d08-a292-25c927b5c69c","d05cd3c8-e95d-497f-96f0-c44ec0da62f6","fe11162f-9669-4ed8-b361-d4a609dfda36","0dae09d1-5cd7-4d06-b8b7-c496282193a3","0ad1d975-dceb-4f05-b9d0-99c9ab9b41be","e0d0da6b-561a-44af-be79-952aebdabe64","0470a217-d9f7-421c-b545-b8e6e0cdf6aa"],"propsByKey":{"d5e4936b-f66c-4fc2-9402-83afc8be505a":{"name":"emoji_01_1","sourceUrl":"assets/api/v1/animation-library/gamelab/64UquKf.BELLAWoDPxffw7NAEorufIff/category_emoji/emoji_01.png","frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"64UquKf.BELLAWoDPxffw7NAEorufIff","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/64UquKf.BELLAWoDPxffw7NAEorufIff/category_emoji/emoji_01.png"},"858b951b-da76-4d77-945b-80656e87bcbc":{"name":"emoji_02_1","sourceUrl":"assets/api/v1/animation-library/gamelab/vaoNISiP9MB6aeAu5TySPtIBPDc9JMLV/category_emoji/emoji_02.png","frameSize":{"x":326,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"vaoNISiP9MB6aeAu5TySPtIBPDc9JMLV","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":326,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/vaoNISiP9MB6aeAu5TySPtIBPDc9JMLV/category_emoji/emoji_02.png"},"0f1845e8-afc7-46ed-a7f5-b0491176cda4":{"name":"emoji_03_1","sourceUrl":"assets/api/v1/animation-library/gamelab/xP.DHAVGqF_lL_bupFzFaHUVvURu1Esg/category_emoji/emoji_03.png","frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"xP.DHAVGqF_lL_bupFzFaHUVvURu1Esg","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xP.DHAVGqF_lL_bupFzFaHUVvURu1Esg/category_emoji/emoji_03.png"},"52f6eae6-18d9-4453-a264-d85ae139977e":{"name":"emoji_04_1","sourceUrl":"assets/api/v1/animation-library/gamelab/0RmqsWfCdwEeM9yHEyYWleWM8lEg3NkN/category_emoji/emoji_04.png","frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"0RmqsWfCdwEeM9yHEyYWleWM8lEg3NkN","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/0RmqsWfCdwEeM9yHEyYWleWM8lEg3NkN/category_emoji/emoji_04.png"},"b757b52d-8d9a-4277-b17d-4067917bfbb7":{"name":"emoji_05_1","sourceUrl":"assets/api/v1/animation-library/gamelab/NxaX3YQWiFYsZndIf9OBIPpFIhBaIPbd/category_emoji/emoji_05.png","frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"NxaX3YQWiFYsZndIf9OBIPpFIhBaIPbd","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/NxaX3YQWiFYsZndIf9OBIPpFIhBaIPbd/category_emoji/emoji_05.png"},"e18ad9e9-3da3-476f-bf39-870f6ad3d4d2":{"name":"emoji_06_1","sourceUrl":"assets/api/v1/animation-library/gamelab/_Xscg5fB95TRoOqlt3745W6Gucfq7NCS/category_emoji/emoji_06.png","frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"_Xscg5fB95TRoOqlt3745W6Gucfq7NCS","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/_Xscg5fB95TRoOqlt3745W6Gucfq7NCS/category_emoji/emoji_06.png"},"7a5a05f7-2d20-4697-9cb6-1f4080c0be21":{"name":"emoji_07_1","sourceUrl":"assets/api/v1/animation-library/gamelab/4xfJ8lWLJP88Hv2t9FZCDqx1yFRmJL5x/category_emoji/emoji_07.png","frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"4xfJ8lWLJP88Hv2t9FZCDqx1yFRmJL5x","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/4xfJ8lWLJP88Hv2t9FZCDqx1yFRmJL5x/category_emoji/emoji_07.png"},"5fbde311-c6da-4399-abde-6a6f2bf32181":{"name":"emoji_08_1","sourceUrl":"assets/api/v1/animation-library/gamelab/pfqz473pmYcginA5msSC.2xMcbZ9RJ4D/category_emoji/emoji_08.png","frameSize":{"x":332,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"pfqz473pmYcginA5msSC.2xMcbZ9RJ4D","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":332,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/pfqz473pmYcginA5msSC.2xMcbZ9RJ4D/category_emoji/emoji_08.png"},"fe361ca5-da6b-412b-8139-6abfe7ae1e93":{"name":"emoji_09_1","sourceUrl":"assets/api/v1/animation-library/gamelab/A0SsMIQfC0ZDDQ3lVB5mUa1CuSvxmK45/category_emoji/emoji_09.png","frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"A0SsMIQfC0ZDDQ3lVB5mUa1CuSvxmK45","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/A0SsMIQfC0ZDDQ3lVB5mUa1CuSvxmK45/category_emoji/emoji_09.png"},"66b1e149-ab9b-42c6-a90a-21f7fc56a6a2":{"name":"emoji_10_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Apw5nGPd7roE1BLxSsq8O6sLbYKRjkN6/category_emoji/emoji_10.png","frameSize":{"x":318,"y":302},"frameCount":1,"looping":true,"frameDelay":2,"version":"Apw5nGPd7roE1BLxSsq8O6sLbYKRjkN6","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":318,"y":302},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Apw5nGPd7roE1BLxSsq8O6sLbYKRjkN6/category_emoji/emoji_10.png"},"d22c2d06-bbf0-4beb-92da-32c070a3e444":{"name":"emoji_11_1","sourceUrl":"assets/api/v1/animation-library/gamelab/5dfwGwvOHeRPpR_p8KVezuREARYyKasG/category_emoji/emoji_11.png","frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"5dfwGwvOHeRPpR_p8KVezuREARYyKasG","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/5dfwGwvOHeRPpR_p8KVezuREARYyKasG/category_emoji/emoji_11.png"},"55822e60-9eaa-4e12-9b81-8fa04b5148ca":{"name":"emoji_12_1","sourceUrl":"assets/api/v1/animation-library/gamelab/n0ZKL7BCk7DR.V7XB_SckQwGDUU4SyDZ/category_emoji/emoji_12.png","frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"n0ZKL7BCk7DR.V7XB_SckQwGDUU4SyDZ","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/n0ZKL7BCk7DR.V7XB_SckQwGDUU4SyDZ/category_emoji/emoji_12.png"},"853a7c7e-d850-4d08-a292-25c927b5c69c":{"name":"emoji_13_1","sourceUrl":"assets/api/v1/animation-library/gamelab/DB.IN47rPOaJyW6TvK0aaquA24aEXhVR/category_emoji/emoji_13.png","frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"DB.IN47rPOaJyW6TvK0aaquA24aEXhVR","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/DB.IN47rPOaJyW6TvK0aaquA24aEXhVR/category_emoji/emoji_13.png"},"d05cd3c8-e95d-497f-96f0-c44ec0da62f6":{"name":"emoji_14_1","sourceUrl":"assets/api/v1/animation-library/gamelab/dQITurXMceQ3DV3KwOgDwQcohVpN.3b3/category_emoji/emoji_14.png","frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"dQITurXMceQ3DV3KwOgDwQcohVpN.3b3","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dQITurXMceQ3DV3KwOgDwQcohVpN.3b3/category_emoji/emoji_14.png"},"fe11162f-9669-4ed8-b361-d4a609dfda36":{"name":"emoji_16_1","sourceUrl":"assets/api/v1/animation-library/gamelab/LW3NVAYESDS18f5zmtSQbke0B78Bo_I2/category_emoji/emoji_16.png","frameSize":{"x":304,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"LW3NVAYESDS18f5zmtSQbke0B78Bo_I2","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":304,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/LW3NVAYESDS18f5zmtSQbke0B78Bo_I2/category_emoji/emoji_16.png"},"0dae09d1-5cd7-4d06-b8b7-c496282193a3":{"name":"emoji_19_1","sourceUrl":"assets/api/v1/animation-library/gamelab/h_LF7PqnHba0BOlL85_9g6TgRHqzd_Lh/category_emoji/emoji_19.png","frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"h_LF7PqnHba0BOlL85_9g6TgRHqzd_Lh","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/h_LF7PqnHba0BOlL85_9g6TgRHqzd_Lh/category_emoji/emoji_19.png"},"0ad1d975-dceb-4f05-b9d0-99c9ab9b41be":{"name":"playerShip2_red_1","sourceUrl":"assets/api/v1/animation-library/gamelab/zFVGNRWF8rd6TAAffIX0n_fD.xUmD7Wp/category_vehicles/playerShip2_red.png","frameSize":{"x":112,"y":75},"frameCount":1,"looping":true,"frameDelay":2,"version":"zFVGNRWF8rd6TAAffIX0n_fD.xUmD7Wp","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":112,"y":75},"rootRelativePath":"assets/api/v1/animation-library/gamelab/zFVGNRWF8rd6TAAffIX0n_fD.xUmD7Wp/category_vehicles/playerShip2_red.png"},"e0d0da6b-561a-44af-be79-952aebdabe64":{"name":"retroship_20_1","sourceUrl":"assets/api/v1/animation-library/gamelab/gbf0Zb7bxTR0n5zR4NPiNOfoVp._0ywn/category_retro/retroship_20.png","frameSize":{"x":283,"y":386},"frameCount":1,"looping":true,"frameDelay":2,"version":"gbf0Zb7bxTR0n5zR4NPiNOfoVp._0ywn","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":283,"y":386},"rootRelativePath":"assets/api/v1/animation-library/gamelab/gbf0Zb7bxTR0n5zR4NPiNOfoVp._0ywn/category_retro/retroship_20.png"},"0470a217-d9f7-421c-b545-b8e6e0cdf6aa":{"name":"santa_1","sourceUrl":"assets/api/v1/animation-library/gamelab/9ZleRnJkMxYhfpPY2zZrrikGdZ6H6F6l/category_backgrounds/background_santa.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"9ZleRnJkMxYhfpPY2zZrrikGdZ6H6F6l","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/9ZleRnJkMxYhfpPY2zZrrikGdZ6H6F6l/category_backgrounds/background_santa.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var fundo = createSprite(200, 200);
fundo.setAnimation("santa_1");



//criando a raquete e a bola
var paddle = createSprite(200, 375, 50, 15);
paddle.setAnimation("retroship_20_1");
paddle.scale=0.2;
var ball = createSprite(150, 250, 20, 20);
ball.setAnimation("playerShip2_red_1");
ball.scale=0.5;

var score=0;
var gameState ="serve";

//primeira fila de caixas
var box1 = createSprite(25, 75, 50, 50);
box1.setAnimation("emoji_01_1");
box1.scale=0.1;
var box2 = createSprite(75, 75, 50, 50);
box2.setAnimation("emoji_02_1");
box2.scale=0.1;
var box3 = createSprite(125, 75, 50, 50);
box3.setAnimation("emoji_03_1");
box3.scale=0.1;
var box4 = createSprite(175, 75, 50, 50);
box4.setAnimation("emoji_04_1");
box4.scale=0.1;
var box5 = createSprite(225, 75, 50, 50);
box5.setAnimation("emoji_05_1");
box5.scale=0.1;
var box6 = createSprite(275, 75, 50, 50);
box6.setAnimation("emoji_06_1");
box6.scale=0.1;
var box7 = createSprite(325, 75, 50, 50);
box7.setAnimation("emoji_07_1");
box7.scale=0.1;
var box8 = createSprite(375, 75, 50, 50);
box8.setAnimation("emoji_08_1");
box8.scale=0.1;

//segunda fila de caixas
var box9 = createSprite(25, 125, 50, 50);
box9.setAnimation("emoji_09_1");
box9.scale=0.1;
var box10 = createSprite(75, 125, 50, 50);
box10.setAnimation("emoji_10_1");
box10.scale=0.1;
var box11 = createSprite(125, 125, 50, 50);
box11.setAnimation("emoji_11_1");
box11.scale=0.1;
var box12 = createSprite(175, 125, 50, 50);
box12.setAnimation("emoji_12_1");
box12.scale=0.1;
var box13 = createSprite(225, 125, 50, 50);
box13.setAnimation("emoji_13_1");
box13.scale=0.1;
var box14 = createSprite(275, 125, 50, 50);
box14.setAnimation("emoji_14_1");
box14.scale=0.1;
var box15 = createSprite(325, 125, 50, 50);
box15.setAnimation("emoji_19_1");
box15.scale=0.1;
var box16 = createSprite(375, 125, 50, 50);
box16.setAnimation("emoji_16_1");
box16.scale=0.1;



function draw() {
  background("white");
  
  //exibir pontuação
  textSize(15);
  stroke("red");
  text("Pontuação :"+score,300,20);
  
  if(gameState == "serve")
  {
   //exibindo texto de boas-vindas
    textSize();
    text("Bem-vindo! Pressione Enter para iniciar.",60,200);
     //Movendo a bola ao pressionar a tecla enter
  if(keyDown("enter")){
   // Mude o valor de gamestate para play
    gameState = "play"
    ball.velocityX = 3;
    ball.velocityY = 4;
  }
    
  }
  
  if(gameState == "play")
  {
    //Movendo a raquete com o mouse ao longo do eixo X
  paddle.x=World.mouseX;
  
    //se a bola tocar na borda inferior Ou se os pontos forem iguias a 16
    //o estado do jogo deve pudar para end
    if (ball.isTouching(bottomEdge)|| score == 16 ){
      gameState = "end"
    }
  
  }
  
  if(gameState == "end")
  {
    ball.velocityX = 0;
    ball.velocityY = 0;
    textSize(15);
    text("Game over",140,200);
  }
 
 
  
  //Fazendo a bola quicar na raquete e em três lados da tela
  createEdgeSprites();
  ball.bounceOff(rightEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(topEdge);
  ball.bounceOff(paddle);

  //Movendo a raquete com o mouse ao longo do eixo x
  paddle.x=World.mouseX;
  
  ///Destruir as caixas quando a bola as toca
  if(ball.isTouching(box1))
  {
    score=score+1;
    box1.destroy();
  }
  
  if(ball.isTouching(box2))
  {
    score=score+1;
    box2.destroy();
  }
  
  if(ball.isTouching(box3))
  {
    score=score+1;
    box3.destroy();
  }
  
  if(ball.isTouching(box4))
  {
    score=score+1;
    box4.destroy();
  }
  
  if(ball.isTouching(box5))
  {
    score=score+1;
    box5.destroy();
  }
  
  if(ball.isTouching(box6))
  {
    score=score+1;
    box6.destroy();
  }
  
  if(ball.isTouching(box7))
  {
    score=score+1;
    box7.destroy();
  }
  
  if(ball.isTouching(box8))
  {
    score=score+1;
    box8.destroy();
  }
  
  if(ball.isTouching(box9))
  {
    score=score+1;
    box9.destroy();
  }
  
  if(ball.isTouching(box10))
  {
    score=score+1;
    box10.destroy();
  }
  if(ball.isTouching(box11))
  {
    score=score+1;
    box11.destroy();
  }
  if(ball.isTouching(box12))
  {
    score=score+1;
    box12.destroy();
  }
  if(ball.isTouching(box13))
  {
    score=score+1;
    box13.destroy();
  }
  if(ball.isTouching(box14))
  {
    score=score+1;
    box14.destroy();
  }
  if(ball.isTouching(box15))
  {
    score=score+1;
    box15.destroy();
  }
  if(ball.isTouching(box16))
  {
    score=score+1;
    box16.destroy();
  }
  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
