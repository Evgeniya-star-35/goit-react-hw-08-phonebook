import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
export const BtnSubmit = () => {
  return (
    <>
      {/* <Button variant="outline-info" size="sm">
        Sign in
      </Button> */}
      <Button as="input" type="submit" value="Sign in" size="sm" />
    </>
  );
};
