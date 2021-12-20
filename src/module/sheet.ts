interface InvitedGuest {
  name: string;
  origin: string;
  category: string
}

const SHEET_ID = '1dutko7Ze7UQM-Z_fOQD4LeSSdZRyax5-S3ra2fwiePI';
const SHEET_TITLE = 'Sheet1';
const API_KEY = 'AIzaSyCifieZpTZTWaUSrtVUdObnkn7bsGmuOyk';

let invitedGuest: InvitedGuest

export async function authenticate (password: string): Promise<boolean> {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_TITLE}?key=${API_KEY}`
  const resp = await window.fetch(url).then(resp => resp.json());
  const cells = resp.values as Array<string[]>
  // Skip the first row as it's the header
  cells.splice(0, 1)
  // Find the row that matches the pass
  const invited = cells.find(invitation => invitation[3] === password)
  if (invited) {
    invitedGuest = {
      name: invited[0],
      origin: invited[1],
      category: invited[2]
    }
    return true
  } else {
    return false
  }
}

export function getInvitedGuest (): InvitedGuest {
  return invitedGuest;
}
