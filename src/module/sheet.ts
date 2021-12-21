interface Guest {
  name: string;
  origin: string;
  category: string;
  pass: string;
  testimonial: string;
}

let invitationList: Guest[]
let invitedGuest: Guest

async function fetchInvitationList () {
  const url = `https://sheetdb.io/api/v1/e947nej2tzjmh`
  invitationList = await window.fetch(url).then(resp => resp.json());
  return invitationList;
}

export async function authenticate (password: string): Promise<boolean> {
  const invitationList = await fetchInvitationList();
  invitedGuest = undefined
  invitationList.forEach((guest, idx) => {
    // Skip first index as it's the header
    if (idx === 0) {
      return
    }
    if (guest.pass === password) {
      invitedGuest = guest
    }
  })
  if (invitedGuest) {
    return true
  } else {
    return false
  }
}

export async function updateResponse (response: 'Yes'|'No'): Promise<boolean> {
  const url = `https://sheetdb.io/api/v1/58f61be4dda40/pass/${invitedGuest.pass}`;
  const body = JSON.stringify({
    data: [{ response }]
  })
  return window.fetch(url, { method: 'PUT', body }).then(() => true)
}

export function getInvitedGuest (): Guest {
  return invitedGuest;
}

export function getInvitationList (): Guest {
  return invitedGuest;
}
