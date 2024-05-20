const PropsChild = (props) => {
  console.log(props);

  /* 부모컴포넌트에서 넘어온 값에 대해서 초기설정 또는 오류처리 잘하기 */
  const { username, userid, friends, info } = props;

  const obj = { name: "신짱구", info: { age: 5, friends: [1, 2] } };

  const test = obj.info.age2?.age || "123";
  console.log(obj.info.age2?.age);
  console.log(test);

  const userFriends = friends || [];
  console.log(userFriends);

  return (
    <div style={{ width: "200px", height: "200px", border: "1px solid" }}>
      <p>옵셔널체이닝 : {obj.info?.age2?.age}</p>
      <p>
        사용자 이름/나이 : {username} {info.age}
      </p>
      <p>사용자 아이디 : {userid}</p>
      <p>
        친구목록 :
        {/* map을 돌리기 전에 해당 값이 배열로 들어올 것이라는 확신이 없을 때 꼭 논리연산자로 오류방지 */}
        {friends &&
          friends.map((v, i) => {
            return <span key={i}>{v} </span>;
          })}
        ;
      </p>
    </div>
  );
};
export default PropsChild;
