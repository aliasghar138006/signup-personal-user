import { Schema , model , models } from "mongoose";

const personalSchema = new Schema({
    fullName : {
        type:String,
        default:'نام و نام خانوادگی'
    },
    city:{
        type:String,
        default:'تهران'
    },
    email: {
        type:String,
        default:'test@test.com'
    },
    phone: {
        type:String,
        default:'+123456'
    },
    telegram: {
        type:String,
        default:''
    },
    instagram: {
        type:String,
        default:''
    },
    resume:{
        type:String,
        default:''
    },
    userName : {
        type:String,
        require:true
    },
    password: {
        type:String,
        require : true
    },
    shortDescription : {
        type : String,
        default : 'معرفی کوتاه'
    },
    image : {
        type:String,
        default:'https://s31.picofile.com/file/8468247076/imagetest.jpg',
    },
    descriptions : {
        type: String,
        default : 'معرفی کامل'
    },
    skills : {type:Array , default:[{title:'html' , width:'65' }]},
    educations : {type:Array , default:[{title:'کامپیوتر' , university:'سمنان' , year:'1402'}]},
    experience: {type:Array , default:[{title:'تدریس آنلاین' , descriptions:'توضیحات' , startYear:'1398' , endYear:'1400', icon:''}]},
    documents: {type:Array , default:[{image:'https://s30.picofile.com/file/8468240276/docImage.webp.html' , title:'آیلتس'}]},
    commendations : {type:Array , default:[{image:'https://s30.picofile.com/file/8468240300/comImage.jpg'}]},
    simples : {type:Array , default:[{title:'دیجی کالا' , image:'https://s31.picofile.com/file/8468240334/simpleImage.png'}]},
    courses : {type:Array , default:[{title:'برنامه نویسی' , image:'https://s31.picofile.com/file/8468240368/courseImage.png'}]},
    message: {type:Array},
    createAt : {
        type:Date,
        default : () => Date.now(),
        immutable : true
    },
    updateAt : {
        type : Date,
        default : () => Date.now(),
        immutable : false
    }
})


const PersonalUser = models.PersonalUser || model('PersonalUser' , personalSchema)

export default PersonalUser;