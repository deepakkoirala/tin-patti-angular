import { isTrileOrJutt, isRun, isSameColor, findTop, sortIt } from "./cards";

let checkCard = (arr, myNum) => {
  let out;
  out = isTrileOrJutt(arr, myNum);
  if (out) {
    return out;
  }

  out = isRun(arr, myNum);
  if (out) {
    return out;
  }

  out = isSameColor(arr, myNum);
  if (out) {
    return out;
  }

  out = findTop(arr, myNum);
  if (out) {
    return out;
  }
};

let compareCards = (arr, type = "") => {
  let out;
  if (arr.length > 0) {
    if (type == "DOUBLE_RUN") {
      out = sortIt(arr);
      let cm = out.filter(d => d.val == out[0].val);
      if (cm.length > 1) {
        console.log("MULTIPLE WINNERS");
        return cm;
      } else return [out[0]];
    } else if (type == "RUN") {
      out = sortIt(arr);
      let cm = out.filter(d => d.val == out[0].val);
      if (cm.length > 1) {
        console.log("MULTIPLE WINNERS");
        return cm;
      } else return [out[0]];
    } else if (type == "JUTT") {
      out = sortIt(arr);
      let fd = out.filter(d => d.val == out[0].val);
      if (fd.length > 1) {
        let out2 = sortIt(fd, "val2");
        return [out2[0]];
      } else return fd;
    }
    /**While Color */
    //Check for second card and third card.
    else if (type == "COLOR" || type == "TOP") {
      out = sortIt(arr);
      let fd = arr.filter(d => d.val == arr[0].val);
      //case where same first digit
      if (fd.length > 1) {
        console.log("FIRST DIGIT IS SAME");
        let out2 = sortIt(fd, "val2");
        let sd = out2.filter(d => d.val2 == out2[0].val2);

        if (sd.length == 1) {
          return [sd[0]];
        } else if (sd.length > 1) {
          console.log("SECOND DIGIT IS SAME");
          //case where second digital is also same
          let out3 = sortIt(sd, "val3");
          let td = out3.filter(d => d.val3 == out3[0].val3);
          if (td.length > 1) {
            console.log("THIRD DIGIT IS SAME");
            //two winners
            console.log("MULTIPLE WINNERS");
            return td;
          } else return [td[0]];
        }
      } else {
        //case where no same first digit
        out = sortIt(arr);
        return [out[0]];
      }
    }
    out = sortIt(arr);
    return [out[0]];
  }
};

let getWinner = arr => {
  let out;

  /***
   * Logic to check TRILE
   */
  out = arr.filter(d => {
    if (d.msg == "TRILE") {
      return true;
    }
  });

  if (compareCards(out)) {
    return compareCards(out);
  }

  /***
   * Logic to Check for Double RUN
   */
  out = arr.filter(d => {
    if (d.msg == "DOUBLE_RUN") return true;
  });

  if (compareCards(out, "DOUBLE_RUN")) {
    return compareCards(out, "DOUBLE_RUN");
  }

  /***
   * Logic to Check RUN
   */
  out = arr.filter(d => {
    if (d.msg == "RUN") {
      return true;
    }
  });

  if (compareCards(out, "RUN")) {
    return compareCards(out, "RUN");
  }

  /***
   * Logic for Check COLOR
   */

  out = arr.filter(d => {
    if (d.msg == "COLOR") {
      return true;
    }
  });

  if (compareCards(out, "COLOR")) {
    // console.log("total color", out);
    return compareCards(out, "COLOR");
  }

  /***
   * Logic for Check JUTT
   */
  out = arr.filter((d, i) => {
    if (d.msg == "JUTT") {
      return true;
    }
  });

  if (compareCards(out, "JUTT")) {
    console.log("total jutt", out);
    return compareCards(out, "JUTT");
  }

  /***
   * Logic for Check TOP
   */

  out = arr.filter(d => {
    if (d.msg == "TOP") {
      return true;
    }
  });

  if (compareCards(out, "TOP")) {
    // console.log("total top", out);
    return compareCards(out, "TOP");
  }

  return -1;
};

export { checkCard, getWinner };
