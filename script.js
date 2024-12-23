const geometryQuestions = [
    // Round 1
    [
        {
            question: "What is the sum of the interior angles of a triangle?",
            options: ["90°", "180°", "360°", "270°"],
            correct: 1,
        },
        {
            question: "A right triangle has one angle of 90°. What are the other two angles classified as?",
            options: ["Obtuse", "Right", "Acute", "Complementary"],
            correct: 2,
        },
        {
            question: "What do you call a polygon with 8 sides?",
            options: ["Hexagon", "Heptagon", "Octagon", "Nonagon"],
            correct: 2,
        },
        {
            question: "What is the area of a rectangle with length 10 cm and width 5 cm?",
            options: ["20 cm²", "50 cm²", "15 cm²", "25 cm²"],
            correct: 1,
        },
        {
            question: "What is the formula for the circumference of a circle?",
            options: ["2πr", "πr²", "2r", "r²"],
            correct: 0,
        },
    ],

    // Round 2
    [
        {
            question: "What is the volume of a cube with side length 4 cm?",
            options: ["16 cm³", "64 cm³", "32 cm³", "48 cm³"],
            correct: 1,
        },
        {
            question: "A square has a perimeter of 36 cm. What is the length of one side?",
            options: ["8 cm", "9 cm", "10 cm", "12 cm"],
            correct: 1,
        },
        {
            question: "What is the measure of each interior angle in a regular hexagon?",
            options: ["120°", "135°", "150°", "108°"],
            correct: 0,
        },
        {
            question: "Which type of triangle has no equal sides or angles?",
            options: ["Equilateral", "Isosceles", "Right", "Scalene"],
            correct: 3,
        },
        {
            question: "What is the area of a triangle with base 12 cm and height 5 cm?",
            options: ["60 cm²", "30 cm²", "24 cm²", "15 cm²"],
            correct: 1,
        },
    ],

    // Round 3
    [
        {
            question: "What is the name of a 3D shape with a circular base and a single vertex?",
            options: ["Cylinder", "Cone", "Sphere", "Pyramid"],
            correct: 1,
        },
        {
            question: "What is the length of the hypotenuse in a right triangle with legs of 3 cm and 4 cm?",
            options: ["5 cm", "6 cm", "7 cm", "8 cm"],
            correct: 0,
        },
        {
            question: "What do you call a chord that passes through the center of a circle?",
            options: ["Radius", "Diameter", "Arc", "Tangent"],
            correct: 1,
        },
        {
            question: "What is the area of a circle with radius 7 cm? (Use π ≈ 3.14)",
            options: ["154 cm²", "49 cm²", "88 cm²", "132 cm²"],
            correct: 0,
        },
        {
            question: "What is the total surface area of a cube with side length 5 cm?",
            options: ["25 cm²", "150 cm²", "125 cm²", "250 cm²"],
            correct: 1,
        },
    ],

    // Round 4
    [
        {
            question: "What is the sum of the exterior angles of any polygon?",
            options: ["90°", "180°", "360°", "270°"],
            correct: 2,
        },
        {
            question: "How many diagonals does a pentagon have?",
            options: ["2", "5", "10", "15"],
            correct: 1,
        },
        {
            question: "What do you call a parallelogram with all sides equal and all angles 90°?",
            options: ["Rectangle", "Square", "Rhombus", "Trapezium"],
            correct: 1,
        },
        {
            question: "What is the formula for the area of a parallelogram?",
            options: ["Base × Height", "1/2 × Base × Height", "Length × Width", "πr²"],
            correct: 0,
        },
        {
            question: "A circle has a radius of 10 cm. What is its diameter?",
            options: ["10 cm", "20 cm", "30 cm", "40 cm"],
            correct: 1,
        },
    ],

    // Round 5
    [
        {
            question: "What is the formula for the volume of a cylinder?",
            options: ["πr²h", "2πr", "πr²", "4/3πr³"],
            correct: 0,
        },
        {
            question: "What is the name of a polygon with 12 sides?",
            options: ["Decagon", "Dodecagon", "Nonagon", "Hexadecagon"],
            correct: 1,
        },
        {
            question: "If a triangle has sides of 5 cm, 12 cm, and 13 cm, what type of triangle is it?",
            options: ["Equilateral", "Scalene", "Right", "Isosceles"],
            correct: 2,
        },
        {
            question: "What is the measure of each exterior angle in a regular octagon?",
            options: ["30°", "45°", "60°", "72°"],
            correct: 3,
        },
        {
            question: "What do you call the longest side of a right triangle?",
            options: ["Hypotenuse", "Base", "Altitude", "Diagonal"],
            correct: 0,
        },
    ],
    // Round 6
    [
        {
            question: "What is the perimeter of a rectangle with length 8 cm and width 6 cm?",
            options: ["28 cm", "48 cm", "32 cm", "14 cm"],
            correct: 0,
        },
        {
            question: "What is the area of a trapezium with bases 6 cm and 10 cm and height 5 cm?",
            options: ["40 cm²", "50 cm²", "80 cm²", "32 cm²"],
            correct: 0,
        },
        {
            question: "How many faces does a cube have?",
            options: ["4", "6", "8", "12"],
            correct: 1,
        },
        {
            question: "What is the total surface area of a sphere with radius 7 cm? (Use π ≈ 3.14)",
            options: ["616 cm²", "154 cm²", "308 cm²", "88 cm²"],
            correct: 0,
        },
        {
            question: "What is the formula for the area of a triangle?",
            options: ["Base × Height", "1/2 × Base × Height", "Length × Width", "πr²"],
            correct: 1,
        },
    ],

    // Round 7
    [
        {
            question: "What is the number of diagonals in a hexagon?",
            options: ["9", "6", "15", "12"],
            correct: 0,
        },
        {
            question: "What is the area of an equilateral triangle with side length 6 cm? (√3 ≈ 1.73)",
            options: ["15.59 cm²", "20.14 cm²", "9.37 cm²", "18.78 cm²"],
            correct: 3,
        },
        {
            question: "What is the perimeter of a regular pentagon with side length 7 cm?",
            options: ["25 cm", "30 cm", "35 cm", "40 cm"],
            correct: 2,
        },
        {
            question: "What is the length of the diagonal of a square with side length 10 cm? (√2 ≈ 1.41)",
            options: ["10 cm", "14.1 cm", "12 cm", "15 cm"],
            correct: 1,
        },
        {
            question: "What is the formula for the volume of a cone?",
            options: ["1/3πr²h", "πr²h", "2πr²", "4/3πr³"],
            correct: 0,
        },
    ],

    // Round 8
    [
        {
            question: "What is the sum of the interior angles of a hexagon?",
            options: ["360°", "540°", "720°", "900°"],
            correct: 2,
        },
        {
            question: "What is the name of a quadrilateral with one pair of parallel sides?",
            options: ["Rectangle", "Rhombus", "Square", "Trapezium"],
            correct: 3,
        },
        {
            question: "What is the formula for the lateral surface area of a cylinder?",
            options: ["2πrh", "πr²h", "2πr", "πr²"],
            correct: 0,
        },
        {
            question: "How many edges does a rectangular prism have?",
            options: ["8", "12", "6", "16"],
            correct: 1,
        },
        {
            question: "A circle has a circumference of 62.8 cm. What is its radius? (Use π ≈ 3.14)",
            options: ["10 cm", "5 cm", "20 cm", "15 cm"],
            correct: 0,
        },
    ],

    // Round 9
    [
        {
            question: "What is the measure of an exterior angle of a regular pentagon?",
            options: ["60°", "90°", "72°", "108°"],
            correct: 2,
        },
        {
            question: "How many sides does a nonagon have?",
            options: ["7", "8", "9", "10"],
            correct: 2,
        },
        {
            question: "What is the area of a parallelogram with base 12 cm and height 8 cm?",
            options: ["48 cm²", "96 cm²", "120 cm²", "80 cm²"],
            correct: 1,
        },
        {
            question: "What is the formula for the volume of a sphere?",
            options: ["4/3πr³", "πr²h", "1/3πr²h", "2πr"],
            correct: 0,
        },
        {
            question: "What is the number of faces on a rectangular prism?",
            options: ["4", "6", "8", "12"],
            correct: 1,
        },
    ],

    // Round 10
    [
        {
            question: "What is the length of a chord that passes through the center of a circle called?",
            options: ["Radius", "Tangent", "Secant", "Diameter"],
            correct: 3,
        },
        {
            question: "How many lines of symmetry does a regular hexagon have?",
            options: ["3", "4", "6", "8"],
            correct: 2,
        },
        {
            question: "What is the formula for the area of a circle?",
            options: ["πr²", "2πr", "1/2πr", "4/3πr³"],
            correct: 0,
        },
        {
            question: "What is the exterior angle of a regular octagon?",
            options: ["30°", "45°", "60°", "72°"],
            correct: 1,
        },
        {
            question: "What is the total surface area of a cylinder with radius 7 cm and height 10 cm? (Use π ≈ 3.14)",
            options: ["748.64 cm²", "356.64 cm²", "439.6 cm²", "968.08 cm²"],
            correct: 0,
        },
    ],
    // Round 11
    [
        {
            question: "How many vertices does a cube have?",
            options: ["6", "8", "12", "16"],
            correct: 1,
        },
        {
            question: "What is the sum of the interior angles of a decagon?",
            options: ["1440°", "1620°", "1800°", "1080°"],
            correct: 3,
        },
        {
            question: "A triangle has sides of lengths 5 cm, 12 cm, and 13 cm. What is the perimeter?",
            options: ["30 cm", "25 cm", "40 cm", "20 cm"],
            correct: 0,
        },
        {
            question: "What is the formula for the area of a rhombus?",
            options: ["1/2 × (Diagonal 1 × Diagonal 2)", "Base × Height", "Side × Side", "πr²"],
            correct: 0,
        },
        {
            question: "What is the name of a polygon with 7 sides?",
            options: ["Pentagon", "Hexagon", "Heptagon", "Octagon"],
            correct: 2,
        },
    ],

    // Round 12
    [
        {
            question: "What is the total surface area of a cube with side length 8 cm?",
            options: ["384 cm²", "256 cm²", "512 cm²", "128 cm²"],
            correct: 0,
        },
        {
            question: "What is the measure of an interior angle of a regular pentagon?",
            options: ["108°", "120°", "72°", "90°"],
            correct: 0,
        },
        {
            question: "What is the length of a side of a square with an area of 81 cm²?",
            options: ["7 cm", "9 cm", "8 cm", "10 cm"],
            correct: 1,
        },
        {
            question: "What is the lateral surface area of a cone with radius 3 cm and slant height 5 cm? (Use π ≈ 3.14)",
            options: ["47.1 cm²", "15.7 cm²", "94.2 cm²", "31.4 cm²"],
            correct: 0,
        },
        {
            question: "What is the formula for the volume of a rectangular prism?",
            options: ["Length × Width × Height", "Base × Height", "1/2 × Base × Height", "4/3πr³"],
            correct: 0,
        },
    ],

    // Round 13
    [
        {
            question: "How many sides does a regular dodecagon have?",
            options: ["10", "11", "12", "13"],
            correct: 2,
        },
        {
            question: "A circle has a radius of 14 cm. What is its circumference? (Use π ≈ 3.14)",
            options: ["88 cm", "44 cm", "28 cm", "56 cm"],
            correct: 0,
        },
        {
            question: "What is the area of a square with diagonal length 10√2 cm?",
            options: ["50 cm²", "100 cm²", "150 cm²", "200 cm²"],
            correct: 1,
        },
        {
            question: "How many edges does a triangular prism have?",
            options: ["6", "8", "9", "12"],
            correct: 3,
        },
        {
            question: "What is the formula for the area of a kite?",
            options: ["1/2 × (Diagonal 1 × Diagonal 2)", "Base × Height", "Side × Side", "πr²"],
            correct: 0,
        },
    ],

    // Round 14
    [
        {
            question: "What is the volume of a cylinder with radius 4 cm and height 10 cm? (Use π ≈ 3.14)",
            options: ["502.4 cm³", "400 cm³", "251.2 cm³", "628 cm³"],
            correct: 0,
        },
        {
            question: "What is the number of diagonals in an octagon?",
            options: ["20", "24", "28", "30"],
            correct: 0,
        },
        {
            question: "What is the perimeter of an equilateral triangle with side length 7 cm?",
            options: ["14 cm", "21 cm", "28 cm", "35 cm"],
            correct: 1,
        },
        {
            question: "What is the total surface area of a sphere with radius 5 cm? (Use π ≈ 3.14)",
            options: ["314 cm²", "628 cm²", "157 cm²", "471 cm²"],
            correct: 0,
        },
        {
            question: "What is the sum of the interior angles of a quadrilateral?",
            options: ["360°", "540°", "720°", "900°"],
            correct: 0,
        },
    ],

    // Round 15
    [
        {
            question: "What is the lateral surface area of a cylinder with radius 5 cm and height 12 cm? (Use π ≈ 3.14)",
            options: ["376.8 cm²", "188.4 cm²", "150 cm²", "314 cm²"],
            correct: 0,
        },
        {
            question: "How many lines of symmetry does a regular pentagon have?",
            options: ["3", "4", "5", "6"],
            correct: 2,
        },
        {
            question: "A circle has an area of 154 cm². What is its radius? (Use π ≈ 3.14)",
            options: ["7 cm", "5 cm", "10 cm", "12 cm"],
            correct: 0,
        },
        {
            question: "What is the formula for the lateral surface area of a cone?",
            options: ["πrl", "2πr²", "πr²h", "4/3πr³"],
            correct: 0,
        },
        {
            question: "How many vertices does a rectangular prism have?",
            options: ["6", "8", "10", "12"],
            correct: 1,
        },
    ],
    // Round 16
    [
        {
            question: "What is the total surface area of a sphere with radius 3 cm? (Use π ≈ 3.14)",
            options: ["113.04 cm²", "28.26 cm²", "50.24 cm²", "78.54 cm²"],
            correct: 0,
        },
        {
            question: "What is the measure of an interior angle of a regular hexagon?",
            options: ["120°", "90°", "60°", "150°"],
            correct: 0,
        },
        {
            question: "What is the formula for the area of a trapezium?",
            options: ["1/2 × (Base1 + Base2) × Height", "Base × Height", "Side × Side", "πr²"],
            correct: 0,
        },
        {
            question: "How many sides does a regular decagon have?",
            options: ["8", "10", "12", "14"],
            correct: 1,
        },
        {
            question: "What is the perimeter of a triangle with sides 3 cm, 4 cm, and 5 cm?",
            options: ["12 cm", "10 cm", "14 cm", "16 cm"],
            correct: 0,
        },
    ],

    // Round 17
    [
        {
            question: "What is the formula for the volume of a pyramid?",
            options: ["1/3 × Base Area × Height", "Base Area × Height", "πr²h", "2/3 × Base Area × Height"],
            correct: 0,
        },
        {
            question: "How many faces does a triangular pyramid (tetrahedron) have?",
            options: ["3", "4", "5", "6"],
            correct: 1,
        },
        {
            question: "What is the surface area of a cone with radius 6 cm and height 8 cm? (Use π ≈ 3.14)",
            options: ["300.72 cm²", "192 cm²", "150.72 cm²", "221.76 cm²"],
            correct: 0,
        },
        {
            question: "What is the formula for the volume of a cylinder?",
            options: ["πr²h", "2πrh", "πr³h", "2πr²h"],
            correct: 0,
        },
        {
            question: "What is the sum of the interior angles of a heptagon?",
            options: ["900°", "1080°", "1260°", "1440°"],
            correct: 2,
        },
    ],

    // Round 18
    [
        {
            question: "What is the area of a circle with radius 4 cm? (Use π ≈ 3.14)",
            options: ["50.24 cm²", "12.56 cm²", "16 cm²", "25.12 cm²"],
            correct: 0,
        },
        {
            question: "What is the volume of a cube with side length 5 cm?",
            options: ["25 cm³", "100 cm³", "125 cm³", "150 cm³"],
            correct: 2,
        },
        {
            question: "What is the name of a triangle with all equal sides?",
            options: ["Scalene", "Isosceles", "Equilateral", "Right-angled"],
            correct: 2,
        },
        {
            question: "What is the formula for the area of a rectangle?",
            options: ["Length × Width", "Base × Height", "πr²", "1/2 × Diagonal 1 × Diagonal 2"],
            correct: 0,
        },
        {
            question: "What is the length of the diagonal of a rectangle with sides 6 cm and 8 cm?",
            options: ["10 cm", "12 cm", "14 cm", "9 cm"],
            correct: 0,
        },
    ],

    // Round 19
    [
        {
            question: "How many sides does a regular hexagon have?",
            options: ["5", "6", "7", "8"],
            correct: 1,
        },
        {
            question: "What is the volume of a sphere with radius 7 cm? (Use π ≈ 3.14)",
            options: ["143.64 cm³", "615.44 cm³", "179.58 cm³", "220 cm³"],
            correct: 0,
        },
        {
            question: "What is the name of a quadrilateral with opposite sides equal and parallel?",
            options: ["Parallelogram", "Rhombus", "Rectangle", "Trapezium"],
            correct: 0,
        },
        {
            question: "What is the area of a rectangle with length 12 cm and width 5 cm?",
            options: ["60 cm²", "50 cm²", "72 cm²", "45 cm²"],
            correct: 0,
        },
        {
            question: "How many diagonals are there in a square?",
            options: ["1", "2", "3", "4"],
            correct: 1,
        },
    ],

    // Round 20
    [
        {
            question: "What is the surface area of a sphere with radius 4 cm? (Use π ≈ 3.14)",
            options: ["201.06 cm²", "150.72 cm²", "125.6 cm²", "50.24 cm²"],
            correct: 0,
        },
        {
            question: "What is the area of a rhombus with diagonals of 10 cm and 12 cm?",
            options: ["60 cm²", "48 cm²", "72 cm²", "50 cm²"],
            correct: 1,
        },
        {
            question: "What is the volume of a rectangular prism with dimensions 3 cm × 4 cm × 5 cm?",
            options: ["60 cm³", "70 cm³", "50 cm³", "40 cm³"],
            correct: 0,
        },
        {
            question: "How many faces does a tetrahedron have?",
            options: ["3", "4", "5", "6"],
            correct: 1,
        },
        {
            question: "What is the perimeter of a regular octagon with side length 6 cm?",
            options: ["48 cm", "42 cm", "36 cm", "56 cm"],
            correct: 0,
        },
    ],
    // Round 21
    [
        {
            question: "What is the volume of a cylinder with radius 4 cm and height 10 cm? (Use π ≈ 3.14)",
            options: ["502.4 cm³", "628 cm³", "402.8 cm³", "400 cm³"],
            correct: 0,
        },
        {
            question: "What is the sum of the interior angles of a nonagon?",
            options: ["1440°", "1260°", "1080°", "900°"],
            correct: 0,
        },
        {
            question: "How many faces does a square pyramid have?",
            options: ["4", "5", "6", "7"],
            correct: 1,
        },
        {
            question: "What is the area of a sector of a circle with a radius of 6 cm and a central angle of 60°? (Use π ≈ 3.14)",
            options: ["18.84 cm²", "18 cm²", "15.7 cm²", "12.56 cm²"],
            correct: 0,
        },
        {
            question: "What is the perimeter of a rhombus with diagonals of 8 cm and 6 cm?",
            options: ["28 cm", "24 cm", "20 cm", "18 cm"],
            correct: 1,
        },
    ],

    // Round 22
    [
        {
            question: "What is the lateral surface area of a cone with radius 4 cm and height 6 cm? (Use π ≈ 3.14)",
            options: ["75.36 cm²", "50.24 cm²", "100 cm²", "70 cm²"],
            correct: 0,
        },
        {
            question: "What is the measure of an exterior angle of a regular octagon?",
            options: ["45°", "30°", "15°", "22.5°"],
            correct: 0,
        },
        {
            question: "How many diagonals does a quadrilateral have?",
            options: ["1", "2", "3", "4"],
            correct: 1,
        },
        {
            question: "What is the surface area of a cone with radius 5 cm and slant height 12 cm? (Use π ≈ 3.14)",
            options: ["188.4 cm²", "94.2 cm²", "471 cm²", "314 cm²"],
            correct: 0,
        },
        {
            question: "What is the sum of the interior angles of an octagon?",
            options: ["1080°", "1280°", "1440°", "1800°"],
            correct: 0,
        },
    ],

    // Round 23
    [
        {
            question: "What is the formula for the area of a circle?",
            options: ["πr²", "2πr", "πd", "2r²"],
            correct: 0,
        },
        {
            question: "What is the volume of a pyramid with base area 10 cm² and height 5 cm?",
            options: ["50 cm³", "25 cm³", "15 cm³", "30 cm³"],
            correct: 0,
        },
        {
            question: "What is the number of edges in a cube?",
            options: ["12", "8", "6", "10"],
            correct: 0,
        },
        {
            question: "How many diagonals does a hexagon have?",
            options: ["6", "7", "8", "9"],
            correct: 2,
        },
        {
            question: "What is the perimeter of an equilateral triangle with a side length of 7 cm?",
            options: ["21 cm", "20 cm", "14 cm", "18 cm"],
            correct: 0,
        },
    ],

    // Round 24
    [
        {
            question: "What is the surface area of a rectangular prism with dimensions 4 cm × 5 cm × 6 cm?",
            options: ["148 cm²", "94 cm²", "120 cm²", "60 cm²"],
            correct: 0,
        },
        {
            question: "What is the area of an equilateral triangle with side length 6 cm?",
            options: ["15.6 cm²", "18 cm²", "24 cm²", "21 cm²"],
            correct: 0,
        },
        {
            question: "What is the volume of a cone with radius 3 cm and height 9 cm? (Use π ≈ 3.14)",
            options: ["81 cm³", "72 cm³", "27 cm³", "45 cm³"],
            correct: 0,
        },
        {
            question: "What is the length of the diagonal of a rectangle with length 9 cm and width 12 cm?",
            options: ["15 cm", "16 cm", "13 cm", "14 cm"],
            correct: 0,
        },
        {
            question: "What is the area of a rhombus with diagonals of lengths 8 cm and 10 cm?",
            options: ["40 cm²", "20 cm²", "35 cm²", "45 cm²"],
            correct: 0,
        },
    ],

    // Round 25
    [
        {
            question: "What is the formula for the surface area of a sphere?",
            options: ["4πr²", "2πr²", "πr²", "2πrh"],
            correct: 0,
        },
        {
            question: "What is the perimeter of a square with a side length of 7 cm?",
            options: ["28 cm", "35 cm", "21 cm", "14 cm"],
            correct: 0,
        },
        {
            question: "What is the volume of a rectangular prism with dimensions 4 cm × 5 cm × 10 cm?",
            options: ["200 cm³", "150 cm³", "100 cm³", "250 cm³"],
            correct: 0,
        },
        {
            question: "What is the surface area of a cube with side length 4 cm?",
            options: ["96 cm²", "48 cm²", "64 cm²", "80 cm²"],
            correct: 0,
        },
        {
            question: "What is the sum of the exterior angles of any polygon?",
            options: ["180°", "360°", "720°", "540°"],
            correct: 1,
        },
    ],
    // Round 26
    [
        {
            question: "What is the surface area of a cylinder with radius 4 cm and height 8 cm? (Use π ≈ 3.14)",
            options: ["201.06 cm²", "150.72 cm²", "302.16 cm²", "251.2 cm²"],
            correct: 0,
        },
        {
            question: "What is the measure of an interior angle of a regular dodecagon?",
            options: ["150°", "120°", "135°", "165°"],
            correct: 0,
        },
        {
            question: "How many edges does a rectangular prism have?",
            options: ["10", "12", "14", "8"],
            correct: 1,
        },
        {
            question: "What is the volume of a cone with radius 4 cm and height 6 cm? (Use π ≈ 3.14)",
            options: ["75.36 cm³", "75 cm³", "72 cm³", "78 cm³"],
            correct: 0,
        },
        {
            question: "How many sides does a regular icosagon (20-sided polygon) have?",
            options: ["18", "20", "22", "24"],
            correct: 1,
        },
    ],

    // Round 27
    [
        {
            question: "What is the volume of a pyramid with a square base of side 6 cm and height 10 cm?",
            options: ["120 cm³", "200 cm³", "180 cm³", "150 cm³"],
            correct: 0,
        },
        {
            question: "What is the perimeter of a rhombus with side lengths of 8 cm?",
            options: ["24 cm", "30 cm", "32 cm", "40 cm"],
            correct: 2,
        },
        {
            question: "What is the surface area of a cube with side length 5 cm?",
            options: ["150 cm²", "125 cm²", "100 cm²", "75 cm²"],
            correct: 0,
        },
        {
            question: "What is the measure of an exterior angle of a regular pentagon?",
            options: ["72°", "90°", "108°", "120°"],
            correct: 0,
        },
        {
            question: "What is the area of a circle with a diameter of 10 cm? (Use π ≈ 3.14)",
            options: ["78.5 cm²", "25 cm²", "35 cm²", "50 cm²"],
            correct: 0,
        },
    ],

    // Round 28
    [
        {
            question: "What is the area of a parallelogram with base 10 cm and height 6 cm?",
            options: ["60 cm²", "50 cm²", "40 cm²", "30 cm²"],
            correct: 0,
        },
        {
            question: "How many faces does a rectangular prism have?",
            options: ["6", "8", "10", "12"],
            correct: 0,
        },
        {
            question: "What is the volume of a cylinder with radius 7 cm and height 14 cm? (Use π ≈ 3.14)",
            options: ["1540 cm³", "1200 cm³", "1100 cm³", "1500 cm³"],
            correct: 0,
        },
        {
            question: "What is the total surface area of a sphere with radius 5 cm? (Use π ≈ 3.14)",
            options: ["314 cm²", "250 cm²", "225 cm²", "150 cm²"],
            correct: 0,
        },
        {
            question: "What is the volume of a sphere with radius 6 cm? (Use π ≈ 3.14)",
            options: ["904.32 cm³", "540 cm³", "216 cm³", "1080 cm³"],
            correct: 0,
        },
    ],

    // Round 29
    [
        {
            question: "What is the area of a sector of a circle with radius 5 cm and central angle 90°? (Use π ≈ 3.14)",
            options: ["19.625 cm²", "7.85 cm²", "15.7 cm²", "9.42 cm²"],
            correct: 1,
        },
        {
            question: "What is the sum of the interior angles of a decagon?",
            options: ["1800°", "1440°", "1260°", "1080°"],
            correct: 0,
        },
        {
            question: "What is the perimeter of an equilateral triangle with side length 10 cm?",
            options: ["30 cm", "25 cm", "15 cm", "20 cm"],
            correct: 0,
        },
        {
            question: "How many edges does a tetrahedron have?",
            options: ["4", "6", "8", "12"],
            correct: 0,
        },
        {
            question: "What is the formula for the area of a trapezoid?",
            options: ["1/2 × (Base1 + Base2) × Height", "Base × Height", "πr²", "Side × Side"],
            correct: 0,
        },
    ],

    // Round 30
    [
        {
            question: "What is the surface area of a sphere with radius 6 cm? (Use π ≈ 3.14)",
            options: ["452.16 cm²", "432 cm²", "340 cm²", "500 cm²"],
            correct: 0,
        },
        {
            question: "How many faces does a cuboid have?",
            options: ["4", "6", "8", "10"],
            correct: 1,
        },
        {
            question: "What is the perimeter of a regular hexagon with a side length of 7 cm?",
            options: ["42 cm", "40 cm", "44 cm", "48 cm"],
            correct: 0,
        },
        {
            question: "What is the sum of the interior angles of a hexagon?",
            options: ["720°", "1080°", "900°", "1440°"],
            correct: 0,
        },
        {
            question: "What is the area of a rectangle with length 12 cm and width 3 cm?",
            options: ["36 cm²", "30 cm²", "40 cm²", "32 cm²"],
            correct: 0,
        },
    ],
    // Round 31
    [
        {
            question: "What is the volume of a rectangular prism with dimensions 5 cm × 6 cm × 8 cm?",
            options: ["240 cm³", "280 cm³", "300 cm³", "320 cm³"],
            correct: 0,
        },
        {
            question: "What is the area of a right triangle with base 9 cm and height 12 cm?",
            options: ["54 cm²", "72 cm²", "36 cm²", "60 cm²"],
            correct: 0,
        },
        {
            question: "How many faces does a cylinder have?",
            options: ["2", "3", "4", "5"],
            correct: 1,
        },
        {
            question: "What is the perimeter of a rectangle with length 10 cm and width 5 cm?",
            options: ["30 cm", "40 cm", "20 cm", "25 cm"],
            correct: 0,
        },
        {
            question: "What is the formula for the area of a circle?",
            options: ["πr²", "2πr", "πd", "2r²"],
            correct: 0,
        },
    ],

    // Round 32
    [
        {
            question: "What is the surface area of a cone with radius 4 cm and slant height 5 cm? (Use π ≈ 3.14)",
            options: ["78.5 cm²", "62.8 cm²", "94.2 cm²", "50.24 cm²"],
            correct: 0,
        },
        {
            question: "What is the volume of a cone with radius 3 cm and height 7 cm? (Use π ≈ 3.14)",
            options: ["65.88 cm³", "60 cm³", "75 cm³", "90 cm³"],
            correct: 0,
        },
        {
            question: "How many sides does a regular decagon have?",
            options: ["8", "10", "12", "14"],
            correct: 1,
        },
        {
            question: "What is the area of a rhombus with diagonals of length 10 cm and 6 cm?",
            options: ["30 cm²", "20 cm²", "40 cm²", "35 cm²"],
            correct: 0,
        },
        {
            question: "What is the sum of the interior angles of a heptagon?",
            options: ["900°", "1080°", "1260°", "1440°"],
            correct: 2,
        },
    ],

    // Round 33
    [
        {
            question: "What is the surface area of a square pyramid with base area of 16 cm² and slant height of 10 cm?",
            options: ["96 cm²", "110 cm²", "120 cm²", "160 cm²"],
            correct: 0,
        },
        {
            question: "What is the volume of a pyramid with a triangular base of area 6 cm² and height 9 cm?",
            options: ["54 cm³", "36 cm³", "48 cm³", "72 cm³"],
            correct: 0,
        },
        {
            question: "What is the area of a regular hexagon with a side length of 6 cm?",
            options: ["93.53 cm²", "108 cm²", "144 cm²", "72 cm²"],
            correct: 0,
        },
        {
            question: "What is the perimeter of a square with side length 8 cm?",
            options: ["32 cm", "36 cm", "28 cm", "30 cm"],
            correct: 0,
        },
        {
            question: "How many vertices does a cube have?",
            options: ["8", "6", "12", "10"],
            correct: 0,
        },
    ],

    // Round 34
    [
        {
            question: "What is the volume of a cube with side length 7 cm?",
            options: ["343 cm³", "200 cm³", "150 cm³", "140 cm³"],
            correct: 0,
        },
        {
            question: "What is the surface area of a sphere with radius 3 cm? (Use π ≈ 3.14)",
            options: ["113.04 cm²", "80.5 cm²", "28.26 cm²", "65.4 cm²"],
            correct: 0,
        },
        {
            question: "What is the area of a parallelogram with base 8 cm and height 6 cm?",
            options: ["48 cm²", "56 cm²", "64 cm²", "72 cm²"],
            correct: 0,
        },
        {
            question: "How many edges does a square pyramid have?",
            options: ["8", "10", "12", "6"],
            correct: 1,
        },
        {
            question: "What is the formula for the volume of a cone?",
            options: ["1/3πr²h", "πr²h", "2/3πr²h", "πr²"],
            correct: 0,
        },
    ],

    // Round 35
    [
        {
            question: "What is the surface area of a rectangular prism with dimensions 5 cm × 8 cm × 10 cm?",
            options: ["330 cm²", "400 cm²", "250 cm²", "480 cm²"],
            correct: 0,
        },
        {
            question: "What is the area of a sector of a circle with a radius of 5 cm and a central angle of 120°? (Use π ≈ 3.14)",
            options: ["19.63 cm²", "15.7 cm²", "20.94 cm²", "18.84 cm²"],
            correct: 0,
        },
        {
            question: "How many sides does a regular hexagon have?",
            options: ["5", "6", "7", "8"],
            correct: 1,
        },
        {
            question: "What is the perimeter of a triangle with sides of length 6 cm, 8 cm, and 10 cm?",
            options: ["24 cm", "20 cm", "18 cm", "16 cm"],
            correct: 0,
        },
        {
            question: "What is the sum of the interior angles of a quadrilateral?",
            options: ["360°", "180°", "270°", "300°"],
            correct: 0,
        },
    ],
    // Round 36
    [
        {
            question: "What is the volume of a cone with radius 5 cm and height 10 cm? (Use π ≈ 3.14)",
            options: ["261.25 cm³", "314 cm³", "245 cm³", "350 cm³"],
            correct: 0,
        },
        {
            question: "What is the surface area of a rectangular prism with dimensions 4 cm × 6 cm × 8 cm?",
            options: ["208 cm²", "176 cm²", "192 cm²", "150 cm²"],
            correct: 0,
        },
        {
            question: "What is the area of a triangle with base 10 cm and height 5 cm?",
            options: ["25 cm²", "30 cm²", "50 cm²", "20 cm²"],
            correct: 0,
        },
        {
            question: "What is the perimeter of a regular pentagon with side length 7 cm?",
            options: ["35 cm", "30 cm", "28 cm", "25 cm"],
            correct: 0,
        },
        {
            question: "What is the volume of a sphere with radius 6 cm? (Use π ≈ 3.14)",
            options: ["904.32 cm³", "756 cm³", "453.6 cm³", "350 cm³"],
            correct: 0,
        },
    ],

    // Round 37
    [
        {
            question: "What is the area of a rhombus with diagonals of length 12 cm and 8 cm?",
            options: ["48 cm²", "40 cm²", "60 cm²", "72 cm²"],
            correct: 0,
        },
        {
            question: "How many faces does a triangular prism have?",
            options: ["5", "6", "7", "8"],
            correct: 0,
        },
        {
            question: "What is the surface area of a sphere with radius 4 cm? (Use π ≈ 3.14)",
            options: ["201.06 cm²", "150.72 cm²", "100 cm²", "120 cm²"],
            correct: 0,
        },
        {
            question: "What is the volume of a cylinder with radius 3 cm and height 8 cm? (Use π ≈ 3.14)",
            options: ["226.08 cm³", "180 cm³", "300 cm³", "265.2 cm³"],
            correct: 0,
        },
        {
            question: "What is the perimeter of a regular octagon with side length 5 cm?",
            options: ["40 cm", "45 cm", "50 cm", "35 cm"],
            correct: 0,
        },
    ],

    // Round 38
    [
        {
            question: "What is the area of a sector of a circle with radius 6 cm and central angle 60°? (Use π ≈ 3.14)",
            options: ["18.84 cm²", "9.42 cm²", "11.31 cm²", "12.56 cm²"],
            correct: 0,
        },
        {
            question: "What is the volume of a cylinder with radius 10 cm and height 12 cm? (Use π ≈ 3.14)",
            options: ["3768 cm³", "3800 cm³", "3150 cm³", "2830 cm³"],
            correct: 0,
        },
        {
            question: "What is the sum of the interior angles of a hexagon?",
            options: ["720°", "1080°", "540°", "900°"],
            correct: 0,
        },
        {
            question: "How many faces does a pyramid with a square base have?",
            options: ["4", "5", "6", "7"],
            correct: 1,
        },
        {
            question: "What is the area of a rectangle with length 15 cm and width 7 cm?",
            options: ["105 cm²", "100 cm²", "110 cm²", "95 cm²"],
            correct: 0,
        },
    ],

    // Round 39
    [
        {
            question: "What is the perimeter of a circle with radius 6 cm? (Use π ≈ 3.14)",
            options: ["37.68 cm", "40 cm", "35.48 cm", "45.24 cm"],
            correct: 0,
        },
        {
            question: "What is the volume of a rectangular prism with length 5 cm, width 8 cm, and height 10 cm?",
            options: ["400 cm³", "350 cm³", "450 cm³", "500 cm³"],
            correct: 0,
        },
        {
            question: "How many vertices does a dodecahedron have?",
            options: ["10", "12", "14", "16"],
            correct: 1,
        },
        {
            question: "What is the surface area of a cube with side length 4 cm?",
            options: ["96 cm²", "64 cm²", "48 cm²", "72 cm²"],
            correct: 0,
        },
        {
            question: "What is the area of a circle with radius 4 cm? (Use π ≈ 3.14)",
            options: ["50.24 cm²", "60.5 cm²", "40.5 cm²", "45.8 cm²"],
            correct: 0,
        },
    ],

    // Round 40
    [
        {
            question: "What is the area of a right triangle with legs 8 cm and 15 cm?",
            options: ["60 cm²", "65 cm²", "72 cm²", "80 cm²"],
            correct: 0,
        },
        {
            question: "What is the volume of a pyramid with a rectangular base of area 20 cm² and height 9 cm?",
            options: ["60 cm³", "45 cm³", "70 cm³", "90 cm³"],
            correct: 0,
        },
        {
            question: "How many sides does a regular octagon have?",
            options: ["8", "10", "12", "14"],
            correct: 0,
        },
        {
            question: "What is the perimeter of a square with side length 5 cm?",
            options: ["20 cm", "25 cm", "30 cm", "35 cm"],
            correct: 0,
        },
        {
            question: "What is the surface area of a sphere with radius 3 cm? (Use π ≈ 3.14)",
            options: ["113.04 cm²", "125 cm²", "105 cm²", "90 cm²"],
            correct: 0,
        },
    ]
];


