// Renders obfuscated contact addresses. The address never appears in the HTML source as one
// string: user and domain sit in separate data attributes and are joined in the browser.
document.querySelectorAll("span.email").forEach(function (el) {
  var addr = el.dataset.u + "@" + el.dataset.d;
  var a = document.createElement("a");
  a.href = "mailto:" + addr;
  a.textContent = addr;
  el.replaceWith(a);
});
