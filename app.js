const bank = {
  python: [
    ['Easy', 'Which keyword creates a function in Python?', ['func', 'def', 'function', 'make'], 1, 'Python uses <b>def</b> to begin a function definition.'],
    ['Easy', 'What does len([4, 8, 12]) return?', ['2', '3', '4', '24'], 1, '<b>len()</b> counts items in a sequence; the list has three.'],
    ['Easy', 'Which value represents “nothing” in Python?', ['null', 'undefined', 'None', 'empty'], 2, '<b>None</b> is Python’s special value for absence.'],
    ['Easy', 'Which brackets create a Python list?', ['( )', '{ }', '[ ]', '< >'], 2, 'Square brackets <b>[ ]</b> create an ordered, changeable list.'],
    ['Easy', 'What is 2 ** 3?', ['6', '8', '9', '5'], 1, '<b>**</b> raises to a power: 2 × 2 × 2 = 8.'],
    ['Medium', 'What does [x*2 for x in range(3)] produce?', ['[0, 2, 4]', '[2, 4, 6]', '[0, 1, 2]', '[1, 2, 3]'], 0, 'range(3) yields 0, 1, 2; doubling produces <b>[0, 2, 4]</b>.'],
    ['Medium', 'What does a Python dictionary store?', ['Only numbers', 'Key–value pairs', 'Unique values', 'Characters'], 1, 'A <b>dict</b> maps keys to values.'],
    ['Medium', 'Why use with open(...) as f?', ['Opens faster', 'Closes file automatically', 'Encrypts it', 'Reads JSON'], 1, 'The <b>with</b> statement closes the file automatically.'],
    ['Medium', 'Which method adds one item to a list’s end?', ['push()', 'insert_end()', 'append()', 'add()'], 2, '<b>append(item)</b> adds an item to a list’s end.'],
    ['Hard', 'What is a closure in Python?', ['A function retaining its enclosing scope', 'A class without methods', 'A closed file', 'A function without arguments'], 0, 'A <b>closure</b> remembers variables from its enclosing scope.'],
    ['Hard', 'What does __slots__ commonly change?', ['Inheritance order', 'Instance attribute storage', 'Method order', 'Equality'], 1, '<b>__slots__</b> declares instance attributes and can avoid a per-instance __dict__.'],
    ['Hard', 'Why can a mutable default argument surprise you?', ['It is recreated each call', 'It is evaluated once at definition and reused', 'It is inaccessible', 'It becomes a tuple'], 1, 'Defaults are evaluated <b>once when the function is defined</b>.']
  ],
  'machine learning': [
    ['Easy', 'What is the main goal of supervised learning?', ['Find patterns without labels', 'Learn from examples with known answers', 'Compress data', 'Generate examples'], 1, 'Supervised examples include labels with the expected answer.'],
    ['Easy', 'Which task predicts a category like spam or not spam?', ['Classification', 'Regression', 'Clustering', 'Compression'], 0, '<b>Classification</b> assigns examples to discrete categories.'],
    ['Easy', 'Why keep a test set?', ['Speed up training', 'Evaluate on unseen examples', 'Add training labels', 'Name the model'], 1, 'A <b>test set</b> checks how well a model generalizes to unseen data.'],
    ['Easy', 'Which is a regression task?', ['Detect a cat in a photo', 'Predict tomorrow’s temperature', 'Sort email', 'Group songs'], 1, '<b>Regression</b> predicts a continuous numeric quantity.'],
    ['Medium', 'What is overfitting?', ['Learns training details but performs poorly on new data', 'Trains too slowly', 'Has too few features', 'Uses no labels'], 0, 'An <b>overfit</b> model learns noise specific to training examples.'],
    ['Medium', 'What does precision measure?', ['Predicted positives that are truly positive', 'All samples correct', 'Actual positives found', 'Average value'], 0, '<b>Precision = true positives / predicted positives.</b>'],
    ['Medium', 'What is a feature in a dataset?', ['Input variable used by a model', 'Final prediction', 'Error metric', 'Computer'], 0, 'A <b>feature</b> is an input attribute that helps a model predict.'],
    ['Medium', 'What does a high learning rate tend to do?', ['Make parameter updates larger', 'Increase labels', 'Prevent all overfitting', 'Shrink data'], 0, 'The <b>learning rate</b> sets update size; a high value can overshoot.'],
    ['Hard', 'What is data leakage?', ['Unavailable info influences training or evaluation', 'A corrupted file', 'Many model parameters', 'Shuffled data'], 0, '<b>Data leakage</b> uses information unavailable at prediction time.'],
    ['Hard', 'Why can accuracy mislead on imbalanced classes?', ['Majority guesses may miss rare cases', 'It ignores true negatives', 'It changes after shuffling', 'It needs a numeric target'], 0, 'Guessing the common class may give high <b>accuracy</b> yet miss rare cases.'],
    ['Hard', 'What is L1 regularization for?', ['Encouraging sparse coefficients', 'Increasing model depth', 'Normalizing test labels', 'Removing validation'], 0, 'An <b>L1 penalty</b> can drive some weights to zero.'],
    ['Hard', 'What does cross-validation estimate?', ['Performance across data splits', 'Exact future error', 'GPU speed', 'Feature count'], 0, '<b>Cross-validation</b> repeats training and evaluation across folds.']
  ],
  'generative ai': [
    ['Easy', 'What does a generative AI model primarily do?', ['Creates content based on learned patterns', 'Sorts files only', 'Repairs hardware', 'Stores exact copies'], 0, 'Generative AI can produce new text, images, audio, and code.'],
    ['Easy', 'What is a prompt?', ['Input or instruction given to a model', 'Training hardware', 'Image file', 'Model weights'], 0, 'A <b>prompt</b> guides a model’s response.'],
    ['Easy', 'What is an AI hallucination?', ['Fluent but made-up or inaccurate claim', 'Slow response', 'Refusal', 'Duplicate prompt'], 0, 'A <b>hallucination</b> sounds plausible but is false or unsupported.'],
    ['Easy', 'What is a token in a language model?', ['A chunk of text the model processes', 'Password', 'Internet speed', 'Database'], 0, 'A <b>token</b> is a piece of text, often a word or word part.'],
    ['Medium', 'What does retrieval-augmented generation add?', ['Relevant retrieved info to ground an answer', 'A new language', 'A chip', 'Fixed answers'], 0, '<b>RAG</b> retrieves information and supplies it as generation context.'],
    ['Medium', 'What does higher temperature usually change?', ['Makes token choices more varied', 'Shortens every answer', 'Adds training facts', 'Disables the model'], 0, 'Higher <b>temperature</b> usually makes next-token choices more varied.'],
    ['Medium', 'What is a context window?', ['Text a model can handle at once', 'Browser window', 'Time between updates', 'Private folder'], 0, 'A <b>context window</b> is the token limit a model can consider and produce.'],
    ['Medium', 'What is fine-tuning?', ['Further training on narrower data or task', 'Writing only a prompt', 'Shrinking a file', 'Searching a database'], 0, '<b>Fine-tuning</b> adapts a pretrained model with task-specific examples.'],
    ['Hard', 'Why can next-token training produce confident falsehoods?', ['It rewards plausible continuation, not verified truth', 'It verifies every claim', 'Tokens lack meaning', 'Prompts are discarded'], 0, 'Token prediction does not independently <b>verify facts</b>.'],
    ['Hard', 'What is prompt injection?', ['Untrusted text tries to override instructions', 'A typo', 'Too many tokens', 'Compressed training data'], 0, '<b>Prompt injection</b> manipulates instructions, often in tool-using systems.'],
    ['Hard', 'Why use constrained decoding for structured output?', ['Restricts choices to a format or grammar', 'Changes training data', 'Adds citations', 'Guarantees correctness'], 0, 'It can enforce <b>syntax</b>, but content may still be wrong.'],
    ['Hard', 'What is a key risk when AI can call tools?', ['Unintended actions or data exposure', 'Loses context', 'Cannot write text', 'Tools are free'], 0, 'Tool-enabled models can affect systems; validate <b>permissions and actions</b>.']
  ],
  javascript: [
    ['Easy', 'Which keyword declares a reassignable block-scoped variable?', ['var', 'let', 'const', 'static'], 1, '<b>let</b> declares a variable that can be reassigned in its block.'],
    ['Easy', 'What does typeof "hello" return?', ['text', 'string', 'word', 'object'], 1, 'JavaScript <b>typeof</b> returns "string" for text.'],
    ['Easy', 'Which symbol begins a single-line comment?', ['#', '//', '<!--', '**'], 1, 'JavaScript uses <b>//</b> for a single-line comment.'],
    ['Easy', 'Which method adds an item to an array’s end?', ['append()', 'push()', 'insert()', 'addLast()'], 1, '<b>push()</b> adds items to the end of an array.'],
    ['Medium', 'What does === check?', ['Value and type equality', 'Matching types only', 'Which is larger', 'Case-insensitive strings'], 0, 'Strict equality <b>===</b> compares values without type coercion.'],
    ['Medium', 'What does Promise.all do?', ['Waits for all to fulfill or one to reject', 'Runs promises one by one', 'Converts callbacks', 'Retries failures'], 0, '<b>Promise.all</b> fulfills when all promises fulfill, and rejects if one rejects.'],
    ['Medium', 'Which array method transforms each element into a new array?', ['filter()', 'forEach()', 'map()', 'find()'], 2, '<b>map()</b> returns transformed results in a new array.'],
    ['Medium', 'What does ?. do?', ['Safely accesses a property if receiver may be nullish', 'Checks a number', 'Declares private property', 'Creates a promise'], 0, '<b>Optional chaining</b> short-circuits if the receiver is null or undefined.'],
    ['Hard', 'What is a JavaScript microtask?', ['Queued job such as a promise reaction run before next task', 'Small DOM element', 'Synchronous request', 'Worker thread'], 0, '<b>Microtasks</b> include promise reactions and run before the next task.'],
    ['Hard', 'What is a race condition in async code?', ['Result depends on which concurrent operation finishes first', 'Loop with no exit', 'Variable used twice', 'Immediate promise'], 0, 'A <b>race condition</b> occurs when asynchronous timing changes the result.'],
    ['Hard', 'Why can Object.freeze be shallow?', ['Nested objects stay mutable unless frozen separately', 'Only works on arrays', 'Changes primitives', 'Removes all properties'], 0, '<b>Object.freeze()</b> does not recursively freeze nested objects.'],
    ['Hard', 'What differs between for...in and for...of?', ['for...in iterates keys; for...of iterates values', 'for...in works on strings only', 'for...of returns keys', 'Nothing'], 0, 'Use <b>for...in</b> for keys and <b>for...of</b> for iterable values.']
  ]
};

