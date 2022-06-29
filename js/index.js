const addNewTask = document.querySelector('#addNewTask');
const formAddTask = document.querySelector('#formAddTask');
const addInputName = document.querySelector('#addInputName');
const addInputDescription = document.querySelector('#addInputDescription');
const addInputAssignedTo = document.querySelector('#addInputAssignedTo');
const addInputDueDate = document.querySelector('#addInputDueDate');
const addInputStatus = document.querySelector('#addInputStatus');
const addSubmitBtn = document.querySelector('#addSubmitBtn');
const addResetBtn = document.querySelector('#addResetBtn');
const addCloseModal = document.querySelector('#addCloseModal');

let editInputId = document.querySelector('#editInputId');
let editInputName = document.querySelector('#editInputName');
let editInputDescription = document.querySelector('#editInputDescription');
let editInputAssignedTo = document.querySelector('#editInputAssignedTo');
let editInputDueDate = document.querySelector('#editInputDueDate');
let editInputStatus = document.querySelector('#editInputStatus');
let editSaveBtn = document.querySelector('#editSaveBtn');
let editResetBtn = document.querySelector('#editResetBtn');
let editCloseModal = document.querySelector('#editCloseModal');
let editBtn = document.getElementsByClassName('editBtn');

const showDate = document.querySelector('#showDate');
const showTime = document.querySelector('#showTime');

class Validation {
  static isRequired(input) {
    return input === '' ? false : true;
  }

  static isBetween(inputLength, min, max) {
    return inputLength > min && inputLength <= max ? true : false;
  }

  static isFormattedDate(input) {
    const pattern =
      /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    return input.match(pattern);
  }

  static addCheckName() {
    let valid = false;
    const min = 3;
    const max = 10;
    const name = addInputName.value.trim();

    if (!Validation.isRequired(name)) {
      Validation.showError(addInputName, 'Name cannot be blank.');
    } else if (!Validation.isBetween(name.length, min, max)) {
      Validation.showError(
        addInputName,
        `Name must be between ${min} and ${max} characters.`
      );
    } else {
      Validation.showSuccess(addInputName);
      valid = true;
    }

    return valid;
  }

  static addCheckDescription() {
    let valid = false;
    const description = addInputDescription.value.trim();
    if (Validation.isRequired(description)) {
      Validation.showSuccess(addInputDescription);
      valid = true;
    } else {
      Validation.showError(addInputDescription, 'Description cannot be blank.');
    }
    return valid;
  }

  static addCheckAssignedTo() {
    let valid = false;
    const assignedTo = addInputAssignedTo.value.trim();
    if (Validation.isRequired(assignedTo)) {
      Validation.showSuccess(addInputAssignedTo);
      valid = true;
    } else {
      Validation.showError(addInputAssignedTo, 'Assigned to cannot be blank.');
    }
    return valid;
  }

  static addCheckDueDate() {
    let valid = false;
    const dueDate = addInputDueDate.value.trim();
    if (!Validation.isRequired(dueDate)) {
      Validation.showError(addInputDueDate, 'Due date cannot be blank.');
    } else if (!Validation.isFormattedDate(dueDate)) {
      Validation.showError(
        addInputDueDate,
        'Due date have to be in this format : DD-MM-YYYY'
      );
    } else {
      Validation.showSuccess(addInputDueDate);
      valid = true;
    }
    return valid;
  }

  static addCheckStatus() {
    let valid = false;
    const status = addInputStatus.value.trim();
    if (Validation.isRequired(status)) {
      Validation.showSuccess(addInputStatus);
      valid = true;
    } else {
      Validation.showError(addInputStatus, 'Status cannot be blank.');
    }
    return valid;
  }

  static editCheckName() {
    let valid = false;
    const min = 3;
    const max = 10;
    const name = editInputName.value.trim();

    if (!Validation.isRequired(name)) {
      Validation.showError(editInputName, 'Name cannot be blank.');
    } else if (!Validation.isBetween(name.length, min, max)) {
      Validation.showError(
        editInputName,
        `Name must be between ${min} and ${max} characters.`
      );
    } else {
      Validation.showSuccess(editInputName);
      valid = true;
    }

    return valid;
  }

  static editCheckDescription() {
    let valid = false;
    const description = editInputDescription.value.trim();
    if (Validation.isRequired(description)) {
      Validation.showSuccess(editInputDescription);
      valid = true;
    } else {
      Validation.showError(
        editInputDescription,
        'Description cannot be blank.'
      );
    }
    return valid;
  }

