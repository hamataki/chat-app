//ファイルアップロードの表示を変える
$(document).ready(function () {
  $("#imgUpload").on("change", function (e) {
    $(this)
      .next()
      .text(
        e.target.files.length ? e.target.files[0].name : "今はどんな表情？？"
      );
  });
});
//画像のプレビュー
$(document).on("change", "#imgUpload", function () {
  const elem = this; //操作された要素を取得
  const fileReader = new FileReader(); //ファイルを読み取るオブジェクトを生成
  fileReader.readAsDataURL(elem.files[0]); //ファイルを読み取る
  fileReader.onload = function () {
    //ファイル読み取りが完了したら
    let imgTag = `<img src='${fileReader.result}'>`; //img要素を生成
    $("#preview").html(imgTag); //画像をプレビュー
  };
});

// $("#imgUpload").on("change", function (event) {
//   const file = event.target.files[0];
//   if (file) {
//     const reader = new FileReader();

//     // ファイル読み込みが完了したときの処理
//     reader.onload = function (e) {
//       const base64Image = e.target.result;
//       $("#preview").html(
//         `<img src="${base64Image}" alt="Image Preview" style="max-width: 100%; height: auto;">`
//       );
//     };

//     // ファイルをデータURLとして読み込む
//     reader.readAsDataURL(file);
//   }
// });
