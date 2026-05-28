export let notes: { id: string; text: string }[] = [];

export default function addMessage(text: string) {
    notes = [{ id: String(Date.now()), text }, ...notes];
    console.log('add message', notes);
}