  static editCheckAssignedTo() {
    let valid = false;
    const assignedTo = editInputAssignedTo.value.trim();
    if (Validation.isRequired(assignedTo)) {
      Validation.showSuccess(editInputAssignedTo);
      valid = true;
    } else {
      Validation.showError(editInputAssignedTo, 'Assigned to cannot be blank.');
    }
    return valid;
  }

  static editCheckDueDate() {
    let valid = false;
    const dueDate = editInputDueDate.value.trim();
    if (!Validation.isRequired(dueDate)) {
      Validation.showError(editInputDueDate, 'Due date cannot be blank.');
    } else if (!Validation.isFormattedDate(dueDate)) {
      Validation.showError(
        editInputDueDate,
        'Due date have to be in this format : DD-MM-YYYY'
      );
    } else {
      Validation.showSuccess(editInputDueDate);
      valid = true;
    }
    return valid;
  }

  static editCheckStatus() {
    let valid = false;
    const status = editInputStatus.value.trim();
    if (Validation.isRequired(status)) {
      Validation.showSuccess(editInputStatus);
      valid = true;
    } else {
      Validation.showError(editInputStatus, 'Status cannot be blank.');
    }
    return valid;
  }

  static showError(input, message) {
    const formField = input.parentElement;
    const small = formField.querySelector('small');
    small.textContent = message;
  }

  static showSuccess(input) {
    const formfield = input.parentElement;
    const small = formfield.querySelector('small');
    small.textContent = '';
  }

  static resetAddFormFields() {
    Validation.showSuccess(addInputName);
    Validation.showSuccess(addInputDescription);
    Validation.showSuccess(addInputAssignedTo);
    Validation.showSuccess(addInputDueDate);
    Validation.showSuccess(addInputStatus);
    formAddTask.reset();
  }
}

// Utility Class: Provides Utility Methods
class Utility {
  static showDate() {
    const date = new Date();
    const today =
      date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    const dateTextNode = document.createTextNode(today);
    return dateTextNode;
  }

  static showTime() {
    const date = new Date();
    const timeTextNode = document.createTextNode(date.toLocaleTimeString());
    return timeTextNode;
  }
}

//////////////////////////////////////////////////// All event section /////////////////////////////////////////////////////

// Event: Adding Submit Form
formAddTask.addEventListener('submit', e => {
  e.preventDefault();
  // console.log(addInputName.value);
  // console.log(addInputDescription.value);
  // console.log(addInputAssignedTo.value);
  // console.log(addInputDueDate.value);
  // console.log(addInputStatus.value);

  let isNameValid = Validation.addCheckName(),
    isDescriptionValid = Validation.addCheckDescription(),
    isAssignedToValid = Validation.addCheckAssignedTo(),
    isDueDateValid = Validation.addCheckDueDate(),
    isStatusValid = Validation.addCheckStatus();

  let isFormValid =
    isNameValid &&
    isDescriptionValid &&
    isAssignedToValid &&
    isDueDateValid &&
    isStatusValid;

  if (isFormValid) {
    // To fix the Modal from not closing after click Submit button (from e.preventDefault());
    addSubmitBtn.setAttribute('data-bs-dismiss', 'modal');
    addSubmitBtn.click();
    // To remove this attribute from the modal (IIFE)
    (() => {
      addSubmitBtn.setAttribute('data-bs-dismiss', '');
    })();
  }
});

// Event: Click on Reset Button on Add Modal
addResetBtn.addEventListener('click', Validation.resetAddFormFields);

// Event: Click on X Button on Add Modal
addCloseModal.addEventListener('click', Validation.resetAddFormFields);

// Event: Save Edited Task
editSaveBtn.addEventListener('click', e => {
  e.preventDefault();
  let isNameValid = Validation.editCheckName(),
    isDescriptionValid = Validation.editCheckDescription(),
    isAssignedToValid = Validation.editCheckAssignedTo(),
    isDueDateValid = Validation.editCheckDueDate(),
    isStatusValid = Validation.editCheckStatus();

  let isFormValid =
    isNameValid &&
    isDescriptionValid &&
    isAssignedToValid &&
    isDueDateValid &&
    isStatusValid;

  if (isFormValid) {
    // To fix the Modal from not closing after click Submit button (from e.preventDefault());
    editSaveBtn.setAttribute('data-bs-dismiss', 'modal');
    editSaveBtn.click();
    // To remove this attribute from the modal (IIFE)
    (() => {
      editSaveBtn.setAttribute('data-bs-dismiss', '');
    })();
  }
});

// Event: Reset to Prev Data of a Task
editResetBtn.addEventListener('click', () => {
  document.getElementById('formEditTask').reset();
});

// Show Date and Time when page load
showDate.appendChild(Utility.showDate());
showTime.appendChild(Utility.showTime());