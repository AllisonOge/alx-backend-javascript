export default function guardrail(mathFunction) {
  const queue = new Array();
  try {
    queue.push(mathFunction());
  }
  catch (err) {
    queue.push(err.message);
  }
  queue.push('Guardrail was processed');
  return queue;
}
