
const Article = ({ title, icon, iconColor = "blue", children }) => (
  <article className="min-h-50vh p-4" id={title}>
    <h2 className="inline-flex gap-1 items-center text-xl font-medium">
      {icon && <span className={`text-${iconColor}-500`}>{icon}</span>}
      {title}
    </h2>
    <div className="p-4">{children}</div>
  </article>
);

export default Article;