// parameters +  colors
const SNOW_COLOR = "snow";
const SNOWFLAKES_PER_LAYER = 200;
const MAX_SIZE = 4;
const GRAVITY = 0.5;
const LAYER_COUNT = 3;

const SKY_COLOR = "#B1E8FF";
const SKY_SPACE = 0.4;
const SKY_AMP = 150;
const SKY_ZOOM = 0.0025;
const SKY_LAYER_OFFSET = 3;

const WIND_SPEED = 1;
const WIND_CHANGE = 0.0025;

const SUN_COLOR = "#ffe2d0";
const SUN_GLOW = 60;
const SUN_RADIUS = 100;

const TREE_COLOR = "#623a0b";
const TREE_RADIUS = 60;

const RIDGE_TOP_COLOR = "#8086d8";
const RIDGE_BOT_COLOR = "#81a2d9";
const RIDGE_STEP = 3;
const RIDGE_AMP = 300;
const RIDGE_ZOOM = 0.0045;

const SNOWFLAKES = [];

//runs when sketch is opened //
function setup() {
    createCanvas(1050, 1050);
    fill(SNOW_COLOR);
    noStroke();

    //snowflake w random positions//
    for (let l = 0; l < LAYER_COUNT; l++) {
        SNOWFLAKES.push([]);
        for (let i = 0; i < SNOWFLAKES_PER_LAYER; i++) {
          SNOWFLAKES[l].push({
            x: random(width),
            y: random(height),
            mass: random(0.75, 1.25),
            l: l + 1
          });
        }
      }
    }



//runs every frame AND refreshes many times per second
function draw() {
    background(SKY_COLOR);
    const skyHeight = round(height * SKY_SPACE);
  
    for (let i = 1; i < LAYER_COUNT; i++) {
      drawRidge(
        i,
        (i * skyHeight) / LAYER_COUNT,
        SKY_AMP,
        SKY_ZOOM,
        SKY_COLOR,
        SUN_COLOR,
        SKY_LAYER_OFFSET
      );
    }

    drawSun(width / 2, skyHeight - RIDGE_AMP / 2);

    // iterations through snowflake layer

    for (let l = 0; l < SNOWFLAKES.length; l++) {
        const SNOWLAYER = SNOWFLAKES[l];
    
        // ridge/forest //
        const layerPosition = l * ((height - skyHeight) / LAYER_COUNT);
        drawRidge(
          l,
          skyHeight + layerPosition,
          RIDGE_AMP,
          RIDGE_ZOOM,
          RIDGE_TOP_COLOR,
          RIDGE_BOT_COLOR,
          0
        );

    //EACH SNOWFLAKE//
    for (let i = 0; i < SNOWLAYER.length; i++) {
        const snowflake = SNOWLAYER[i];
        circle(snowflake.x, snowflake.y, (snowflake.l * MAX_SIZE) / LAYER_COUNT);
        updateSnowflake(snowflake);
      }
    }
  }

// DRAW SUN
function drawSun(x, y) {
    fill(SUN_COLOR);
    drawingContext.shadowBlur = SUN_GLOW;
    drawingContext.shadowColor = SUN_COLOR;
    circle(x, y, SUN_RADIUS * 2);
    drawingContext.shadowBlur = 0;
  }

// Compute and draw a ridge
function drawRidge(l, y, amp, zoom, c1, c2, coff) {
    // Choose a color for the ridge based on its height
    const FILL = lerpColor(color(c1), color(c2), l / (LAYER_COUNT - 1 + coff));
    fill(FILL);

      beginShape();
      for (let x = 0; x <= width; x += RIDGE_STEP) {
        const noisedY = noise(x * zoom, y);
        vertex(x, y - noisedY * amp);
      }
      vertex(width, height);
      vertex(0, height);
      endShape(CLOSE);
      fill(SNOW_COLOR);
    }
    
//snowflakes for next frame//
function updateSnowflake(snowflake) {
const diameter = (snowflake.l * MAX_SIZE) / LAYER_COUNT;
if (snowflake.y > height + diameter) snowflake.y =-diameter;
else snowflake.y += GRAVITY * snowflake.l * snowflake.mass;

// wind snow // 
const wind =
noise(snowflake.l, snowflake.y * WIND_CHANGE, frameCount * WIND_CHANGE) -
0.5;
if (snowflake.x > width + diameter) snowflake.x = -diameter;
else if (snowflake.x < -diameter) snowflake.x = width + diameter;
else snowflake.x += wind * WIND_SPEED * snowflake.l;
}


