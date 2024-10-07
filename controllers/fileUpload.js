//business logic

const File=require("../models/File");

//lov=calfileupload ->handler function

exports.localFileUpload=async(req,res) => {
    try{
        
        //fectch file
        console.log("File Aagai JEE ->",file);

        let path=__dirname + "/files/"+ Date.now() + `.${file.name.split(' . ')[1]}` ;
        console.log("PATH ->",path) 

        file.mv(path,(err)=>{
            console.log(err);
        });
     
        res.json({
            success:true,
            message:'Local File Upload  Successfully',
        })
    }
    catch(error){
        console.log(error);
           
    }
}