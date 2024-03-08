//Write the logic to create the controller for idea resourses

const ideas = require('../models/ideas.model')

let id = 3; //intial count of id
/*/Create the controller for fetching all ideas

GET 127.0.0.1:8000/ideaApp/api/v1/ideas

Return list of all the ideas/*/

exports.getAllIdeas = (req,res)=>{ 
//getAllIdeas will available everywhere, controller have req,res controlls

//First read all the ideas from idea.model file

//return all those ideas

res.status(200).send(ideas)
//200 is HTTP status code
/**200 Stands for successful operational code in HTTP world */


}


/**Controller that fetches idea based on the id */
exports.getIdeaBasedOnId = (req,res)=>{
    let idea_id = req.params.id
    
    let idea_obj = ideas[idea_id]

    if(idea_obj){
        res.status(200).send(idea_obj)
    }else{
        res.status(404).send({err:"Invalid ID"})
    }
//404 => Not Found
}


/**Controller to create a new idea */
exports.createIdea = (req,res)=>{
    //Need to read the req body
    idea_object = req.body
    id++
    idea_object["id"] = id; //setting the id in the newly created idea object 
    ideas.id = idea_object

    //Add the new object provided in the ideas obj
    
    //Return the response
    res.status(201).send(idea_object)
}



//Controller for Updating the idea

exports.updatedIdea = (req,res)=>{
    //1. Read the idea id
    idea_id = req.params.id 
    //2. check id that idea id is preset
    if(ideas[idea_id]){
        let idea_obj = req.body
        ideas[idea_id] = idea_obj
        res.status(200).send(idea_obj)
    }else{
        return res.status(404).send({
            message : "Idea id doesn't exist"
        })
    }
    //3. Read the new idea body and replace it 
    //4. return the updated idea
}



//Delete Idea
exports.deleteIdeas = (req,res)=>{
//fetch the idea if present
idea_id = req.params.id
if(ideas[idea_id]) {
    delete ideas[idea_id]
    res.status(200).send({
        message : "Idea has been Deleted"
     })
}else{
    return res.status(404).send({
        message : "Idea id doesn't exist"
    })
}
}