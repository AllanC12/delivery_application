export const resetFields = (
  valueEmail = null,
  valuePassword = null,
  valueName = null,
  valueConfirmPassword = null,
  valueUrl = null
) => {
  const resetMap = {
    "http://localhost:3001/login": [valueEmail, valuePassword],
    "http://localhost:3001/meus_dados": [
      valueUrl,
      valueName,
      valueEmail,
      valuePassword,
    ],
    "http://localhost:3001/cadastro": [
      valueEmail,
      valueName,
      valueUrl,
      valuePassword,
      valueConfirmPassword,
    ],
  };

  const currentUrl = window.location.href;

  if (resetMap.hasOwnProperty(currentUrl)) {
    const resetFields = resetMap[currentUrl];
    resetFields.forEach((field) => {
        if(typeof(field) === "function") field("");

    });
  }
};
