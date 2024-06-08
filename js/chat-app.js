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