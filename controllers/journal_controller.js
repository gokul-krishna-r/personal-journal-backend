const Journal = require("../models/journal_model");

exports.create = (req,res)=>{

    if(!req.body.title|| !req.body.body || !req.body._id){
        res.status(400).send({error:true,message:"All Fields not found"});
        return;
    }

    const newJournal = new Journal({
        title:req.body.title,
        body:req.body.body,
        _id:req.body._id,
    })
    
    newJournal.save().then( data =>{
         res.status(200).send(data);
      }).catch(err =>{
          res.status(500).send({
              message:"Internal Server Error "+err.message,
          })
      });
    
}

exports.update = (req,res)=>{
    Journal.updateOne({_id: req.body._id}, req.body)
    .then(data => {
        if (!data) res.json({ success: false, result: "No such journal exists"})
      
        res.json({success:true,result:data});
    })
      .catch(err => {
          res.json({ success: false, result: err})
      })
    },



exports.findAll  = (req,res)=>{
    Journal.find().sort({"_id":-1})
        .then(data => {
            if (data.length===0) {
                return res.status(404).json({ success: false, result: "No Journal found"})
            }
            res.status(200).json({ success: true, result: data})
        })
        .catch(err => {
            res.status(500).json({ success: false, result: err})
        })
}

exports.findJournalById  = (req,res)=>{
    if(!req.body._id){
        res.status(400).send({success:false,message:"All Fields not found"});
        return;
    }


    Journal.find({_id:req.body._id})
        .then(data => {
            if (data.length==0) {
                return res.json({ success: false, result: "No Journal found"})
            }
            res.status(200).json({ success: true, result: data})
        })
        .catch(err => {
            res.status(500).json({ success: false, result: err})
        })
}


exports.findIds = (req,res)=>{
    Journal.distinct("_id")
    .then(data => {
        if (data.length===0) {
            return res.status(404).json({ success: false, result: "No Id's found"})
        }
        res.json({ success: true, result: data})
    })
    .catch(err => {
        res.status(500).json({ success: false, result: err})
    })
    

}