function setup() {
    createCanvas(720, 400);
    // canvas colors
    c1 = color(88, 24, 69)
    c2 = color(144, 12, 63)
}

function draw() {
    // Happens for every frame refresh of the browser (~60/s)
    background(88, 24, 69)
    


// line //
line(60, 0, 60, 785);
stroke(218, 247, 166);
describe(
 'vertical line on left side of canvas'
);

// line 2 //
line(80, 0, 80, 785);
stroke(255, 195, 0);
describe(
 ' 2nd vertical line on left side of canvas'
);

// line 3 //
line(100, 0, 100, 785);
stroke(255, 87, 51);
describe(
 ' 2nd vertical line on left side of canvas'
);

// line 4 //
line(120, 0, 120, 785);
stroke(199, 0, 57);
describe(
 ' 2nd vertical line on left side of canvas'
);

// line 5 //
line(140, 0, 140, 785);
stroke( 144, 12, 63 );
describe(
 ' 2nd vertical line on left side of canvas'
);

// line 6 //
line(160, 0, 160, 785);
stroke(255, 87, 51);
describe(
 ' 2nd vertical line on left side of canvas'
);

// circle 1 //
beginShape();
strokeWeight(5);
fill(144, 12, 63 );
noStroke();
circle(270, 135, 70, 70);
endShape();

// circle 2 //
beginShape();
fill(199, 0, 57)
noStroke();
circle(200, 90, 120, 90)
endShape();

//paper 'airplane' shape//
push();
 translate(150, 150);
 fill (255, 87, 51)
 strokeWeight (2);
 beginShape();
 vertex(45,67);
 vertex(67,89)
 vertex(89,-67)
 vertex(-67,89)
 endShape(CLOSE);


 translate(280, 56);
 fill(255, 195, 0)
 noStroke();
 beginShape();
 // Exterior part of shape, clockwise winding
 vertex(-140, -150);
 vertex(140, -140);
 vertex(140, 140);
 vertex(-140, 140);
 // Interior part of shape, counter-clockwise winding
 beginContour();
 vertex(-160, -160);
 vertex(-160, 160);
 vertex(120, 120);
 vertex(120, -120);
 endContour();
 endShape(CLOSE);


 translate(220, 56);
 fill(144, 12, 63)
 noStroke();
 beginShape();
 // Exterior part of shape, clockwise winding
 vertex(-120, -140);
 vertex(140, -140);
 vertex(140, 140);
 vertex(-140, 140);
 // Interior part of shape, counter-clockwise winding
 beginContour();
 vertex(-160, -160);
 vertex(-160, 160);
 vertex(120, 120);
 vertex(120, -120);
 endContour();
 endShape(CLOSE);

}

