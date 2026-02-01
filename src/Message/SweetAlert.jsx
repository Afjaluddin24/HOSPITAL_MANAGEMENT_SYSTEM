import Swal from 'sweetalert2';

export const successAlert = (title = 'Success', text = 'Operation completed successfully') => {
  return Swal.fire({
    title: title,
    text: text,
    icon: 'success',
    confirmButtonText: 'OK',
    timer: 5000, // ✅ Automatically close after 5 seconds
    timerProgressBar: true, // ✅ Show progress bar
  });
};

export const errorAlert = (title = 'Error', text = 'Something went wrong') => {
  return Swal.fire({
    title: title,
    text: text,
    icon: 'error',
    confirmButtonText: 'OK',
    timer: 5000, // ✅ Automatically close after 5 seconds
    timerProgressBar: true,
  });
};

export const warningAlert = (title = 'Warning', text = 'Are you sure you want to proceed?') => {
  return Swal.fire({
    title: title,
    text: text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'No',
    timer: 5000, // ✅ Automatically close after 5 seconds
    timerProgressBar: true,
  }).then((result) => {
    return result.isConfirmed;
  });
};

export const confirmationAlert = (title = 'Confirmation', text = 'Are you sure you want to delete this?') => {
  return Swal.fire({
    title: title,
    text: text,
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Yes, Delete it!',
    cancelButtonText: 'Cancel',
    timer: 5000, // ✅ Automatically close after 5 seconds
    timerProgressBar: true,
  }).then((result) => {
    return result.isConfirmed;
  });
};


//npm i react-sweetalert2