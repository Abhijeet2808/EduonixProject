
//  1) Write a programe to calculate Simple Interest:

const principal = 1000;   // Principal amount
const rate = 5;           // Annual interest rate
const time = 2;           // Time period

// Calculate Simple Interest
const interest = (principal * rate * time) / 100;


console.log("Simple Interest:", interest);

//_____________________________________________________________________________________________________________________________________________________



// 2) Write a programme to calculate Area of circle, Volume of cube :


const approximatePi = 3.14159;      // value of Pi 


const radius = 5;                   // Radius of the circle

 
const circleArea = approximatePi * radius * radius;     // Calculate the area of a circle 


const sideLength = 3;               // Side length of the cube


const cubeVolume = sideLength * sideLength * sideLength;        // Calculate the volume of a cube


console.log("Area of the circle:", circleArea);
console.log("Volume of the cube:", cubeVolume);


//___________________________________________________________________________________________________________________________________________

//  3) Write a program to calculate surface area of a cylinder :


const cylinderRadius = 5;      // Radius of the cylinder's base
const cylinderHeight = 10;      // Height of the cylinder


const lateralSurfaceArea = 2 * approximatePi * cylinderRadius * cylinderHeight;     


const baseArea = 2 * approximatePi * cylinderRadius * cylinderRadius;      


const totalSurfaceArea = lateralSurfaceArea + baseArea;     // Calculate the total surface area


console.log("Surface Area of the Cylinder:", totalSurfaceArea);





