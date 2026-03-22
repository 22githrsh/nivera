function SummarySection({ data, updateField }) {
  return (
    <div className="bg-[#262626] p-6">
      <textarea
        value={data?.profileSummary || ""}
        onChange={(e) => updateField("profileSummary", e.target.value)}
        className="w-full bg-[#1A1A1A] p-2"
        placeholder="Write summary..."
      />
    </div>
  )
}

export default SummarySection