import "reset-css/sass/_reset.scss";

import "./style.scss";

import swal from "sweetalert";

const input: HTMLInputElement | null = document.querySelector(".inputText");
const doList: Element | null = document.querySelector(".doList");
const modal: Element | null = document.querySelector(".modal");
const modifyInput: HTMLInputElement | null =
  document.querySelector(".modifyInput");

let idx: number = 0;
let selectId: number = 0;

const inputReset = (inputEl: HTMLInputElement): void => {
  if (inputEl !== null) {
    inputEl.value = "";
    inputEl.focus();
  }
};

const addDo = (): void => {
  if (doList !== null) {
    doList.children[0].nodeName === "DIV"
      ? (doList.innerHTML = doTemplate())
      : (doList.innerHTML += doTemplate());
  }
};

const doTemplate = (): string => {
  return `
    <li class="do" id=${idx++}>
      <div class="left">
        <span class="name">${input !== null && input.value.trim()}</span>
      </div>
      <div class="right">
        <button class="check">
          <i class="far fa-check-square"></i> </button
        ><button class="edit"> <i class="far fa-edit"></i> </button
        ><button class="delete">
          <i class="far fa-trash-alt"></i>
        </button>
      </div>
    </li>
  `;
};

const emptyDoListContent = (): void => {
  if (doList !== null) {
    doList.innerHTML = `
    <div class="empty">
      <span>할 일을 적어주세요<span>
    </div>
  `;
  }
};

const inputValidation = (inputEl: HTMLInputElement): boolean => {
  if (inputEl.value === "") return false;
  if (inputEl.value.match(/\s/g)) return false;
  return true;
};

const todoModify = (): void => {
  const dos = document.querySelectorAll(".do");

  dos.forEach((item) => {
    item.id === String(selectId) &&
      modifyInput !== null &&
      (item.children[0].children[0].innerHTML = modifyInput.value);
  });
};

window.addEventListener("click", (e: any): void => {
  const targetEl: any = e.target;
  const elClassName: any = targetEl !== null && targetEl.className;

  if (targetEl.className.includes("submit") || elClassName.includes("plus")) {
    if (input !== null) {
      if (inputValidation(input)) {
        addDo();
        inputReset(input);
      } else {
        swal("빈 문자, 공백(space)는 안됩니다!");
      }
    }
  }

  if (elClassName.includes("delete") || elClassName.includes("trash")) {
    swal({
      title: "정말 삭제하시겠습니까?",
      icon: "warning",
      buttons: [true, true],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete && targetEl !== null) {
        targetEl.closest("li").remove();
        swal("삭제되었습니다", {
          icon: "success",
        });
      }
      doList !== null && doList.children.length === 0 && emptyDoListContent();
    });
  }

  if (elClassName.includes("edit")) {
    if (modal !== null && modifyInput !== null) {
      modal.classList.add("on");
      modifyInput.value =
        targetEl.closest("li").children[0].children[0].innerHTML;
      selectId = Number(targetEl.closest("li").id);
      modifyInput.focus();
    }
  }

  if (elClassName.includes("exit") || elClassName.includes("times")) {
    if (modal !== null) {
      modal.classList.remove("on");
    }
  }

  if (elClassName.includes("modifySubmit")) {
    if (modifyInput !== null && inputValidation(modifyInput)) {
      todoModify();
      modal !== null && modal.classList.remove("on");
    } else {
      swal("빈 문자, 공백(space)는 안됩니다!");
    }
  }

  if (elClassName.includes("check")) {
    targetEl !== null &&
      targetEl.closest("li").children[0].children[0].classList.toggle("done");
  }
});

window.addEventListener("keypress", (e): void => {
  const focusElment: Element | null = document.activeElement;
  const focusClassName = focusElment !== null && focusElment.className;

  if (modal !== null && modifyInput !== null && input !== null) {
    if (focusClassName === "inputText") {
      if (e.key.includes("Enter")) {
        if (inputValidation(input)) {
          addDo();
          inputReset(input);
        } else {
          swal("빈 문자, 공백(space)는 안됩니다!");
        }
      }
    } else if (focusClassName === "modifyInput") {
      if (e.key.includes("Enter")) {
        if (inputValidation(modifyInput)) {
          todoModify();
          modal.classList.remove("on");
        } else {
          swal("빈 문자, 공백(space)는 안됩니다!");
        }
      }
    }
  }
});

window.addEventListener("DOMContentLoaded", (): void => {
  input !== null && input.focus();
  emptyDoListContent();
});
