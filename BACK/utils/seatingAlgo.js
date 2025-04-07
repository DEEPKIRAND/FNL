// BACK/utils/seatingAlgo.js

function shuffleArray(array) {
    return array
        .map((item) => ({ item, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ item }) => item);
}

function generateSeatingPlan(students, halls) {
    // Shuffle students to increase randomness
    let shuffled = shuffleArray(students);

    // Group students by class and subject to help alternate
    const grouped = {};
    shuffled.forEach((student) => {
        const key = `${student.class_name}_${student.subject}`;
        if (!grouped[key]) grouped[key] = [];
        grouped[key].push(student);
    });

    const studentQueue = Object.values(grouped).flat(); // Flatten back to array

    let assignedStudents = [];
    let seatCounter = 1;

    for (let hall of halls) {
        const { hall_name, rows, columns, bench_capacity } = hall;
        const totalSeats = rows * columns * bench_capacity;

        for (let i = 0; i < totalSeats && studentQueue.length > 0; i++) {
            const student = studentQueue.shift();

            student.seat_number = `R${Math.floor(i / (columns * bench_capacity)) + 1}-C${(i % (columns * bench_capacity)) + 1}`;
            student.hall = hall_name;

            assignedStudents.push(student);
        }
    }

    return assignedStudents;
}

module.exports = { generateSeatingPlan };
