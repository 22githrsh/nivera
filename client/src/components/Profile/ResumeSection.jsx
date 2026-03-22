import SectionCard from "../common/SectionCard"

function ResumeSection({ data, refresh }) {

  const resume = data?.profile?.resume

  return (
    <SectionCard title="Resume">

      {
        resume?.url ? (
          <a
            href={resume.url}
            target="_blank"
            className="text-[#FE701A]"
          >
            {resume.name || "View Resume"}
          </a>
        ) : (
          <p>No resume uploaded</p>
        )
      }

      <input
        type="file"
        className="mt-3"
      />

    </SectionCard>
  )
}

export default ResumeSection