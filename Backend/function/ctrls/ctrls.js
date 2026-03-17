import { deleteOne, findAll, findById, insert ,update} from "../services/services.js"


export const getAllLaunchers =async (req,res)=>{
   const allLaunchers=await findAll()
   return res.json(allLaunchers)
}
export const getLauncherById =async (req,res)=>{
    const idForSearch=req.params.id
    const launcherById=await findById(idForSearch)
    return res.json(launcherById)
}

export const launcherDestroyed =async(req,res)=>{
    const idForUpdate=req.body.id
    const destroyedLauncher=await update(idForUpdate)
    return res.json({msg:"The launcher was successfully destroyed."},destroyedLauncher)
}

export const createLauncher =async(req,res)=>{
    const {city,rocketType,latitude,longitude,name} =req.body
    const newLauncher=await insert(city,rocketType,latitude,longitude,name)
    return res.json(newLauncher)
}
export const deleteLauncherById = async(req,res) => {
    const idForDelete=req.params.id
    await deleteOne(idForDelete)
    return res.json({msg:"The launcher was successfully deleted."})
}