// Game State
let currentRound = 0;
let currentQuestion = 0;
let timer;
let timeLeft;
let isQuizActive = false;
let timeScore = 0;
let roundScore = 0;

// DOM Elements
const timerBar = document.querySelector('.timer-bar');
const timerDisplay = document.querySelector('.timer-display');
const questionElement = document.querySelector('.question');
const optionsContainer = document.querySelector('.options');
const startButton = document.querySelector('.start-quiz');
const nextRoundButton = document.querySelector('.next-round');
const progressDots = document.querySelectorAll('.progress-dot');
const roundDisplay = document.querySelector('#currentRound');
const timeScoreDisplay = document.querySelector('#timeScore');
const roundScoreDisplay = document.querySelector('#roundScore');
const feedbackElement = document.querySelector('.feedback');
const finalScoresElement = document.querySelector('.final-scores');

// Timer Function
function startTimer() {
    timeLeft = 60;
    timerBar.style.width = '100%';
    
    timer = setInterval(() => {
        timeLeft -= 0.1;
        timerDisplay.textContent = Math.ceil(timeLeft);
        timerBar.style.width = `${(timeLeft / 60) * 100}%`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            showFeedback(false);
            setTimeout(() => nextQuestion(), 1000);
        }
    }, 100);
}

// Display Question Function
function displayQuestion() {
    const currentQuestionData = questions[currentRound][currentQuestion];
    questionElement.textContent = currentQuestionData.question;
    feedbackElement.classList.remove('show', 'correct', 'wrong');
    finalScoresElement.innerHTML = '';
    
    optionsContainer.innerHTML = '';
    currentQuestionData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option fade-in';
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });

    updateProgressDots();
}