const generic = [
  ['What is a useful way to learn {topic}?', ['Understand core ideas and apply them', 'Memorize without understanding', 'Avoid questions', 'Replace other subjects'], 0, 'Understanding means learning core ideas and applying them.'],
  ['How can you check your understanding of {topic}?', ['Explain an idea in your own words', 'Repeat a heading', 'Skip examples', 'Count pages'], 0, 'Explaining an idea in your own words is a useful comprehension check.'],
  ['When two explanations of {topic} disagree, what helps?', ['Compare evidence and consult a reliable source', 'Choose the longer one', 'Assume both are correct', 'Stop learning'], 0, 'Compare reasoning and source quality to resolve conflicting explanations.'],
  ['How should you evaluate a claim about {topic}?', ['Check its assumptions and evidence', 'Accept confidence', 'Ignore exceptions', 'Use popularity only'], 0, 'Check the assumptions and evidence behind the claim.'],
  ['What makes a strong explanation of {topic}?', ['It states how it works and its limits', 'It uses the most jargon', 'It has no examples', 'It dismisses exceptions'], 0, 'A strong explanation describes how an idea works and where it may not apply.']
];

let level = 'Easy';
let count = 5;
let questions = [];
let answers = [];
let current = 0;
let history = JSON.parse(localStorage.getItem('curio-history') || '[]');
const $ = selector => document.querySelector(selector);

