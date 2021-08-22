const Article = ({ title, children }) => (
  <article className="min-h-50vh p-4">
    <h2 className="text-xl font-medium">{title}</h2>
    <p>{children}</p>
  </article>
);

export default function App() {
  return (
    <div className="text-center">
      <h1 className="sticky top-0 shadow-md bg-white p-10 text-3xl">
        And I should be sticky on top!
      </h1>
      <main>
        <Article title="Description">
          <strong>I should be first always.</strong> Aute nisi aute officia
          dolor aliqua quis anim. Esse ea mollit enim enim sint sit labore id
          minim dolor occaecat sunt irure excepteur. Magna deserunt fugiat et ex
          irure aute duis anim do qui esse ipsum. Reprehenderit nulla enim
          aliqua laboris voluptate aute quis. Do nisi anim est ut ipsum ipsum
          magna sunt id excepteur aute laborum aliquip tempor. Non quis tempor
          do laborum nulla eu dolore officia ad magna. Non voluptate sunt
          laboris qui duis commodo enim ad culpa.
        </Article>
        <Article title="Details" description="">
          <strong>I should be on the side view.</strong> On bigger screens.
          Dolor pariatur in laborum ut labore laboris ex id excepteur
          incididunt. Laboris esse cillum sit ea ullamco amet dolore ullamco.
          Elit incididunt nostrud culpa proident est minim do ut duis fugiat id
          amet. Anim consectetur mollit aute do reprehenderit quis dolore tempor
          anim commodo dolor.
        </Article>
        <Article title="Comments">
          <strong>I should always appear last.</strong> Eu laborum voluptate
          eiusmod non eu culpa irure eiusmod minim consectetur. Quis quis
          incididunt cillum laboris nulla amet sint exercitation. Amet deserunt
          occaecat adipisicing occaecat nostrud exercitation cillum non. Ut
          tempor aute eu cupidatat reprehenderit. Et cillum laboris culpa esse
          qui eu ut sunt consectetur esse ex officia. Exercitation sunt nisi id
          duis ullamco pariatur et commodo sit. Cillum et mollit sit laboris
          cillum.
        </Article>
      </main>
    </div>
  );
}
