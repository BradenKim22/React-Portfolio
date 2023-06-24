export const Helpers = {
  validateEmail: (email) => {
    const emailRegEx =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegEx.test(String(email).toLowerCase());
  },

  testName: (input) => {
    const nameInput = /^\s*$/;
    if (input.match(nameInput)) {
      return false;
    }
    return true;
  },

  testMessage: (input) => {
    const messageInput = /^\s*$/;
    if (input.match(messageInput)) {
      return false;
    }
    return true;
  },
};
