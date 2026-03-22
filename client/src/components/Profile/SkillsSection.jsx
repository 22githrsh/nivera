import { useState } from "react"
import SectionCard from "../common/SectionCard"
import { updateSkillsService } from "../../services/workerService"

function SkillsSection({ data, refresh }) {

  const [skills, setSkills] = useState(data.profile.keySkills || [])
  const [input, setInput] = useState("")

  const addSkill = () => {
    if (!input) return
    setSkills([...skills, input])
    setInput("")
  }

  const saveSkills = async () => {
    await updateSkillsService({ keySkills: skills })
    refresh()
  }

  return (
    <SectionCard
      title="Skills"
      action={<button onClick={saveSkills}>Save</button>}
    >

      <div className="flex flex-wrap gap-2 mb-3">
        {
          skills.map((s, i) => (
            <span
              key={i}
              className="bg-[#FE701A] px-3 py-1 text-sm"
            >
              {s}
            </span>
          ))
        }
      </div>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-[#1A1A1A] p-2 border border-[#333]"
        />
        <button onClick={addSkill}>Add</button>
      </div>

    </SectionCard>
  )
}

export default SkillsSection