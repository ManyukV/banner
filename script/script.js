const modalTrigger = document.querySelector("[data-open]"),
  modal = document.querySelector(".modal"),
  close = document.querySelector("[data-close]");

    modalTrigger.addEventListener('click', openModal)

  function closeModal(){
    modal.classList.add('hide');
    modal.classList.remove('show');
  }

  function openModal(){
    modal.classList.add('show');
    modal.classList.remove('hide');
  }

  close.addEventListener('click', closeModal)

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });