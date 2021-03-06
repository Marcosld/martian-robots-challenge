# Martian robots
Martian Robots problem solved trying to follow the principles of Functional Programming.

## How to

This project doesnt have any dependencies (except to run the tests). **Node version should be >= 10**

### CLI Usage

We have two options here. Either we can run it from `package.json`, using 
`npm run martian-robots -- <input_file_path>` or we can run `npm link` and use it direcly as
`martian-robots <input_file>`

### Programmatic Usage

It expects input as an String. Here is an example:

```javascript
const fs = require('fs')
const processInput = require('./src')
const input = fs.readFileSync('sampleInput.txt', 'utf-8')
console.log(
  processInput(input)
)
```

### Running the tests

To run the tests we should install required packages first with `npm i`,
as project makes usage of [jest](https://jestjs.io/). After installing the packages we can simply run `npm test`.

If you want to run the tests over different I/O files, you can simply change 
[sampleInput](./test/fixtures/sampleInput.txt) and 
[sampleOutput](./test/fixtures/sampleOutput.txt) files.

## Adding additional commands

Commands are coded in the folder [actions](./src/actions). If you want to add a new command you can just create a new
file (or use the existing ones if they fit). The input should be a position (```{ x, y, dir }```), and it should output
the next position.

Finally, export the command you have created in [the actions file](./src/actions/index.js) giving it the same name 
that it would have in the input file.

I have coded the solution based on one *action* per *time tick*, but multiple *effects* could occur. Effects, as *fall*
are in the [effects](./src/effects) folder. If multiple effects existed they could be piped one after another without
making too many changes.

## Problem description

The surface of Mars can be modelled by a rectangular grid around which robots are able to move according to instructions provided from Earth. You are to write a program that determines each sequence of robot positions and reports the final position of the robot.

A robot position consists of a grid coordinate (a pair of integers: x-coordinate followed by y-coordinate) and an orientation (N, S, E, W for north, south, east, and west). A robot instruction is a string of the letters "L", "R", and "F" which represent, respectively, the instructions:

*   Left: the robot turns left 90 degrees and remains on the current grid point.
*   Right: the robot turns right 90 degrees and remains on the current grid point.
*   Forward: the robot moves forward one grid point in the direction of the current orientation and maintains the same orientation.

The direction North corresponds to the direction from grid point (x, y) to grid point (x, y+1).

There is also a possibility that additional command types may be required in the future andprovision should be made for this.

Since the grid is rectangular and bounded (...yes Mars is a strange planet), a robot that moves "off" an edge of the grid is lost forever. However, lost robots leave a robot "scent" that prohibits future robots from dropping off the world at the same grid point. The scent is left at the last grid position the robot occupied before disappearing over the edge. An instruction to move "off" the world from a grid point from which a robot has been previously lost is simply ignored by the current robot.

## The Input

The first line of input is the upper-right coordinates of the rectangular world, the lower-left coordinates are assumed to be 0, 0.

The remaining input consists of a sequence of robot positions and instructions (two lines per robot). A position consists of two integers specifying the initial coordinates of the robot and an orientation (N, S, E, W), all separated by whitespace on one line. A robot instruction is a string of the letters "L", "R", and "F" on one line.

Each robot is processed sequentially, i.e., finishes executing the robot instructions before the next robot begins execution.

The maximum value for any coordinate is 50.

All instruction strings will be less than 100 characters in length.

## The Output

For each robot position/instruction in the input, the output should indicate the final grid position and orientation of the robot. If a robot falls off the edge of the grid the word "LOST" should be printed after the position and orientation.

### Sample Input

```
5 3
1 1 E
RFRFRFRF
3 2 N
FRRFLLFFRRFLL
0 3 W
LLFFFLFLFL
```

### Sample Output

```
1 1 E
3 3 N LOST
2 3 S
```