function esc(text) {
  return String(text).replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[char]));
}

function toast(message) {
  $('#toast').textContent = message;
  $('#toast').classList.add('show');
  setTimeout(() => $('#toast').classList.remove('show'), 1800);
}

document.querySelectorAll('.chip').forEach(button => {
  button.onclick = () => $('#topic').value = button.dataset.topic;
});

document.querySelectorAll('.level').forEach(button => {
  button.onclick = () => {
    document.querySelectorAll('.level').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    level = button.dataset.level;
  };
});

$('#minus').onclick = () => {
  count = Math.max(3, count - 1);
  $('#count').textContent = count;
};

$('#plus').onclick = () => {
  count = Math.min(10, count + 1);
  $('#count').textContent = count;
};

function start() {
  const topic = $('#topic').value.trim();
  if (!topic) {
    toast('Add a topic to get started');
    $('#topic').focus();
    return;
  }

  const key = topic.toLowerCase().replace(/[^a-z0-9 ]/g, '').trim();
  let pool = (bank[key] || []).filter(question => question[0] === level);

  if (!pool.length) {
    pool = generic.map(question => [
      level,
      question[0].replaceAll('{topic}', topic),
      question[1],
      question[2],
      question[3]
    ]);
  }

  questions = Array.from({ length: count }, (_, i) => pool[i % pool.length].slice());
  questions.forEach(question => question[1] = question[1].replaceAll('{topic}', topic));
  answers = Array(count).fill(null);
  current = 0;
  $('#builder').classList.add('hidden');
  $('#quiz').classList.remove('hidden');
  render();
  scrollTo({ top: 0, behavior: 'smooth' });
}

$('#generate').onclick = start;
$('#topic').onkeydown = event => {
  if (event.key === 'Enter') start();
};

