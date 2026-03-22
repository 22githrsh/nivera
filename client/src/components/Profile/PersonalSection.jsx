function PersonalSection({ data, updateField }) {

  const personal = data?.personalDetails || {}

  return (
    <div className="bg-[#262626] p-6">

      <input
        placeholder="Gender"
        value={personal.gender || ""}
        onChange={(e) =>
          updateField("personalDetails", {
            ...personal,
            gender: e.target.value
          })
        }
      />

    </div>
  )
}

export default PersonalSection