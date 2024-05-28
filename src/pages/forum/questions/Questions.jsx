import { useSearchParams } from 'react-router-dom';
import Question from '../questionView/Question';

function Questions() {
  const [searchParams] = useSearchParams();
  const questionId = searchParams.get('view');
  if (questionId != null) {
    return (
      <div>
        <Question questionId={questionId} />
      </div>
    );
  }
  return (
    <div>
      <h1>Questions</h1>
    </div>
  );
}
export default Questions;
