import students from "../data/students.js";

// GET /students
const getAllStudents = (req, res) => {
  res.status(200).json(students);
};

// GET /students/:id
const getStudentById = (req, res) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({
      message: "Student ID must be a number",
    });
  }

  const student = students.find((student) => student.id === id);

  if (!student) {
    return res.status(404).json({
      message: "Student not found",
    });
  }

  res.status(200).json(student);
};

// POST /students
const createStudent = (req, res) => {
  const { name, age, course } = req.body;

  if (!name || age === undefined || !course) {
    return res.status(400).json({
      message: "Name, age and course are required",
    });
  }

  const numericAge = Number(age);

  if (Number.isNaN(numericAge) || numericAge <= 0) {
    return res.status(400).json({
      message: "Age must be a valid positive number",
    });
  }

  const newStudent = {
    id:
      students.length > 0
        ? Math.max(...students.map((student) => student.id)) + 1
        : 1,
    name,
    age: numericAge,
    course,
  };

  students.push(newStudent);

  res.status(201).json({
    message: "Student added successfully",
    student: newStudent,
  });
};

// PUT /students/:id
const updateStudent = (req, res) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({
      message: "Student ID must be a number",
    });
  }

  const student = students.find((student) => student.id === id);

  if (!student) {
    return res.status(404).json({
      message: "Student not found",
    });
  }

  const { name, age, course } = req.body;

  if (!name || age === undefined || !course) {
    return res.status(400).json({
      message: "Name, age and course are required",
    });
  }

  const numericAge = Number(age);

  if (Number.isNaN(numericAge) || numericAge <= 0) {
    return res.status(400).json({
      message: "Age must be a valid positive number",
    });
  }

  student.name = name;
  student.age = numericAge;
  student.course = course;

  res.status(200).json({
    message: "Student updated successfully",
    student,
  });
};

// DELETE /students/:id
const deleteStudent = (req, res) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({
      message: "Student ID must be a number",
    });
  }

  const studentIndex = students.findIndex((student) => student.id === id);

  if (studentIndex === -1) {
    return res.status(404).json({
      message: "Student not found",
    });
  }

  const deletedStudent = students.splice(studentIndex, 1)[0];

  res.status(200).json({
    message: "Student deleted successfully",
    student: deletedStudent,
  });
};

export {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
