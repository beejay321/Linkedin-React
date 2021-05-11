import ExpEduCard from "./ExpEduCard"

const ExperienceContent = (props) => {
  const experiences = props.experiences
  return (
    <>
      {experiences.map((exp) => {
        return (
          <ExpEduCard
            jobOrSchool={exp.role}
            companyOrSubject={exp.company}
            duration={exp.startDate}
            location={exp.area}
            description={exp.description}
            img={
              exp.image ||
              "https://res.cloudinary.com/dmqsfltrf/image/upload/v1607933865/linkedin/d5ncpqvqrjwdxixjuyjr.ico"
            }
          />
        )
      })}
    </>
  )
}

export default ExperienceContent
