import stl from "./ArticleDescription.module.scss";

const ArticleDescription = ({ description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  nisi ut aliquip ex ea commodo consequat. ' }) => {

  const kitcut = (text, limit = 250) => {

    var description = text.trim();
    if (description.length <= limit) return description;
    var str = description.slice(0, limit);
    var a = str.split(" ");
    a.splice(a.length - 1, 1);
    str = a.join(" ");
    return str + "...";
  };

  return <p className={stl.text}>{kitcut(description)}</p>;
};

export default ArticleDescription;
