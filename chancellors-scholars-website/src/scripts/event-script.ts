import { EventData } from '../types'

// Converts Google Drive link to a direct image link
export function formatDriveLink(url:string):string {
  const fileIdMatch = url.match(/(?:id=|\/d\/|file\/d\/)([a-zA-Z0-9_-]+)/);
  return fileIdMatch
    ? `https://drive.google.com/thumbnail?id=${fileIdMatch[1]}&sz=w400`
    : url;
}

// Gets the JSON data of the google sheet containing event data from the Google Form 
// The Google Apps script that filters and converts the sheet data to JSON and provides an endpoint
// It also has a separate script that purges old events from the sheet
const GET_DATA = 'https://script.google.com/macros/s/AKfycbwNawhptxX01hm-4Um5MOrXyzTx7yjgRSp_I2mmVZnoYxwlPHcJ_YjaBwlujtv8xZwlsA/exec';

export async function fetchEventData(): Promise<EventData[]> {
  const response = await fetch(GET_DATA);
  const { data: events } = await response.json();
  return events;
}