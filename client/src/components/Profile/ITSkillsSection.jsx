import SectionCard from "../common/SectionCard"

function ITSkillsSection({ data }) {

  const skills = data?.profile?.itSkills || []

  return (
    <SectionCard title="IT Skills">

      <div className="flex flex-col gap-2">

        {
          skills.map((skill, i) => (
            <div key={i} className="flex justify-between">
              <span>{skill.skill}</span>
              <span className="text-gray-400">{skill.level}</span>
            </div>
          ))
        }

      </div>

    </SectionCard>
  )
}

export default ITSkillsSection