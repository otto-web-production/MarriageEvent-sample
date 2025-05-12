//wowjs
new WOW().init();


jQuery('a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    const targetId = jQuery(this).attr('href');
    const $target = jQuery(targetId);
    const $container = jQuery('.homepage');
    const offset = 30; // 上に空けたい余白

    if ($target.length) {
        // スクロール対象要素内での相対位置を取得
        const targetTop = $target.offset().top - $container.offset().top + $container.scrollTop() - offset;

        $container.animate({ scrollTop: targetTop }, 400);
    }
});


//アコーディオンメニューFAQ
jQuery(document).ready(function () {
    // 初期状態ですべての回答を非表示
    jQuery('.third-answer').hide();
  
    // ボタンをクリックしたら開閉
    jQuery('.third-question').on('click', function () {
      var $answer = jQuery(this).next('.third-answer');
  
      // 他を閉じる場合はこちらのコメントアウトを外す
      // jQuery('.third-answer').not($answer).slideUp();
  
      // 該当の答えを開閉
      $answer.slideToggle(300);
    });
  });