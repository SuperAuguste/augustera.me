export const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
export function formatDate(date: Date): string {
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}
