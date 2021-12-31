import { Button, Result } from "antd";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  const BackHomeButton = (
    <Link to="/">
      <Button type="primary">Back Home</Button>
    </Link>
  );

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={BackHomeButton}
    />
  );
};

export default PageNotFound;
