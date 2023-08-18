
/**
 * 수정 팁:
 * 1. 프로젝트의 루트 디렉터리에 'assets' 폴더를 찾을 수 있습니다. 이 폴더 안에 원하는 하위 폴더를 만들고 그곳에 이미지를 넣어주세요.
 * 2. 아래의 const 부분을 살펴보세요. 이미지 경로는 'assets' 폴더부터의 상대 경로로, 예를 들면 'assets/myFolder/myImage.jpg'와 같이 표현됩니다. 이미지 포맷은 `.jpg`, `.png` 등의 파일 확장자를 의미합니다. 전체 이미지 개수도 필요에 따라 수정하세요.
 * 3. 'face', 'body'라는 예제 변수명 대신, 나의 작품에 적합한 다른 변수명을 사용해도 됩니다. 예를 들어, 'hair', 'eye' 등으로 변경할 수 있습니다.
 */

// 파일 확장자 설정
const FILE_TYPE = ".png";

// Body 관련 이미지 파일 경로 및 포맷 설정
const BODY_IMAGE_FOLDER_PATH = "assets/Body/";
const BODY_IMAGE_FORMAT = "Body_"; // Body_1, Body_2, Body_3
const BODY_IMAGE_NUM = 3;

// Face 관련 이미지 파일 경로 및 포맷 설정
const FACE_IMAGE_FOLDER_PATH = "assets/Face/";
const FACE_IMAGE_FORMAT = "Face_";
const FACE_IMAGE_NUM = 3;

// Body와 Face의 이미지 경로를 저장할 배열
let bodyImages, faceImages;

// 현재 화면에 표시된 Body와 Face 이미지의 인덱스
let currentBodyImageIndex = 0, currentFaceImageIndex = 0;

/**
 * 초기 설정 함수.
 * - 이미지를 불러온다.
 * - 초기 이미지를 설정한다.
 * - 주요 이벤트 핸들러를 연결한다.
 */
function setup() {
    // 이미지 경로를 배열로 가져오기
    bodyImages = getImagePaths(BODY_IMAGE_FOLDER_PATH, BODY_IMAGE_FORMAT, BODY_IMAGE_NUM, FILE_TYPE);
    faceImages = getImagePaths(FACE_IMAGE_FOLDER_PATH, FACE_IMAGE_FORMAT, FACE_IMAGE_NUM, FILE_TYPE);
    
    // 로딩된 이미지의 수를 콘솔에 로그
    console.log(bodyImages.length);
    console.log(faceImages.length);

    // 초기 이미지를 웹 페이지에 설정
    document.getElementById("bodyImage").src = bodyImages[0];
    document.getElementById("faceImage").src = faceImages[0];

    // character part (face, body)의 변경을 감지하는 라디오 버튼에 이벤트 리스너 연결
    const characterPartRadios = document.querySelectorAll('input[name="characterPart"]');
    characterPartRadios.forEach(radio => radio.addEventListener("change", handleCharacterPartChange));

    // 이전/다음 버튼에 클릭 이벤트 리스너 연결
    document.getElementById("prevButton").addEventListener("click", () => handleButtonClick(-1));
    document.getElementById("nextButton").addEventListener("click", () => handleButtonClick(1));
}

// DOM 구조가 로드된 후 setup 함수 실행
document.addEventListener("DOMContentLoaded", setup);
