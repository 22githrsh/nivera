import SectionCard from "../common/SectionCard"

function EmploymentSection({ data }) {

  return (
    <SectionCard title="Employment">

      <div className="flex flex-col gap-3">

        {
          data.profile.employment?.map((job) => (
            <div
              key={job._id}
              className="bg-[#1A1A1A] p-3 border border-[#333]"
            >
              <h4 className="font-medium">{job.role}</h4>
              <p className="text-sm text-gray-400">{job.company}</p>
            </div>
          ))
        }

      </div>

    </SectionCard>
  )
}

export default EmploymentSection