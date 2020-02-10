const getSudentsData = () => {
  fetch("js/student_CC5.json")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      let tempElement = "";
      data.forEach(ele => {
        tempElement += `<tr>`;
        tempElement += `<td>${ele.No}</td>`;
        tempElement += `<td>${ele.Name}</td>`;
        tempElement += `<td>${ele.Surname}</td>`;
        tempElement += `<td>0${ele.Tel}</td>`;
        tempElement += `<td>${ele.Email}</td>`;
        tempElement += `<td><a>${ele.Website}</a></td>`;
      });
      document.getElementById("data").innerHTML = tempElement;
    });
};

getSudentsData();
