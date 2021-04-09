export const guest = (to: any, from: any, next: any) => {
  if (!localStorage.getItem("authToken")) {
    return next();
  } else {
    return next();
  }
};

export const auth = (to: any, from: any, next: any) => {
  if (localStorage.getItem("authToken")) {
    return next();
  } else {
    return next("/login");
  }
};