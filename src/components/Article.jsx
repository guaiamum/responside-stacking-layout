import classnames from "classnames";

const Article = ({
  title,
  icon,
  iconColor = "blue",
  customClassNames,
  customDivClassNames,
  children
}) => (
  <article
    className={classnames("border border-blue-700 p-4", customClassNames)}
    id={title}
  >
    <h2 className="flex gap-1 items-center text-xl font-medium">
      {icon && <span className={`text-${iconColor}-500`}>{icon}</span>}
      {title}
    </h2>
    {children}
  </article>
);

export default Article;
