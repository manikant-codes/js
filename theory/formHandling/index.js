function handleSubmit(event) {
  event.preventDefault();

  if (event.target["name"].value.trim().length < 2) {
    alert("Name must be at least 2 characters.");
    return;
  }

  if (event.target["password"].value.trim().length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }

  if (event.target["age"].value % 2 !== 0) {
    alert("Age must be an even number.");
    return;
  }

  event.target.submit();
}
