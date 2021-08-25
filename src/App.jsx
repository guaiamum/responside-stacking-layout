import Article from "./components/Article";
import { commIcon, questionIcon, infoIcon } from "./assets/icons";

// import ButtonRed from "./components/Button/ButtonRed";
// import ButtonGreen from "./components/Button/ButtonGreen";
import Button from "./components/Button";

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
          {/* <ButtonRed text="I'm red!" /> */}
          {/* <ButtonGreen text="I'm green!" /> */}
          <Button color="Red" text="I'm red!" />
          <Button color="Green" text="I'm green!" />
        </Article>
        <Article title="Details" icon={questionIcon} iconColor="gray">
          <p className="min-h-screen bg-gray-200">
            <strong>I should be on the side view. Only bigger screens.</strong>
            Dolor pariatur in laborum ut labore laboris ex id excepteur
            incididunt. Laboris esse cillum sit ea ullamco amet dolore ullamco.
            Elit incididunt nostrud culpa proident est minim do ut duis fugiat
            id amet. Anim consectetur mollit aute do reprehenderit quis dolore
            tempor anim commodo dolor.
            {/* <ButtonRed text="I'm red!" /> */}
            {/* <ButtonGreen text="I'm green!" /> */}
            <Button color="Red" text="I'm red!" />
            <Button color="Green" text="I'm green!" />
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
          {/* <ButtonRed text="I'm red!" /> */}
          {/* <ButtonGreen text="I'm green!" /> */}
          <Button color="Red" text="I'm red!" />
          <Button color="Green" text="I'm green!" />
        </Article>
      </div>
    </main>
  );
}