// Check Answer Function
function checkAnswer(selectedIndex) {
    clearInterval(timer);
    const currentQuestionData = questions[currentRound][currentQuestion];
    const isCorrect = selectedIndex === currentQuestionData.correct;
    
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.style.pointerEvents = 'none');
    
    options[selectedIndex].classList.add(isCorrect ? 'correct' : 'wrong');
    options[currentQuestionData.correct].classList.add('correct');

    if (isCorrect) {
        roundScore++;
        timeScore += Math.ceil(timeLeft);
        roundScoreDisplay.textContent = roundScore;
        timeScoreDisplay.textContent = timeScore;
    }

    showFeedback(isCorrect);
    progressDots[currentQuestion].classList.add(isCorrect ? 'correct' : 'wrong');

    setTimeout(() => nextQuestion(), 1000);
}

// Show Feedback Function
function showFeedback(isCorrect) {
    feedbackElement.textContent = isCorrect ? 'Correct! 🎉' : 'Wrong! 😞';
    feedbackElement.className = `feedback show ${isCorrect ? 'correct' : 'wrong'}`;
}

// Next Question Function
function nextQuestion() {
    currentQuestion++;

    if (currentQuestion >= questions[currentRound].length) {
        endRound();
    } else {
        displayQuestion();
        startTimer();
    }
}

