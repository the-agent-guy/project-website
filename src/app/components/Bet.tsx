export function Bet() {
  return (
    <div className="flex flex-col space-y-12 h-full justify-center items-center">
      <article className="prose px-4">
        <h3>The Bet</h3>
        <li>
          On June 4 2024 I met a bet for $1000 that we would have AGI within 2
          years.
        </li>
        <li>I started this project to help speed things along.</li>
        <li>
          The bet imposes no conditions on the class of models or architectures
          that will lead to AGI.
        </li>
        <li>All projects listed below are in service of this goal.</li>
      </article>
      <div className="w-[380px] md:w-[600px] px-4 flex items-center justify-evenly">
        <img src="/space.jpg" className="w-[100px] rounded-full" alt="AGI" />
        <article className="prose">
          <h3>{`"AGI in 2 Years."`}</h3>
          <h4>- The Agent Guy, June 4 2024</h4>
        </article>
      </div>
      <div className="divider px-4"></div>
    </div>
  );
}
