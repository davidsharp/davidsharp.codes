import FourOhFour from './404'

export default function ErrorPage(props: PageProps) {
  const error = props.error; // Contains the thrown Error or HTTPError
  if (error instanceof HttpError) {
    const status = error.status; // HTTP status code

    // Render a 404 not found page
    if (status === 404) {
      return <FourOhFour {...props}>;
    }
  }

  return <h1>Oh no...</h1>;
}
