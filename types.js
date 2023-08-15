/**
 * @typedef {Object} QuizOption
 * @property {number} [timer] - クイズのタイマー設定（秒）
 */
/**
 * @typedef {Object} Question
 * @property {"select" | "select-all" | "type-text"} answerType - 回答形式
 * @property {string} statement - 質問文
 * @property {string[]} [choices] - 選択肢（select/select-all の場合）
 * @property {string} correctAnswer - 正解の回答
 * @property {string[]} [correctAnswers] - 正解の回答（select-all の場合）
 */
/**
 * @typedef {Object} Quiz
 * @property {string} id - クイズのid
 * @property {string} title - クイズのタイトル
 * @property {string} description - クイズの説明
 * @property {string} length - 問題数
 * @property {QuizOption} options - クイズのオプション
 * @property {Object.<string, Question>} questions - クイズの質問
 */