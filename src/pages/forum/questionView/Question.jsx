import AddComment from '@/components/forum/AddComment';
import AskQuestionButton from '../askQuestion/AskQuestionButton';
import QuestionContent from './QuestionContent';

export default function Question({ questionId }) {
  const content = `<p>If I submit a build to Google play for internal testing, the automated fails the build with the following error :- java.lang.RuntimeException: Unable to start activity android.app.Fragment$InstantiationException: Unable to instantiate fragment androidx.lifecycle.u: could not find Fragment constructor, this only occurs when build with Android studio Jellyfish, and not the previous version Iguana. My App does not use fragments. Any suggestions welcome. Thanks Jeff</p>

  <p>Build app with Android studio Iguana, and upload to Google play store for internal testing, and pre launch report found no Crashes or ANR's. Build App with Android Studio Jellyfish, and I get 3 issues detected on testing, one of them being main activity not starting. "java.lang.RuntimeException: Unable to start activity ComponentInfo{xx.yy.zz.zz/xx.yy.zz.zz.MainActivity}: android.app.Fragment$InstantiationException: Unable to instantiate fragment androidx.lifecycle.u: could not find Fragment constructor" The app builds and compiles fine on my MacBook M1, I don't use fragments for UI. Any ideas on this issue, or how to replicate?</p>`;
  const tags = ['java', 'c++', 'sql', 'python'];
  return (
    <div className="mt-3 mx-4">
      <div className="space-y-4">
        <div className="text-2xl text-start">
          How to avoid loading the full content when i try to get information
          from blogger post?
        </div>
        <div className="flex flex-row space-x-4 text-sm">
          <div className="text-gray-700">
            Asked <span className="font-semibold text-primary">today</span>
          </div>
          <div className="text-gray-700">
            Modified <span className="font-semibold text-primary">today</span>
          </div>
          <div className="text-gray-700">
            Viewed <span className="font-semibold text-primary">9 times</span>
          </div>
          <div className="flex flex-grow" />
          <div className="mt-[-10px]">
            <AskQuestionButton />
          </div>
        </div>
        <hr />
      </div>
      <QuestionContent tags={tags} content={content} />
      <div className="pt-6 space-y-4">
        <div className="text-lg text-left">6 Answers</div>
        <hr />
        <QuestionContent tags={tags} content={content} />
        <hr />
        <QuestionContent tags={tags} content={content} />
        <hr />
        <QuestionContent tags={tags} content={content} />
        <hr />
        <QuestionContent tags={tags} content={content} />
      </div>
      <div className="text-left pt-6 mb-6">
        <div className="text-lg">Your Answer</div>
        <AddComment />
      </div>
    </div>
  );
}
