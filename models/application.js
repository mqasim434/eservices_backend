const { bool, boolean } = require("joi");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        attestationMode: {
            type: String,
        },
        fromWhere: {
            type: String,
        },
        district: {
            type: String,
        },
        question1: {
            type: boolean,
        },
        question2: {
            type: boolean,
        },
        question3: {
            type: boolean,
        },
        question4: {
            type: boolean,
        },
        


    }
);