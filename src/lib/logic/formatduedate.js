export function formatDueDate(isoDate) {
    const date = new Date(isoDate);

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    let hours = date.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = (hours % 12) || 12; // Convert to 12-hour format
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${year}-${month}-${day} @ ${hours}:${minutes} ${ampm}`;
  }