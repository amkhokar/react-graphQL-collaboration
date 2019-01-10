import Link from "next/link";
import Styled from "styled-components";

const StyledJames = Styled.h1`
  font-size: 50px;
  color: orange;
  background: red;
`;
const James = () => (
  <div>
    <Link href="/ahmed">
      <a>Go to Ahmed!</a>
    </Link>
    <StyledJames>James is a fatty, Eat my cummies</StyledJames>
  </div>
);
export default James;
