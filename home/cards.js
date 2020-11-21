const sortIt = (arr, key = "val") => {
  return arr.sort(function(a, b) {
    return b[key] - a[key];
  });
};

let setVal = val => {
  if (val == "1") {
    return 14;
  } else return val;
};

let isTrileOrJutt = function(arr, val) {
  val = sortIt(val);
  if (val[0].val === val[1].val) {
    if (val[1].val == val[2].val)
      return { msg: "TRILE", val: setVal(val[1].val), items: val };
    else
      return {
        msg: "JUTT",
        val: setVal(val[1].val),
        val2: setVal(val[2].val),
        items: val
      };
  } else if (val[1].val == val[2].val)
    return {
      msg: "JUTT",
      val: setVal(val[1].val),
      val2: val[0].val,
      items: val
    };
  else return false;
};

let isRun = function(arr, val) {
  val = sortIt(val);
  if (val[1].val - val[0].val == -1 && val[2].val - val[1].val == -1) {
    if (isSameColor(arr, val))
      return { msg: "DOUBLE_RUN", val: setVal(val[0].val), items: val };
    else return { msg: "RUN", val: setVal(val[0].val), items: val };
  } else if (val[0].val == 14 && val[1].val == 3 && val[2].val == 2) {
    //while A,2,3
    if (isSameColor(arr, val))
      return { msg: "DOUBLE_RUN", val: setVal(val[0].val), items: val };
    else return { msg: "RUN", val: setVal(val[0].val), items: val };
  } else return false;
};

let isSameColor = (arr, val) => {
  val = sortIt(val);
  let isSC = val.every(item => item.type == val[0].type);
  if (isSC) {
    return {
      msg: "COLOR",
      val: setVal(val[0].val),
      val2: setVal(val[1].val),
      val3: setVal(val[2].val),
      items: val
    };
  } else return false;
};

let findTop = function(arr, val) {
  val = sortIt(val);
  return {
    msg: "TOP",
    val: setVal(val[0].val),
    val2: setVal(val[1].val),
    val3: setVal(val[2].val),
    items: val
  };
};

let printCardNumber = n => {
  if (n == 14) return "A";
  else if (n == 11) return "J";
  else if (n == 12) return "Q";
  else if (n == 13) return "K";
  return n;
};

export { sortIt, isTrileOrJutt, isRun, isSameColor, findTop, printCardNumber };
