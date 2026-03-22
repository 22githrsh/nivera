function SectionCard({ title, children, action }) {
  return (
    <div className="bg-[#262626] p-6 rounded-xl border border-[#333]">

      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        {action}
      </div>

      {children}

    </div>
  )
}

export default SectionCard