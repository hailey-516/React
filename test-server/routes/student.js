const students = [];

exports.add = (req, res) => {
    const data = req.body;

    console.log(data);

    if (Object.keys(data).length >= 3) {
        students.push(data);
        res.json({msg: "ok", status: 'success'});
    } else {
        res.json({msg: "Required keys are missing (name, age, job)", status: 'failed'})
    }
}

exports.get = (req, res) => {
    res.json(students);
}