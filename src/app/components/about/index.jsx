
import clsx from "clsx";

const ItemLayout = ({ children, className }) => (
  <div
    className={clsx(
      "custom-bg flex items-center justify-center rounded-xl p-6 sm:p-8",
      className
    )}
  >
    {children}
  </div>
);

const AboutDetails = () => {
  return (
    <section className="relative w-full px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">

        {/* Professional introduction */}
        <ItemLayout className="flex-col items-start md:col-span-8 md:row-span-2">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            Get to know me
          </p>

          <h2 className="mb-5 w-full text-left text-3xl font-bold text-accent sm:text-4xl">
            Building Intelligent Solutions with AI
          </h2>

          <p className="leading-8 text-white/85">
            I am a Computer Science and Technology graduate from
            Shivaji University with a strong interest in Artificial
            Intelligence, Machine Learning, and LLM engineering.
            I enjoy building practical applications that combine
            data, machine learning, and modern AI technologies
            to solve real-world problems.
          </p>

          <p className="mt-4 leading-8 text-white/85">
            During my Data Science with AI internship at Labmentix
            Pvt. Ltd., I worked on machine learning solutions for
            healthcare, retail, and finance datasets. My experience
            includes feature engineering, hyperparameter tuning,
            and building Streamlit applications to make model
            predictions easier to explore.
          </p>

          <p className="mt-4 leading-8 text-white/85">
            I have also developed projects involving retrieval-
            augmented generation (RAG), semantic search, document
            processing, and AI-powered question answering using
            technologies such as Python, FastAPI, Sentence-BERT,
            ChromaDB, and LLaMA-based models.
          </p>

          <p className="mt-4 leading-8 text-white/85">
            I am interested in opportunities where I can continue
            learning, strengthen my engineering skills, and build
            useful AI-powered products.
          </p>
        </ItemLayout>

        {/* Education */}
        <ItemLayout className="flex-col items-start md:col-span-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Education
          </p>

          <h3 className="mt-3 text-xl font-bold text-accent">
            B.Tech — Computer Science and Technology
          </h3>

          <p className="mt-2 leading-7 text-white/85">
            School of Engineering & Technology
            <br />
            Shivaji University, Kolhapur
          </p>

          <p className="mt-3 text-white/70">
            CGPA: 7.6
          </p>

          <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-6 text-white/70">
            HSC — 60% (2022)
            <br />
            SSC — 94% (2020)
          </p>
        </ItemLayout>

        {/* Languages */}
        <ItemLayout className="flex-col items-start md:col-span-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Languages
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {["English", "Marathi", "Hindi"].map((language) => (
              <span
                key={language}
                className="rounded-full border border-accent/30 px-4 py-2 text-sm text-white"
              >
                {language}
              </span>
            ))}
          </div>

          <p className="mt-4 text-sm leading-6 text-white/70">
            Communication, collaboration, problem-solving,
            and continuous learning.
          </p>
        </ItemLayout>

        {/* GitHub languages */}
        <ItemLayout className="flex-col !p-4 md:col-span-5">
          <h3 className="mb-3 w-full text-left text-lg font-semibold text-accent">
            Languages on GitHub
          </h3>

          <img
            className="h-auto w-full"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=nadargeAnkita&layout=compact&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF"
            alt="GitHub language statistics"
            loading="lazy"
          />
        </ItemLayout>

        {/* GitHub stats */}
        <ItemLayout className="flex-col !p-4 md:col-span-7">
          <h3 className="mb-3 w-full text-left text-lg font-semibold text-accent">
            GitHub Activity
          </h3>

          <img
            className="h-auto w-full"
            src="https://github-readme-stats.vercel.app/api?username=nadargeAnkita&show_icons=true&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B"
            alt="GitHub profile statistics"
            loading="lazy"
          />
        </ItemLayout>

        {/* Technical skills */}
        <ItemLayout className="flex-col items-start md:col-span-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Technical Toolkit
          </p>

          <h3 className="mt-3 text-2xl font-bold text-accent">
            Technologies I Work With
          </h3>

          <div className="mt-5 flex flex-wrap gap-2">
            {[
              "Python",
              "SQL",
              "C++",
              "Scikit-learn",
              "TensorFlow",
              "XGBoost",
              "NLP",
              "RAG",
              "LangChain",
              "Sentence-BERT",
              "ChromaDB",
              "FastAPI",
              "REST APIs",
              "Streamlit",
              "Power BI",
              "Excel",
              "Git",
              "GitHub",
              "Jupyter Notebook",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/90"
              >
                {skill}
              </span>
            ))}
          </div>

          <p className="mt-5 text-sm leading-6 text-white/60">
            Python • Machine Learning • LLM Engineering •
            Data Analytics • Backend Development
          </p>
        </ItemLayout>

        {/* Achievements */}
        <ItemLayout className="flex-col items-start md:col-span-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Highlights
          </p>

          <h3 className="mt-3 text-xl font-bold text-accent">
            Learning & Achievements
          </h3>

          <ul className="mt-4 space-y-4 text-sm leading-6 text-white/85">
            <li>
              <span className="font-semibold text-accent">
                GirlScript Summer of Code 2024 Extended
              </span>
              <br />
              Ranked AIR 471 with 2 merged pull requests.
            </li>

            <li>
              IBM — Python for Data Science, AI & Development
            </li>

            <li>
              IBM Data Science Professional Certificate
            </li>

            <li>
              TCS iON Career Edge — Young Professional
            </li>

            <li>
              Completed Accenture and Tata virtual consulting simulations.
            </li>
          </ul>
        </ItemLayout>

      </div>
    </section>
  );
};

export default AboutDetails;
