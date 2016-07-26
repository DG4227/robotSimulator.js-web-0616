'use strict';

const directions = ['north', 'east', 'south', 'west']


class Robot {
  constructor() {
    this.bearing = 'north';
    this.coordinates = [0, 1];
  }

  orient(direction) {
    if (directions.includes(direction)) {
      this.bearing = direction
      return this.bearing
    } else {
      throw new Error("Invalid Robot Bearing");
    }
  }

  turnRight() {
    if (directions.indexOf(this.bearing) < 3) {
      this.bearing = directions[directions.indexOf(this.bearing) + 1]
    } else {
      this.bearing = 'north'
    }
  }

  turnLeft() {
    if (directions.indexOf(this.bearing) > 0 ) {
      this.bearing = directions[directions.indexOf(this.bearing) - 1]
    } else {
      this.bearing = 'west'
    }
  }


  at(x, y) {
    this.coordinates = [x, y]
  }

  advance() {

    if (this.bearing === 'north') {
      this.coordinates[1] += 1
    } else if (this.bearing === 'south') {
      this.coordinates[1] -= 1
    } else if (this.bearing === 'west') {
      this.coordinates[0] -= 1
    }
    else {this.coordinates[0] += 1}

  }


  executeOrder(order) {
    if (order === "L") {
      this.turnLeft()
    } else if (order === "R") {
      this.turnRight()
    } else if (order === "A") {
      this.advance()
    }
  }



  place(data) {
    this.bearing = data.direction
    this.coordinates[0] = data.x
    this.coordinates[1] = data.y
  }

  evaluate(orders) {
    var orderList = orders.split("")
    orderList.forEach(this.executeOrder.bind(this))
  }

  // Bullshit methods for nerds!

    translate(orders) {
      var orderList = orders.split("")
      var finalInstructions = orderList.map(sort)

      function sort(order) {
        if (order === "L") {
          return "turnLeft"
        } else if (order === "R") {
          return "turnRight"
        } else {
          return "advance"
        }}

        return finalInstructions
    }

    instructions(orders) {
      return this.translate(orders)
    }

  // end of the worst most pointless methods




}

//   evaluate(orders) {
//     var order_list = orders.split("")
//     return order_list.forEach(this.translate);
//   }
//
//
// }
//
// forEach(executeOrder)
//
// function forEach(callback){
//   for (var i = 0; i < array.length; i++) {
//     callback(array[i])
//   }
// }