// Update Progress Dots Function
function updateProgressDots() {
    progressDots.forEach((dot, index) => {
        if (index === currentQuestion) {
            dot.classList.add('active');
        } else if (index < currentQuestion) {
            dot.classList.remove('active');
        }
    });
}

// End Round Function
function endRound() {
    isQuizActive = false;
    timerDisplay.textContent = '60';
    timerBar.style.width = '100%';
    questionElement.textContent = 'Round Complete! 🎯';
    optionsContainer.innerHTML = '';
    feedbackElement.classList.remove('show');
    
    finalScoresElement.innerHTML = `
        <div>Round Score: ${roundScore}/5 correct answers</div>
        <div>Time Bonus Points: ${timeScore}</div>
        <div>Great job! 🎉</div>
    `;
    
    nextRoundButton.style.display = 'block';
    startButton.style.display = 'none';
}

// Start New Round Function
function startNewRound() {
    currentQuestion = 0;
    currentRound++;
    roundScore = 0;
    roundDisplay.textContent = currentRound + 1;
    roundScoreDisplay.textContent = '0';
    nextRoundButton.style.display = 'none';
    startButton.style.display = 'block';
    questionElement.textContent = `Ready for Round ${currentRound + 1}? 🤩`;
    optionsContainer.innerHTML = '';
    feedbackElement.classList.remove('show');
    finalScoresElement.innerHTML = '';
    
    // Reset progress dots
    progressDots.forEach(dot => {
        dot.className = 'progress-dot';
    });
    progressDots[0].classList.add('active');
}

// Event Listeners
startButton.addEventListener('click', () => {
    if (!isQuizActive) {
        isQuizActive = true;
        startButton.style.display = 'none';
        displayQuestion();
        startTimer();
    }
});

nextRoundButton.addEventListener('click', () => {
    if (currentRound < questions.length - 1) {
        startNewRound();
    } else {
        // End of all rounds
        questionElement.textContent = 'Quiz Complete! 🎉';
        finalScoresElement.innerHTML = `
            <div>Final Score: ${timeScore} points</div>
            <div>Thank you for playing! 🌟</div>
        `;
        nextRoundButton.style.display = 'none';
    }
});

// Initialize first round
questionElement.textContent = 'Ready for Round 1? 🏁';
