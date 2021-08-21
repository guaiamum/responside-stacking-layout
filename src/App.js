import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>And I shuld be sticky on top!</h1>
      <main>
        <article>
          <h2>Description</h2>
          <p>I should be first always.</p>
        </article>
        <article>
          <h2>Details</h2>
          <p>I shold be on the side view. On bigger screens</p>
        </article>
        <article>
          <h2>Comments</h2>
          <p>I should always appear last.</p>
        </article>
      </main>
    </div>
  );
}
