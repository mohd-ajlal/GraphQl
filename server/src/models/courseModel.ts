import mongoose from 'mongoose';





const schema = new mongoose.Schema({
    id:{type:String,required:true,sparse:true},
    title:{type:String,required:true},
    description:{type:String,required:true,unique:true},
    instructor: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    ratingsAverage:Intl!,
    price:{type:String,required:true},
    category:{type:String,required:true},
    subCategory:{type:String,required:true},
    level:{type:String,required:true},
    language:{type:String,required:true},
    whatYouWillLearn:[{
        type:String,
        required:true,
    }],
    requirements:[
        {
            type:String,
            required:true,
        }
    ],
    targetAudience:[
        {
            type:String,
            required:true,
        }
    ],
    isPublished:{type:Boolean,required:true},
    isFree:{type:Boolean,required:true},
    isApproved:{type:Boolean,required:true},
    isRejected:{type:Boolean,required:true},
    isFeatured:{type:Boolean,required:true},
    isTrending:{type:Boolean,required:true},
    isBestSeller:{type:Boolean,required:true},
    coverImage:{type:String,required:true},
    previewVideo:{type:String,required:true},
    students:[],
    createdAt:{type:String,required:true},
    updatedAt:{type:String,required:true}
},
{timestamps:true}
)

export const Course = mongoose.models?.Course || mongoose.model("Course", schema);