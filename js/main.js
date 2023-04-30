// jsを記述する際はここに記載していく
$('a[href*="#"]').click(function () {
  //全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
  var elmHash = $(this).attr("href"); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
  var pos = $(elmHash).offset().top - 80; //idの上部の距離を取得 -80でヘッダー部分を除いた
  $("body,html").animate({ scrollTop: pos }, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
  return false;
});

//https://coco-factory.jp/ugokuweb/jscss/
// 動きのきっかけの起点となるアニメーションの名前を定義
function fadeAnime() {
  // ふわっ
  $(".fadeUpTrigger").each(function () {
    //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top - 50; //要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("fadeUp"); // 画面内に入ったらfadeUpというクラス名を追記
    }
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  fadeAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on("load", function () {
  fadeAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面が読み込まれたらすぐに動かしたい場合の記述

//https://qiita.com/PikachuPunch/items/ca68f457cfecb32b6eda
//参考書籍あり
var ctx = document.getElementById("myChart");
var myDoughnutChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["満足", "不満", "退学"],
    datasets: [
      {
        data: [95, 3, 2],
        backgroundColor: ["#fc2", "#c7e", "#f66"],
      },
    ],
  },
  options: {
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          return (
            data.labels[tooltipItem.index] +
            ": " +
            data.datasets[0].data[tooltipItem.index] +
            " %"
          ); //ここで単位を付けます
        },
      },
    },
  },
});

//   https://coco-factory.jp/ugokuweb/move01/8-2-1/

// $(document).ready(function () {
//   $(".slider").bxSlider({
//     auto: true,
//     pause: 5000,
//     controls: true,
//   });
// });
// https://toretama.jp/automatic-slideshow-image.html
