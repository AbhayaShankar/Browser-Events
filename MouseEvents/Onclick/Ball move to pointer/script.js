field.onclick = function (event) {
  // window-relative field coordinates
  let fieldCoords = this.getBoundingClientRect();

  // the ball has position:absolute, the field: position:relative
  // so ball coordinates are relative to the field inner left-upper corner
  let ballCoords = {
    top:
      event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
    left:
      event.clientX -
      fieldCoords.left -
      field.clientLeft -
      ball.clientWidth / 2,
  };

  // prevent crossing the top field boundary
  if (ballCoords.top < 0) ballCoords.top = 0;

  // prevent crossing the left field boundary
  if (ballCoords.left < 0) ballCoords.left = 0;

  // // prevent crossing the right field boundary
  if (ballCoords.left + ball.clientWidth > field.clientWidth) {
    ballCoords.left = field.clientWidth - ball.clientWidth;
  }

  // prevent crossing the bottom field boundary
  if (ballCoords.top + ball.clientHeight > field.clientHeight) {
    ballCoords.top = field.clientHeight - ball.clientHeight;
  }

  ball.style.left = ballCoords.left + "px";
  ball.style.top = ballCoords.top + "px";
};
