import { createdRoomsBtn, createRoomBtn } from "./components/buttons/index.js";

const buttonsContainer = document.querySelector('.buttons');
buttonsContainer.appendChild(createRoomBtn);
buttonsContainer.appendChild(createdRoomsBtn);

createdRoomsBtn.addEventListener('click', () => {
  window.location.href = './pages/rooms/index.html';
});