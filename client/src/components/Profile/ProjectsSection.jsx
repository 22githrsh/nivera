import SectionCard from "../common/SectionCard"

function ProjectsSection({ data }) {

  return (
    <SectionCard title="Projects">

      <div className="flex flex-col gap-3">

        {
          data.profile.projects?.map((p) => (
            <div key={p._id} className="bg-[#1A1A1A] p-3 border border-[#333]">
              <h4>{p.title}</h4>
              <p className="text-sm text-gray-400">{p.description}</p>
            </div>
          ))
        }

      </div>

    </SectionCard>
  )
}

export default ProjectsSection