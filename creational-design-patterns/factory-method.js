/* 
In class-based programming, the factory method pattern is a creational pattern 
that uses factory methods to deal with the problem of creating objects without 
having to specify the exact class of the object that will be created. This is done 
by creating objects by calling a factory method — either specified in an interface 
and implemented by child classes, or implemented in a base class and optionally overridden 
by derived classes — rather than by calling a constructor.
*/

CoordinateSystem = {
  CARTESIAN: 0,
  POLAR: 1
}

class Point {
  contructor(x, y) {
    this.x = x
    this.y = y
  }

  static get factory() {
    return new PointFactory()
  }
}

class PointFactory {
  static newCartesianPoint(x, y) {
    return new Point(x, y)
  }

  static newPolarPoint(rho, theta) {
    return new Point(rho * Math.cos(theta), rho * Math.sin(theta))
  }
}

let point = PointFactory.newPolarPoint(5, Math.PI / 2)
let point2 = PointFactory.newCartesianPoint(5, 6)
console.log(point)
console.log(point2)
