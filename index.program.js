const quiz = [
  {
    food_name :"シュプナニ・サラート・ス・ヤグーラタン",
    hints :[
      "ロシア連邦",
      "ほうれん草",
      "７９kcal",
      "炒める"
      ],
    answer : "https://www.meiji.co.jp/meiji-shokuiku/worldculture/recipe/russia2/"
  }, {
    food_name :"ムサカ",
    hints :[
      "ギリシャ共和国",
      "なす",
      "５７０kcal",
      "オーブンで焼く"
      ],
    answer : "https://www.meiji.co.jp/meiji-shokuiku/worldculture/recipe/greece1/"
  }, {
    food_name :"ガンボ",
    hints :[
      "アメリカ合衆国",
      "えび",
      "２１６kcal",
      "煮る"
      ],
    answer : "https://www.meiji.co.jp/meiji-shokuiku/worldculture/recipe/america1/"
  }, {
    food_name :"ジョロフライス",
    hints :[
      "ガーナ共和国",
      "４８０Kcal",
      "トマトペースト",
      "焼く"
      ],
    answer : ""
  }, {
    food_name :"セビーチェ",
    hints :[
      "ペルー共和国",
      "刺身",
      "６７kcal",
      "和える"
      ],
    answer : "https://www.meiji.co.jp/meiji-shokuiku/worldculture/recipe/peru1/"
  }
];
const quizRandom = Math.floor( Math.random() * quiz.length);


// 下の問題文を配列にしたら上記のになる
// const food_name = "シュプナニ・サラート・ス・ヤグーラタン"
// const hints = [
//     "ロシア連邦",
//     "ほうれん草",
//     "７９kcal",
//     "炒める"
// ];
// const answer ="https://www.meiji.co.jp/meiji-shokuiku/worldculture/recipe/russia2/"



// 問題となる料理名を表示させる
const $button = document.getElementsByTagName("button");
document.getElementById("name").textContent = quiz[quizRandom].food_name;





// ヒントを出す
var hintsIndex = 0;
let hintsLength = $button.length;

while (hintsIndex < hintsLength) {
  $button[hintsIndex].hint = quiz[quizRandom].hints[hintsIndex];
  $button[hintsIndex].addEventListener("click", (event)=>{
        window.alert(event.target.textContent = event.target.hint);
    });
    hintsIndex++;
};

// 下記のコードをレファクタリングしたら上記のものになる。
// $button[0].addEventListener("click", ()=>{
//   window.alert($button[0].textContent = hints[0]);
// });
// $button[1].addEventListener("click", ()=>{
//   window.alert($button[1].textContent = hints[1]);
// });
// $button[2].addEventListener("click", ()=>{
//   window.alert($button[2].textContent = hints[2]);
// });
// $button[3].addEventListener("click", ()=>{
//   window.alert($button[3].textContent = hints[3]);
// });

// 答えのURLを表示させる
document.getElementById("food_url").addEventListener("click",()=>{
  window.alert(document.getElementsByTagName("food_url").textContent = quiz[quizRandom].answer);
});
