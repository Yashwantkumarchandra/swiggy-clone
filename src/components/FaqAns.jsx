export const FaqAns = ({ title, children, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex(!showItems);
  };

  return (
    <div className="card align-items-center">
      <h3 onClick={handleClick} className="card-title">
        {title}
      </h3>
      {showItems && <div className="card-text">{children}</div>}
    </div>
  );
};
