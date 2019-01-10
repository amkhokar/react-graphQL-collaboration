import Link from "next/link";
import Styled from "styled-components";

const StyledAhmed = Styled.div`
  color: brown;
  background: gray;
  border: 2px solid blue;
`;
const Ahmed = () => (
  <div>
    <Link href="/brian">
      <a>Go to Brian !</a>
    </Link>
    <StyledAhmed>Brian is a fatty</StyledAhmed>
  </div>
);

export default Ahmed;
