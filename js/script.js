(function (global) {
  button = {};

  button.call = function () {
    window.location.href = 'tel:8171108388';
  };

  button.mail = function () {
    window.location.href = 'mailto:parasgarg1481@gmail.com';
  };

  button.linkedin = function () {
    window.open('https://www.linkedin.com/in/paras-garg1481');
  };
  window.$button = button;
})(window);
