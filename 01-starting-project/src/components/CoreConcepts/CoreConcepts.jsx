import "./CoreConcepts.css";

// props를 사용한 예시
export default function CoreConcepts(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

// 구조분해를 사용한 예시
// function CoreConcepts({ image, title, description }) {
//   return (
//     <li>
//       <img src={image} alt={title} />
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </li>
//   );
// }