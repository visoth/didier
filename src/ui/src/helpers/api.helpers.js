export const post = (route, body) => {
  return fetch(route,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: body
    })
}
