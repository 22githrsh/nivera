import { uploadPhotoService } from "../../services/workerService"

function ProfileHeader({ data, setFormData }) {

  const handleImageChange = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    const formData = new FormData()
    formData.append("photo", file)

    const res = await uploadPhotoService(formData)

    setFormData(prev => ({
      ...prev,
      profilePhoto: res.profilePhoto
    }))
  }

  return (
    <div className="bg-[#262626] p-6">

      <label className="cursor-pointer">
        <img
          src={data?.profilePhoto || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"}
          className="w-20 h-20 object-cover"
        />
        <input type="file" className="hidden" onChange={handleImageChange}/>
      </label>

      <h2>{data?.fullName}</h2>

    </div>
  )
}

export default ProfileHeader