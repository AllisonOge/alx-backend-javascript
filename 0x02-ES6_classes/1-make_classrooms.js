import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const rooms = [];
  for (const n of [19, 20, 34]) {
    const room = new ClassRoom(n);
    rooms.push(room);
  }
  return rooms;
}
