import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="container mx-auto bg-gray-200 rounded-xl border-2 p-8 m-10">
      <p className="text-xl text-gray-700 font-bold mb-5">Error</p>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
