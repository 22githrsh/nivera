import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Loader from "../../components/common/Loader"

import { getProfileByUsernameService } from "../../services/workerService"

// sections
import ProfileHeader from "../../components/Profile/ProfileHeader"
import SkillsSection from "../../components/Profile/SkillsSection"
import ITSkillsSection from "../../components/Profile/ITSkillsSection"
import EmploymentSection from "../../components/Profile/EmploymentSection.jsx"
import EducationSection from "../../components/Profile/EducationSection"
import ProjectsSection from "../../components/Profile/ProjectsSection"
import SummarySection from "../../components/Profile/SummarySection"
import CareerSection from "../../components/Profile/CareerSection"
import PersonalSection from "../../components/Profile/PersonalSection"
import DiversitySection from "../../components/Profile/DiversitySection"
import ResumeSection from "../../components/Profile/ResumeSection"

function Profile() {

  const { username } = useParams()

  const [profileData, setProfileData] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchProfile = async () => {
    try {
      setLoading(true)
      const res = await getProfileByUsernameService(username)
      setProfileData(res)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProfile()
  }, [username])

  if (loading) return <Loader />
  if (!profileData) return <h1>No Profile Found</h1>

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white pt-[12vh] px-6">

      <div className="max-w-5xl mx-auto flex flex-col gap-6">

        <ProfileHeader data={profileData} refresh={fetchProfile} />

        <SkillsSection data={profileData} refresh={fetchProfile} />

        <ITSkillsSection data={profileData} refresh={fetchProfile} />

        <EmploymentSection data={profileData} refresh={fetchProfile} />

        <EducationSection data={profileData} refresh={fetchProfile} />

        <ProjectsSection data={profileData} refresh={fetchProfile} />

        <SummarySection data={profileData} refresh={fetchProfile} />

        <CareerSection data={profileData} refresh={fetchProfile} />

        <PersonalSection data={profileData} refresh={fetchProfile} />

        <DiversitySection data={profileData} refresh={fetchProfile} />

        <ResumeSection refresh={fetchProfile} />

      </div>

    </div>
  )
}

export default Profile