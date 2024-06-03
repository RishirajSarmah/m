const express = require("express");
const userData = require ('../db/db-schema')
const index = (req,res) => {
    console.log('user hit the resource')
    res.status(200).send('homepage')
}
const accountRegistration = async (req,res) => {
    const insertData = await userData.create(req.body)
    res.status(201).json(insertData)
    console.log(insertData)
}
module.exports = {index,accountRegistration}