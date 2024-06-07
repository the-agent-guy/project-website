import Image from "next/image";

export function Hero() {
  return (
    <div className="pt-20 px-4 flex flex-col justify-center items-center">
      <article className="prose">
        <h1>The Agent Foundation</h1>
        <a
          className="link"
          href="https://github.com/the-agent-guy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <div className="divider"></div>
        <h3>Rushing Headfirst into a Sci-Fi Future Filled With AI Agents</h3>
      </article>
      <img src="/hero.jpeg" className="md:w-[600px] w-[380px]" alt="AGI" />
      <div className="divider"></div>
    </div>
  );
}
