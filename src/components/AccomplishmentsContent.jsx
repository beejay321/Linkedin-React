import ExpEduCard from "./ExpEduCard"
import AccomplishmentsCard from "./AccomplishmentsCard"
const EducationContent = (props) => {
  return (
    <>
      <AccomplishmentsCard
        type="Languages"
        accomplishments={["Italian", "French", "Dutch", "Afrikaans"]}
      />
      <AccomplishmentsCard
        type="Courses"
        accomplishments={[
          "HTML",
          "CSS",
          "Javascript",
          "Typescript",
          "MongoDB",
          "Express",
          "React",
        ]}
      />
      <AccomplishmentsCard
        type="Cooking"
        accomplishments={["Pasta", "Pizza"]}
      />
    </>
  )
}

export default EducationContent
