import "reset-css";
import "./style.css";

const loginForm = document.querySelector("#loginForm");
const pswError = document.querySelector("#passwordError");
const email = document.querySelector("#email");
const psw = document.querySelector("#password");

// 即時驗證 (Real-time Validation)
// 密碼最小長度8碼。
// 密碼必需包含下列4種字元中的3種：
// 英文大寫字元(A到Z)
// 英文小寫字元(a到z)
// 10進位數字(0到9)
// 特殊符號(例如：!、$、#、%)

function getPswRules() {
  const val = psw.value;
  const isLongEnough = val.length >= 8;
  const hasUpper = /[A-Z]/.test(val);
  const hasLower = /[a-z]/.test(val);
  const hasNumber = /[0-9]/.test(val);
  const hasSpecial = /[!@#$%^&*]/.test(val);
  const rules = [hasUpper, hasLower, hasNumber, hasSpecial].filter(
    Boolean,
  ).length;

  return { isLongEnough, rules };
}

function pswValid(isLongEnough, rules) {
  return isLongEnough && rules >= 3;
}

function showPswError(isLongEnough, rules) {
  const errors = [];
  if (!isLongEnough) errors.push("密碼未滿 8 個字");
  if (rules < 3) errors.push("需包含大、小寫字母、數字或特殊符號其中至少三種");

  pswError.textContent =
    errors.length > 0 ? `密碼格式不正確：${errors.join("、")}` : "";
}

psw.addEventListener("input", () => {
  const { isLongEnough, rules } = getPswRules();
  showPswError(isLongEnough, rules);
});

// 阻止預設行為與資料抓取

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const { isLongEnough, rules } = getPswRules();

  if (pswValid(isLongEnough, rules)) {
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
  } else {
    showPswError(isLongEnough, rules);
  }
});
