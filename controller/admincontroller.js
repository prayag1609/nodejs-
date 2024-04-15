

var adminmodel = require("../model/adminmodel")

exports.adminHome = async (req, res) => {
    res.status(200).json({
        navigation: [
            { name: "Home", link: "/admin" },
            { name: "Register-form", link: "/admin/regi" },
            { name: "Login-form", link: "/admin/login" },
            { name: "Log-out", link: "/admin/out" },
        ]
    })
}

exports.adminRegi = async (req, res) => {

    var insertData = await adminmodel.create(req.body);

    res.status(200).json({
        status: "user register success-fullyy.....",
        navigation: [
            { name: "Home", link: "/admin" },
            { name: "Register-form", link: "/admin/regi" },
            { name: "Login-form", link: "/admin/login" },
            { name: "Log-out", link: "/admin/out" },
        ]
    })

}

exports.adminLogin = async (req, res) => {
    var email = req.body.email;
    var password = req.body.password;

    

    if (adminId == undefined) {
        var adminData = await adminmodel.find({ "email": email });

        if (adminData.length != 0) {
            if (password === adminData[0].password) {
                
                res.status(200).json({
                    status: "admin logged-in successfully...",
                    navigation: [
                        { name: "Home", link: "/admin" },
                        { name: "Register-form", link: "/admin/regi" },
                        { name: "Login-form", link: "/admin/login" },
                        { name: "Log-out", link: "/admin/out" },
                    ]
                });
            } else {
                res.status(200).json({
                    status: "password was wrong...",
                    navigation: [
                        { name: "Home", link: "/admin" },
                        { name: "Register-form", link: "/admin/regi" },
                        { name: "Login-form", link: "/admin/login" },
                        { name: "Log-out", link: "/admin/out" },
                    ]
                });
            }
        } else {
            res.status(200).json({
                status: "admin does not exist.....",
                navigation: [
                    { name: "Home", link: "/admin" },
                    { name: "Register-form", link: "/admin/regi" },
                    { name: "Login-form", link: "/admin/login" },
                    { name: "Log-out", link: "/admin/out" },
                ]
            });
        }
    }
    res.status(200).json({
        status: "admin already logged-in.....",
        navigation: [
            { name: "Home", link: "/admin" },
            { name: "Register-form", link: "/admin/regi" },
            { name: "Login-form", link: "/admin/login" },
            { name: "Log-out", link: "/admin/out" },
        ]
    });

};


exports.adminOut = async (req, res) => {
    ;

    res.status(200).json({
        status: "Logged-out success-fully....",
        navigation: [
            { name: "Home", link: "/admin" },
            { name: "Register-form", link: "/admin/regi" },
            { name: "Login-form", link: "/admin/login" },
            { name: "Log-out", link: "/admin/out" },
        ]
    })

}





// ============================================================================================


const ResultModel = require('../model/resultmodel');

exports.addResult = async (req, res) => {
    var studName = req.body.name;

    
    var sub1 = parseFloat(req.body.sub1);
    var sub2 = parseFloat(req.body.sub2);
    var sub3 = parseFloat(req.body.sub3);
    var sub4 = parseFloat(req.body.sub4); 
    var sub5 = parseFloat(req.body.sub5);


    if (isNaN(sub1) || isNaN(sub2) || isNaN(sub3) || isNaN(sub4) || isNaN(sub5)) {
        return res.status(400).json({
            status: "Invalid subject scores. Please provide valid numeric values.",
        });
    }

    var maxMarks = 100;
    var total = sub1 + sub2 + sub3 + sub4 + sub5;
    var totalMarks = 5 * maxMarks;
    var percentage = ((total / totalMarks) * 100).toFixed(2);


    var roundedPercentage = Math.round(percentage * 100) / 100;

    var grade;
    if (roundedPercentage >= 90) {
        grade = 'A';
    } else if (roundedPercentage >= 80) {
        grade = 'B';
    } else if (roundedPercentage >= 70) {
        grade = 'C';
    } else if (roundedPercentage >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }


    const resultData = {
        name: studName,
        sub1: sub1,
        sub2: sub2,
        sub3: sub3,
        sub4: sub4,
        sub5: sub5,
        total: total,
        percentage: percentage,
        grade: grade
    };


    const result = await ResultModel.create(resultData);

    res.status(200).json({
        status: "Result added successfully.",
        result: result
    });


}
