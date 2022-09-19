// SDK를 초기화 합니다. 사용할 앱의 JavaScript 키를 설정해 주세요.
Kakao.init("1617ad49c4b14378423336056c08b2b4");

// SDK 초기화 여부를 판단합니다.
console.log(Kakao.isInitialized());

function kakaoShare() {
  Kakao.Link.sendDefault({
    objectType: "feed",
    content: {
      title: "영혼의 정원",
      description: "당신의 하루는 어떤가요?",
      imageUrl: "img/영혼의 정원.png",
      link: {
        mobileWebUrl: "https://jychan99.github.io/Gardening-the-Soul/",
        webUrl: "https://jychan99.github.io/Gardening-the-Soul/",
      },
    },
    buttons: [
      {
        title: "웹으로 보기",
        link: {
          mobileWebUrl: "https://jychan99.github.io/Gardening-the-Soul/",
          webUrl: "https://jychan99.github.io/Gardening-the-Soul/",
        },
      },
    ],
    // 카카오톡 미설치 시 카카오톡 설치 경로이동
    installTalk: true,
  });
}
