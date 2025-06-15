export const schema = `#graphql

type User{
    _id: ID!
    name: String!
    email: String!
    password: String
    googleId: String
    role: String!
    avatar: String!
    verified: Boolean!
    createdAt: String!
    updatedAt: String!
}
    

type Course{
    _id:ID!
    title:String!
    description:String!
    instructor:User!
    ratingsAverage:Int!
    price:Int!
    category:String!
    subCategory:String!
    level:String!
    language:String!
    whatYouWillLearn:[String!]!
    requirements:[String!]!
    targetAudience:[String!]!
    isPublished:Boolean!
    isFree:Boolean!
    isApproved:Boolean!
    isRejected:Boolean!
    isFeatured:Boolean!
    isTrending:Boolean!
    isBestSeller:Boolean!
    coverImage:String!
    previewVideo:String!
    students:[String!]!
    createdAt:String!
    updatedAt:String!
}





type Query {
    users:[User]
    courses:[Course]
    course(id:ID!):Course
    # sections:[Section]
    # lectures:[Lecture]
}
    `;
