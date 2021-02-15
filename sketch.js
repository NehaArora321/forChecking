var corona, coronaimg;
var police, policeimg, policeg;
var doctor, doctorimg, doctorg;
var injection, injectionimg, edges, injg;
var gameState="play"

function preload() {
    policeimg = loadImage("police.png");
    doctorimg = loadImage("doctor.png");
    coronaimg = loadImage("corona.png");
    injectionimg = loadImage("injection.png");
}

function setup() {
    createCanvas(1200, 570);

    corona = createSprite(100, 300, 50, 50);
    corona.addImage(coronaimg);
    corona.scale = 0.5
    corona.velocityX = 5;

    edges = createEdgeSprites();

    policeg = new Group();
    doctorg = new Group();
    injg = new Group();
}

function draw() {
    background("lightgrey");
    corona.bounceOff(edges[1])
    corona.bounceOff(edges[0])
    // if(frameCount!==1000000){

    // corona = createSprite(100,300,50,50);
    // corona.addImage(coronaimg);
    // corona.scale=0.5
    // corona.velocityX=2;
    if(gameState==="play"){
    Police();
    Doctor();

    if (corona.isTouching(policeg)) {
        policeg.destroyEach();
    }

    if (corona.isTouching(doctorg)) {
        doctorg.destroyEach();
    }

    inject()
    // }  else if(frameCount === 1000000){
    //         doctorg.destroy();
    //         policeg.destroy();
    //         injection = createSprite(1250,285,50,80);
    //  injection.addImage(injectionimg);
    //  injection.velocityX=-5;
    //  fill("black");
    //  text("Vaccine",injection.y+20,injection.x);
    if (injg.isTouching(corona)) {
                    corona.destroy();
                   // injection.x=600;
                  
                   
                    gameState="end";
        //         }
         }    
        }
        else{
            textSize(30)
            text("Corona Checkmated!!!!",200,100);
            doctorg.setVelocityXEach(0)
            injg.setVelocityXEach(0)
            policeg.setVelocityXEach(0)
        }
        drawSprites();
    }

    function Police() {
        if (frameCount % 60 === 0) {
            police = createSprite(1250, 285, 20, 540);
            police.addImage(policeimg);
            police.velocityX = -5;
            police.lifetime = 1300;
            policeg.add(police);
        }
    }

    function Doctor() {
        if (frameCount % 230 === 0) {
            doctor = createSprite(1250, 285, 20, 540);
            doctor.addImage(doctorimg);
            doctor.velocityX = -5;
            doctor.lifetime = 1300;
            doctorg.add(doctor);
        }
    }

    function inject() {
        if (frameCount % 80 === 0) {
            injection = createSprite(1250, 285, 50, 80);
            injection.addImage(injectionimg);
            injection.velocityX = -5;
            injection.scale=0.2
            //fill("black");
            //text("Vaccine", 200, 100);

            injection.lifetime = 1300;
            injg.add(injection)
        }

    }