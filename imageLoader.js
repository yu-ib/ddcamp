/**
 * 주어진 이미지 폴더, 포맷, 파일 수 및 파일 타입을 기반으로 이미지 파일 경로의 배열을 반환합니다.
 * 예를 들어, imageFolderPath가 "assets/Body/", imageFormat이 "Body_", imageNum이 9, filetype이 ".png"인 경우:
 * 반환되는 배열은 ["assets/Body/Body_1.png", "assets/Body/Body_2.png", ... , "assets/Body/Body_9.png"]가 됩니다.
 * 
 * @param {string} imageFolderPath - 이미지 파일이 저장된 폴더의 경로
 * @param {string} imageFormat - 이미지 파일명의 공통 포맷
 * @param {number} imageNum - 폴더 내에 있는 이미지 파일의 총 개수
 * @param {string} filetype - 이미지 파일의 확장자 (예: ".png")
 * @return {Array<string>} 이미지 파일 경로를 포함한 배열
 */
function getImagePaths(imageFolderPath, imageFormat, imageNum, filetype) {
    const images = [];
    for (let i = 1; i <= imageNum; i++) {
        const imageFile = imageFormat + i + filetype;
        images.push(imageFolderPath + imageFile);
    }
    return images;
}

