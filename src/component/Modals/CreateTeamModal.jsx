
function CreateTeamModal() {
  return (
    <div className="absolute top-[10%] z-10 bg-white p-5 w-full max-w-[765px]"> 
        <div className="p-3 bg-blue-600 text-white font-bold">
            Create Team
        </div>

        <div className="flex justify-between">
            <div>
                {[1,2,3,4,5,6,7,8,9,10,11]?.map((item)=>(
                    <div key={item} className="p-2">
                        <div>
                        
                        </div>
                        Virat Kohli
                    </div>
                ))}
                </div>
                <div>
                    Choose Players
                </div>
                <div>
                {[1,2,3,4,5,6,7,8,9,10,11]?.map((item)=>(
                    <div key={item} className="p-2">
                        Lasith Malinga
                    </div>
                ))}
                    </div>
            </div>
    </div>
  )
}

export default CreateTeamModal