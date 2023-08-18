
// =====================
// 이벤트 핸들러
// =====================

/**  
 *  사용자가 선택한 캐릭터 부분(얼굴 또는 몸체)을 식별하는 이벤트 핸들러 함수
 *  
 *  이벤트: 라디오 버튼의 상태 변경 
 *  목적: 사용자가 어느 부분(얼굴 또는 몸체)을 선택했는지 식별하기
 *  
 */
function handleCharacterPartChange() {
    // 'this'는 현재 이벤트가 발생한 라디오 버튼을 참조하고,
    // 해당 버튼의 value 값을 이용해 어느 부분(얼굴, 몸체)이 선택되었는지 알아냅니다.
    const selectedPart = this.value;
     // TODO: 현재 'selectedPart' 값을 추출하는 것 외에 별다른 로직이 없습니다.
    // 향후에는 선택된 부분에 따른 추가적인 동작이나 처리를 이곳에 구현할 수 있습니다.
    // 예를 들면, 선택된 부분을 강조하는 등의 기능이 추가될 수 있습니다.
}


/**  
 *  이전< 또는 >다음 버튼을 클릭할 때 이미지 변경을 처리하는 이벤트 핸들러 함수
 *  
 *  이벤트: 버튼 클릭 
 *  목적: 선택된 부분의 이미지를 (이전 또는 다음)으로 변경
 *  
 *  @param {number} direction - 이미지 변경 방향(-1: 이전, 1: 다음)
 */
function handleButtonClick(direction) {
    // 현재 선택된 라디오 버튼 (face 또는 body)의 값을 가져와서 선택된 캐릭터 부분을 판단합니다.
    const selectedPart = document.querySelector('input[name="characterPart"]:checked').value;

    // 선택된 라디오 버튼의 값에 따라 이미지를 변경하는 로직을 실행합니다.
    switch (selectedPart) {
        case "face":
            // 현재 인덱스를 방향에 따라 업데이트합니다.
            currentFaceImageIndex = getNextIndex(faceImages, currentFaceImageIndex, direction);
            // 업데이트된 인덱스에 해당하는 이미지를 화면에 표시합니다.
            setImage("faceImage", faceImages[currentFaceImageIndex]);
            break;
        case "body":
            currentBodyImageIndex = getNextIndex(bodyImages, currentBodyImageIndex, direction);
            setImage("bodyImage", bodyImages[currentBodyImageIndex]);
            break;
    }
}


// =====================
// 보조 함수
// =====================

/**  
 *  지정된 DOM 요소의 이미지 경로를 변경하는 함수
 *  
 *  목적: 사용자에게 새로운 이미지를 보여주기 위함 
 *  
 *  @param {string} imageId - 변경할 이미지 요소의 ID
 *  @param {string} imagePath - 새로운 이미지의 경로
 */

function setImage(imageId, imagePath) {
    // 지정된 id를 가진 DOM 요소를 찾아 이미지 경로를 변경합니다.
    document.getElementById(imageId).src = imagePath;
}


/**  
 *  현재 이미지 인덱스를 기반으로 다음 이미지 인덱스를 계산하는 함수
 *  
 *  목적: 이미지의 순서를 유지하며 순환적으로 이미지를 변경하기 위함
 *  
 *  @param {array} images - 이미지 경로 배열
 *  @param {number} currentIndex - 현재 이미지의 인덱스
 *  @param {number} direction - 이미지 변경 방향(-1: 이전, 1: 다음)
 *  @return {number} 새로운 이미지의 인덱스 
 */
function getNextIndex(images, currentIndex, direction) {
    // 현재 인덱스에 방향값을 더해 다음 인덱스를 계산합니다.
    const newIndex = currentIndex + direction;

    // 만약 계산된 인덱스가 0보다 작으면 배열의 마지막 요소 인덱스를 반환합니다.
    if (newIndex < 0) {
        return images.length - 1;
    } 
    // 만약 계산된 인덱스가 이미지 배열의 크기보다 크거나 같으면 0을 반환합니다. (배열의 처음으로 돌아갑니다.)
    else if (newIndex >= images.length) {
        return 0;
    } 
    // 위의 두 조건에 해당하지 않으면 계산된 인덱스를 반환합니다.
    else {
        return newIndex;
    }
}
