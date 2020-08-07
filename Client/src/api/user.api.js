export async function loginCall({ user_name, password }) {
  const response = await fetch("/api/users/login-user", {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Cookie: "cookieString",
    },
    body: JSON.stringify({
      user_name,
      password,
    }),
  });

  const res = await response.json();
  if (response.status !== 200) {
    throw new Error(res);
  }
  return res;
}

export async function registerCall({ name, email, user_name, password }) {
  const response = await fetch("/api/users/reg-user", {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      user_name,
      password,
    }),
  });
  const res = await response.json();
  if (response.status !== 200) {
    throw new Error(res);
  }
  return res;
}

export async function updateUserPurchased({ user_purchased_items, user_name }) {
  // console.log({ user_purchased_items });
  const response = await fetch("/api/users/update-purchased-items", {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Cookie: "cookieString",
    },
    body: JSON.stringify({
      user_name,
      user_purchased_items,
    }),
  });
  const res = await response.json();
  if (response.status !== 200) {
    throw new Error(res);
  }
  return res;
}
