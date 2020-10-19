
function setup() {
    createCanvas(windowWidth, windowHeight);
    document.body.style.margin="0px";
  }
  
  
  function draw() {
    background(255, 252, 0);
  
    let size = width * 0.025;
  
    for (let o1 = size; o1 <= width - size; o1 += size * 2) {
      for (let o2 = size; o2 <= height - size; o2 += size * 2) {
  
        push();
        rectMode(CENTER);
        translate(o1, o2);
        let d = dist(mouseX, mouseY, o1, o2);
        let dConstrained = constrain(d, 0, 80);
        let rotation = frameCount * 0.02 * (dConstrained * 0.005);
        rotate(rotation);
        rect(0, 0, (dConstrained / 2.5), (dConstrained * 1.5)/2.5,3);
        pop();
      }
    }
  
  }