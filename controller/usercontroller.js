

var usermodel = require("../model/usermodel")

exports.userHome = async (req,res) => {
    res.status(200).json({
        navigation:[
            { name : "Home", link:"/user" },
            { name : "Register-form", link:"/user/regi" },
            { name : "Login-form", link:"/user/login" },
            { name : "Log-out", link:"/user/out" },
        ]
    })
}

exports.userRegi = async(req,res) => {
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;

    var insertData = await usermodel.create(req.body);

    res.status(200).json({
        status:"user register success-fullyy.....",
        navigation:[
            { name : "Home", link:"/user" },
            { name : "Register-form", link:"/user/regi" },
            { name : "Login-form", link:"/user/login" },
            { name : "Log-out", link:"/user/out" },
        ]  
    })

}


exports.userLogin = async(req,res) => {

    var email = req.body.email;
    var password = req.body.password;

    
    var userId = await Storage.getItem("user_id");

    if(userId == undefined){
        var userData = await usermodel.find({"email":email})
        if(userData.length !=0 )
        {
            if(userData[0].password == password)
            {
                await Storage.init()
                await Storage.setItem("user_id");
                res.status(200).json({
                    status:"user logged-in success-fully...",
                    navigation:[
                        { name : "Home", link:"/user" },
                        { name : "Register-form", link:"/user/regi" },
                        { name : "Login-form", link:"/user/login" },
                        { name : "Log-out", link:"/user/out" },
                    ]
                })
            }
            else{
                res.status(200).json({
                    status:"password was wrong...",
                    navigation:[
                        { name : "Home", link:"/user" },
                        { name : "Register-form", link:"/user/regi" },
                        { name : "Login-form", link:"/user/login" },
                        { name : "Log-out", link:"/user/out" },
                    ]
                })
            }
        }
        else{
            res.status(200).json({
                status:"user does not exits.....",
                navigation:[
                    { name : "Home", link:"/user" },
                    { name : "Register-form", link:"/user/regi" },
                    { name : "Login-form", link:"/user/login" },
                    { name : "Log-out", link:"/user/out" },
                ]
            })
        }
    }
}

exports.userOut = async (req,res) => {
    await Storage.init();
    await Storage.clear();

    res.status(200).json({
        status:"Logged-out success-fully....",
        navigation:[
            { name : "Home", link:"/user" },
            { name : "Register-form", link:"/user/regi" },
            { name : "Login-form", link:"/user/login" },
            { name : "Log-out", link:"/user/out" },
        ]
    })

}

var resultModel = require("../model/resultmodel")
exports.viewResult = async(req,res) => {
    var name = req.body.name;

    var resultData = await resultModel.find({"name":name})
    
    res.status(200).json({
        resultData
    })
    
}