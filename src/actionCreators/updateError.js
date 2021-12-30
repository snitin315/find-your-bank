export default function updateError(err) {
  return { type: "SET_ERROR", payload: err };
}