function render() {
  const question = questions[current];
  const selected = answers[current];
  const percent = Math.round(current / questions.length * 100);

  $('#quiz').innerHTML =
    '<div class="quiztop"><span>✳ &nbsp;' + esc($('#topic').value) + ' · ' + level + '</span><button id="exit">✕ &nbsp;Exit quiz</button></div>' +
    '<div class="progress-meta"><span>QUESTION ' + String(current + 1).padStart(2, '0') + ' OF ' + String(questions.length).padStart(2, '0') + '</span><span>' + percent + '% complete</span></div>' +
    '<div class="track"><div class="fill" style="width:' + percent + '%"></div></div>' +
    '<div class="kicker">Take your time</div><h2 class="question">' + question[1] + '</h2>' +
    '<div class="answers">' + question[2].map((answer, index) =>
      '<button class="answer ' + (selected !== null ? (index === question[3] ? 'correct' : index === selected ? 'wrong' : '') : '') + '" data-i="' + index + '" ' +
      (selected !== null ? 'disabled' : '') + '><i>' + String.fromCharCode(65 + index) + '</i>' + answer + '</button>'
    ).join('') + '</div>' +
    '<div class="explanation" style="display:' + (selected !== null ? 'block' : 'none') + '"><b>' +
    (selected === question[3] ? 'That’s right!' : 'Not quite.') + '</b> ' + question[4] + '</div>' +
    '<div class="quizbottom"><span class="hint">' + (selected === null ? 'Choose the best answer to continue' : 'A little learning goes a long way ✨') +
    '</span><button id="next" class="primary" ' + (selected === null ? 'disabled' : '') + '>' +
    (current === questions.length - 1 ? 'See my score' : 'Next question') + ' →</button></div>';

  document.querySelectorAll('.answer:not(:disabled)').forEach(button => {
    button.onclick = () => {
      answers[current] = Number(button.dataset.i);
      render();
    };
  });

  $('#next').onclick = () => {
    if (current < questions.length - 1) {
      current++;
      render();
    } else {
      result();
    }
  };

  $('#exit').onclick = exit;
}

function result() {
  const score = answers.reduce((total, answer, index) => total + (answer === questions[index][3] ? 1 : 0), 0);
  const percent = Math.round(score / count * 100);
  const topic = $('#topic').value;

  $('#quiz').innerHTML =
    '<div class="result"><div class="circle"><b>' + percent + '%</b><small>' + score + ' / ' + count + ' CORRECT</small></div>' +
    '<h2>' + (percent === 100 ? 'Beautifully done.' : percent >= 60 ? 'Look at you, learning.' : 'Every try teaches you something.') + '</h2>' +
    '<p>' + (percent >= 80 ? 'You’ve got a lovely grasp of this. Keep the momentum going.' : 'Review what surprised you, then take another run at it.') + '</p>' +
    '<div class="actions"><button id="again" class="primary">Try another quiz →</button><button id="retry" class="secondary">Retry these questions</button></div>' +
    '<div class="review">' + questions.map((question, index) =>
      '<article><b>' + (index + 1) + '. ' + question[1] + '</b><span>' +
      (answers[index] === question[3] ? '✓ Correct' : 'Your answer: ' + esc(question[2][answers[index]]) + ' · Correct: ' + esc(question[2][question[3]])) +
      '<br>' + question[4] + '</span></article>'
    ).join('') + '</div></div>';

  $('#again').onclick = exit;
  $('#retry').onclick = () => {
    answers = Array(count).fill(null);
    current = 0;
    render();
    scrollTo({ top: 0, behavior: 'smooth' });
  };

  history.unshift({
    topic,
    score,
    total: count,
    date: new Date().toLocaleDateString(undefined, { weekday: 'long' })
  });
  history = history.slice(0, 8);
  localStorage.setItem('curio-history', JSON.stringify(history));
  updateHistory();
}

function exit() {
  $('#quiz').classList.add('hidden');
  $('#builder').classList.remove('hidden');
  scrollTo({ top: 0, behavior: 'smooth' });
}

function updateHistory() {
  if (!history.length) return;

  $('#recent-list').innerHTML = history.slice(0, 3).map(item =>
    '<article class="recent-item"><div class="recent-icon">' + esc(item.topic.slice(0, 2)) +
    '</div><div><b>' + esc(item.topic) + '</b><small>' + esc(item.date) + ' · ' +
    item.score + ' of ' + item.total + ' correct</small></div></article>'
  ).join('');

  $('#stat-quizzes').textContent = history.length + 4;
  $('#stat-score').textContent = Math.round(
    history.reduce((total, item) => total + item.score / item.total, 0) / history.length * 100
  ) + '%';
}

updateHistory();