const PropsChild = (props) => {
  // console.log(props);
  const { parent, test } = props;

  return (
    <div style={{ width: "200px", height: "200px", border: "1px solid" }}>
      <p>내가 {parent}자식임</p>
    </div>
  );
};
export default PropsChild;
