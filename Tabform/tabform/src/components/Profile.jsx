const Profile = ({formData,setFormData,error}) =>{
    const {name,age,email} = formData;

    function handleChange(e,value){
        setFormData((prev)=>({
            ...prev,
            [value]:e.target.value
        }));
    }
    return (
        <div>
            <div>
                <label>Name : </label>
                <input type="text" value={name} onChange={(e)=> handleChange(e,"name")}/>
                {error.name && <span className="error">{error.name}</span>}
            </div>
             <div>
                <label>age : </label>
                <input type="number" value={age} onChange={(e)=> handleChange(e,"age")}/>
            </div>
             <div>
                <label>Email : </label>
                <input type="email" value={email} onChange={(e)=> handleChange(e,"email")}/>
            </div>
        </div>
    )
}

export default Profile;