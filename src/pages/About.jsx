import CTA from "../components/CTA";
import { skills } from "../constants";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Ruben
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          A self-taught front-end developer based in the beautiful city of
          Edinburgh. I have a passion for creating visually appealing web
          designs and implementing responsive solutions.
          <br />
          Having worked extensively in customer service, I understand the
          importance of effective communication and collaboration. My goal is to
          not only create visually appealing web designs but also contribute
          positively to the team dynamic.
          <br />
          Let's team up to craft a unique digital experience!
        </p>
      </div>

      <div className="mt-16 flex flex-wrap gap-12">
        {skills.map((skill) => (
          <div className="block-container w-20 h-20" key={skill.name}>
            <div className="btn-back rounded-xl" />
            <div className="btn-front rounded-xl flex justify-center items-center">
              <img
                src={skill.imageUrl}
                alt={skill.name}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200 my-8" />

      <CTA />
    </section>
  );
};

export default About;
