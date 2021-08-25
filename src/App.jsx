const infoIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
      clipRule="evenodd"
    />
  </svg>
);

const commIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
);

const questionIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fill-rule="evenodd"
      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
      clip-rule="evenodd"
    />
  </svg>
);

// *************

const Article = ({ title, icon, iconColor = "blue", children }) => (
  <article className="min-h-50vh p-4" id={title}>
    <h2 className="inline-flex gap-1 items-center text-xl font-medium">
      {icon && <span className={`text-${iconColor}-500`}>{icon}</span>}
      {title}
    </h2>
    <div className="p-4">{children}</div>
  </article>
);

export default function App() {
  return (
    <main className="">
      <h1 className="sticky top-0 shadow-md bg-white p-10 text-center text-3xl">
        I should be sticky on top!
      </h1>
      <div className="grid issue">
        <Article title="Description" icon={infoIcon}>
          <strong>I should be first always.</strong> Aute nisi aute officia
          dolor aliqua quis anim. Esse ea mollit enim enim sint sit labore id
          minim dolor occaecat sunt irure excepteur. Magna deserunt fugiat et ex
          irure aute duis anim do qui esse ipsum. Reprehenderit nulla enim
          aliqua laboris voluptate aute quis. Do nisi anim est ut ipsum ipsum
          magna sunt id excepteur aute laborum aliquip tempor. Non quis tempor
          do laborum nulla eu dolore officia ad magna. Non voluptate sunt
          laboris qui duis commodo enim ad culpa.
        </Article>
        <Article title="Details" icon={questionIcon} iconColor="gray">
          <p className="min-h-screen bg-gray-200">
            <strong>I should be on the side view. Only bigger screens.</strong>
            Dolor pariatur in laborum ut labore laboris ex id excepteur
            incididunt. Laboris esse cillum sit ea ullamco amet dolore ullamco.
            Elit incididunt nostrud culpa proident est minim do ut duis fugiat
            id amet. Anim consectetur mollit aute do reprehenderit quis dolore
            tempor anim commodo dolor.
          </p>
        </Article>
        <Article title="Comments" icon={commIcon} iconColor="yellow">
          <strong>I should always appear last.</strong>
          <ul className="flex flex-col gap-2">
            {Array(3)
              .fill(null)
              .map((_, idx) => (
                <li className="p-2 h-16 border-2 rounded-md">{idx}</li>
              ))}
          </ul>
        </Article>
      </div>
    </main>
  );
}
