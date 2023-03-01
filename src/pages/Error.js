import MainNavigation from "./../components/MainNavigation";
import classes from "./Error.module.css";

const ErrorPage = () => {
  return (
    <>
      <MainNavigation />
      <main className={classes.content}>
        <h1>An error occured!</h1>
        <p>Could not find this page.</p>
      </main>
    </>
  );
};

export default ErrorPage;
