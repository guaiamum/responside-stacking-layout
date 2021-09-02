import { useState } from "react";
import { useContainerQuery } from "react-container-query";
import classnames from "classnames";

import Article from "./components/Article";
import { commIcon, questionIcon, infoIcon, paperPlane } from "./assets/icons";

const query = {
  "issue-desktop": {
    minWidth: 768
  }
};

export default function App() {
  const [params, containerRef] = useContainerQuery(query);

  const [comments, setComments] = useState(3);
  return (
    <section className="app-container flex bg-white md:overflow-hidden">
      <aside className="issue-list hidden md:block">Things on the side</aside>
      {/* flex-col so content overflows */}
      <main className="flex flex-col">
        <h1 className="sticky top-0 shadow-md bg-white p-10 text-center text-3xl">
          I should be sticky on top!
        </h1>
        <section
          ref={containerRef}
          className={classnames("grid issue md:overflow-y-auto", params)}
        >
          <Article title="Description" icon={infoIcon}>
            <strong>I should be first always.</strong>
            <p contenteditable="true">
              Aute nisi aute officia dolor aliqua quis anim. Esse ea mollit enim
              enim sint sit labore id minim dolor occaecat sunt irure excepteur.
              Magna deserunt fugiat et ex irure aute duis anim do qui esse
              ipsum. Reprehenderit nulla enim aliqua laboris voluptate aute
              quis. Do nisi anim est ut ipsum ipsum magna sunt id excepteur aute
              laborum aliquip tempor. Non quis tempor do laborum nulla eu dolore
              officia ad magna. Non voluptate sunt laboris qui duis commodo enim
              ad culpa.
            </p>
          </Article>
          <Article
            title="Details"
            icon={questionIcon}
            iconColor="gray"
            // customClassNames="overfoverflow-y-autolow-y-auto"
          >
            <p
              className="min-h-screen bg-gray-200 border border-gray-600"
              contenteditable="true"
            >
              <strong>
                I should be on the side view. Only bigger screens.
              </strong>
              Dolor pariatur in laborum ut labore laboris ex id excepteur
              incididunt. Laboris esse cillum sit ea ullamco amet dolore
              ullamco. Elit incididunt nostrud culpa proident est minim do ut
              duis fugiat id amet. Anim consectetur mollit aute do reprehenderit
              quis dolore tempor anim commodo dolor.
            </p>
          </Article>
          {/* Comments 👇🏼 */}
          <Article title="Comments" icon={commIcon} iconColor="yellow">
            <strong>I should always appear last.</strong>
            <ul className="flex flex-col gap-2">
              {Array(comments)
                .fill(null)
                .map((_, idx) => (
                  <li className="flex p-2 text-gray-700" contenteditable="true">
                    <div
                      className="h-10 w-10 rounded-full bg-indigo-400"
                      role="presentation"
                    ></div>
                    Comment {idx}
                  </li>
                ))}
            </ul>
          </Article>
          {/* Comment Input 👇🏼 */}
          <section className="flex items-center justify-between p-4 sticky bottom-0 bg-white border-t-2">
            <input
              type="text"
              name="comment"
              id="comment"
              placeholder="Comment..."
              className="w-full mr-2 p-1 border border-gray-300 rounded-md"
            />
            <button
              type="button"
              className="bg-indigo-400 rounded-full p-2"
              onClick={() => setComments(comments + 1)}
            >
              <span className="text-white">{paperPlane}</span>
            </button>
          </section>
        </section>
      </main>
    </section>
  );
}
