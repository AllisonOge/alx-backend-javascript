export default function getListStudentIds(listOfObjs) {
  return Array.isArray(listOfObjs) ? listOfObjs.map((obj) => obj.id): [];
}
