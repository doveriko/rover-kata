// 10x10 grid:

let grid = [
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ','O',' ',' ',' ',' ',' ',' ',' '], //obstacle at [1][2]
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '], 
    [' ',' ',' ',' ',' ',' ',' ','O',' ',' '], //obstacle at [3][7]
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ','O',' ',' ',' '], //obstacle at [6][6]
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']
];

// The Rover Object(s):

const rover1 = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};

let rover2 = {
  direction: "N",
  x: 9,
  y: 0,
  travelLog: [],
};


// Turning the Rover:

function turnLeft(rover){
  
  console.log("turnLeft was called!");
  
    switch(rover.direction) {
      case 'N':
        rover.direction = 'W';
        break;
      case 'W':
        rover.direction = 'S';
        break;
      case 'S':
        rover.direction = 'E';
        break;
      case 'E':
        rover.direction = 'N';
        break;
      default:
        console.log("Sorry, this is not a valid command.");
  }
  console.log(`Direction: ${rover.direction}`);
} 

// Test => turnLeft(rover2);

function turnRight(rover){
    console.log("turnRight was called!");
    switch(rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'N';
      break;
    default:
      console.log("Sorry, this is not a valid command.")
  }
  console.log(`Direction: ${rover.direction}`);
}

// Test =>  turnRight(rover1);

// Moving the rover, tracking its movements and avoiding collisions:

function moveForward(rover){
  
  console.log("moveForward was called");
  // To keep track of the rover's position:
  rover.travelLog.push({x: rover.x, y: rover.y})
  
  if (rover.direction == "W" && rover.y > 0) {
    rover.y--;
      if(grid[rover.x][rover.y] != ' ' ){ //To avoid collisions
        rover.y++;
        console.log("Watch out! There's an obstacle there");
        }
  } 
    else if (rover.direction == "E" && rover.y < 9) {
    rover.y++;
       if(grid[rover.x][rover.y] != ' '){
        rover.y--;
        console.log("Watch out! There's an obstacle there");
        }
  }
    else if (rover.direction == "N" && rover.x > 0) {
    rover.x--;
      if(grid[rover.x][rover.y] != ' '){
        rover.x++;
        console.log("Watch out! There's an obstacle there");
        }
  }
    else if (rover.direction == "S" && rover.x < 9) {
    rover.x++;
       if(grid[rover.x][rover.y] != ' '){
        rover.x--;
        console.log("Watch out! There's an obstacle there");
        }
  }
    else {
    console.log("You reached the end of the grid, please choose another direction.");
  }
  
    console.log(`Current position: [x:${rover.x}, y:${rover.y}]`);
    console.log(rover.travelLog);

}

// Test => moveForward(rover1);


function moveBackward(rover){
  
  console.log("moveBackward was called");
  
  rover.travelLog.push({x: rover.x, y: rover.y})
  
  if (rover.direction == "W" && rover.y < 9) {
    rover.y++;
       if(grid[rover.x][rover.y] != ' '){
        rover.y--;
        console.log("Watch out! There's an obstacle there");
        }
  } 
    else if (rover.direction == "E" && rover.y > 0) {
    rover.y--;
       if(grid[rover.x][rover.y] != ' '){
        rover.y++;
        console.log("Watch out! There's an obstacle there");
        }
  }
    else if (rover.direction == "N" && rover.x < 9) {
    rover.x++;
       if(grid[rover.x][rover.y] != ' '){
        rover.x--;
        console.log("Watch out! There's an obstacle there");
        }
  }
    else if (rover.direction == "S" && rover.x > 0) {
    rover.x--;
       if(grid[rover.x][rover.y] != ' '){
        rover.x++;
        console.log("Watch out! There's an obstacle there");
        }
  }
    else {
    console.log("You reached the end of the grid, please choose another direction.");
  }
  
    console.log(`Current position: [x:${rover.x}, y:${rover.y}]`);
    console.log(rover.travelLog);

}

// Test => moveBackward(rover2);


// Commands:

function command(rover, orders) {

  for (let i = 0; i < orders.length; i++) {

    let order = orders[i];
    
    switch(order) {
      case "f": // forward
        moveForward(rover);
        break;
      case "b": // backward
        moveBackward(rover);
        break;
      case "r": // right
        turnRight(rover);
        break;  
      case "l": // left
        turnLeft(rover);
        break;
      default:
        console.log("Sorry, this is not a valid command. Enter f, b, r or l")
    }
  }
}

// Test => command(rover1, "rfflbfhgff");