// List of certifications and achievements
const experiences = [
  {
    title: "Data Science Foundations Course",
    organization: "Great Learning",
    duration: "Completed: Oct 2024",
    description: "Gained skills in data analysis, machine learning, and statistical modeling."
  },
  {
    title: "Infosys Springboard Certifications",
    organization: "Infosys",
    duration: "Completed: Jan 2024 - Present",
    description: "Earned over 25 certificates covering various topics in data science and programming."
  },
  {
    title: "Python Programming Course",
    organization: "upGrad",
    duration: "Enrolled: Nov 2024",
    description: "Enhancing programming knowledge and exploring advanced applications in data science."
  },
  {
    title: "Geeks for Geeks Vultr Hackathon",
    organization: "Geeks for Geeks",
    duration: "Participated: Dec 2024",
    description: "Qualified in Phase 1, showcasing problem-solving skills and creativity."
  },
  {
    title: "AWS IoT SiteWise Course",
    organization: "Simplilearn",
    duration: "Completed: Jan 2024",
    description: "Learned industry-aligned skills in AWS IoT SiteWise."
  }
];

const experienceList = document.getElementById("experience-list");

experiences.forEach(exp => {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${exp.title}</strong> at ${exp.organization} <br/>
  <em>${exp.duration}</em><br/>${exp.description}<br/><br/>`;
  experienceList.appendChild(li);
});
