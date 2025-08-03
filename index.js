import fs from "fs/promises"
import fss from 'fs'
import path from "path"

const basepath = "d:\\RK Web Development\\backend\\node project clutter"
let files = await fs.readdir(basepath)
for(const item of files){
   
    let ext = item.split('.')[item.split('.').length-1]
    if(ext!="js" && ext!="json" && item.split('.').length>1){
if(fss.existsSync(path.join(basepath,ext))){
 await fs.rename(path.join(basepath,item),path.join(basepath,ext,item))
    }
    else
    {
       await fs.mkdir(path.join(basepath, ext))
      await fs.rename(path.join(basepath,item),path.join(basepath,ext,item))   
    }
    }
}