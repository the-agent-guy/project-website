export function AndroidAgent0() {
  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <article className="prose px-4">
        <h3>Android Agent 0</h3>
        <a
          className="link"
          href="https://github.com/the-agent-guy/android-agent-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <li>
          The first project will be a general-purpose vision-based Android
          Agent.
        </li>
        <li>
          Humans spend a lot of time and get a lot of work done on smartphones.
          Additionally, Android gives us constrained and well-defined action and
          state spaces in a robust sandboxed emulator environment easy for us to
          control programmatically.
        </li>
        <li>
          Deployment as an app is possible but is not an immediate concern.
          Testing will be carried out using adb.
        </li>
      </article>
      <img
        src="/android.png"
        className="md:w-[300px] w-[160px]"
        alt="Android"
      />
      <div className="divider px-4"></div>
    </div>
  );
}
