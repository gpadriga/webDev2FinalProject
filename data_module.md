# Data Module

# User

```
{
    _id:{type : String, 'require':true}, //userId
    username :{type:String, 'require':true},
    imagePath: String, 
    languages: [String] // user perferred languages
}
```

# Question

```
{
    _id:{type : String, 'require':true},
    ownerId:{type : String, 'require':true},
    title : {type:String, 'require':true},
    desc : {type: String, 'require':true},
    language: {type: String, 'require':true},
    vote:{type: Number, 'require':true}
    comments: [{
        _id : {type:String, require:true}, //commentId
        userId: {type:String, require:true},
        comment: {type:String, require:true},
    }]
}
```

