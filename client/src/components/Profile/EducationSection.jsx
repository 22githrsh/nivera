import SectionCard from "../common/SectionCard"

function EducationSection({ data }) {

  return (
    <SectionCard title="Education">

      <div className="flex flex-col gap-3">

        {
          data.profile.education?.map((edu) => (
            <div key={edu._id} className="bg-[#1A1A1A] p-3 border border-[#333]">
              <h4>{edu.degree}</h4>
              <p className="text-sm text-gray-400">{edu.institute}</p>
            </div>
          ))
        }

      </div>

    </SectionCard>
  )
}

export default EducationSection