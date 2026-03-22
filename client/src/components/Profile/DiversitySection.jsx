import SectionCard from "../common/SectionCard"

function DiversitySection({ data }) {

  const diversity = data.profile.diversity || {}

  return (
    <SectionCard title="Diversity">

      <p><strong>Disability:</strong> {diversity.disabilityStatus || "Not added"}</p>
      <p><strong>Military:</strong> {diversity.militaryExperience || "Not added"}</p>
      <p><strong>Career Break:</strong> {diversity.careerBreak || "Not added"}</p>

    </SectionCard>
  )
}

export default DiversitySection