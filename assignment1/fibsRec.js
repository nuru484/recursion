const fibsRec = (input, index = 0, previous = 0, current = 1) => {
  let array = [];
  if (index === input) return array;
  array.push(previous);
  return array.concat(
    fibsRec(input, index + 1, (current = current + previous), previous)
  );
};

console.log(fibsRec(8));
