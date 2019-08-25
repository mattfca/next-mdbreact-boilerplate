import { useRouter } from 'next/router';

export default function City(props) {
  const router = useRouter();

  return (
    <React.Fragment>
      <h1>{router.query.city}</h1>
    </React.Fragment>
  );
}