import { useParams } from 'react-router-dom';
type Props = {};

const News = (props: Props) => {
  const params = useParams();
  return (
    <div className='page-style'>
      <h1>News {params.newid}</h1>
      <h1>test {params.test}</h1>
    </div>
  );
};

export default News;
