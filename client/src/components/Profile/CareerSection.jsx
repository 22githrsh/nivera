function CareerSection({ data, updateField }) {

  const career = data?.careerProfile || {}

  return (
    <div className="bg-[#262626] p-6">

      <input
        value={career.industry || ""}
        placeholder="Industry"
        onChange={(e) =>
          updateField("careerProfile", {
            ...career,
            industry: e.target.value
          })
        }
      />

    </div>
  )
}

export default CareerSection