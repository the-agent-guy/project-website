export function Thesis() {
  return (
    <div className="">
      <article className="prose px-4">
        <h3>Thesis</h3>
        <li>
          This is my current thesis regarding AGI and AI Agents. This is subject
          to change.
        </li>
        <li>
          First, Agents will be the key to unlocking AGI. There is more to
          intelligence than neurons firing. For humans, having tools and varied
          output modalities played a huge role achieving our current status as
          the dominant intelligence.
        </li>
        <li>
          Vision is the most important modality. The work done here will rely on
          pure vision as much as possible. Language is important for reasoning,
          but when it comes to I/O with digital (or even physical) interfaces,
          vision generalizes better than anything else.
        </li>
        <li>
          On open sourcing; no real reason for it. I simply see no reason not
          to.
        </li>
        <li>
          The Agent Anthem: (
          <a
            className="link"
            href="https://open.spotify.com/track/6NwyNc9lrbaqj0lpYXlx5M?si=24a1b48d6c0a40e9"
            target="_blank"
            rel="noopener noreferrer"
          >
            credit
          </a>
          )
        </li>
      </article>
      <audio className="w-full px-16 pt-4" controls src="world.mp3"></audio>
      <div className="divider px-4"></div>
    </div>
  );
}
