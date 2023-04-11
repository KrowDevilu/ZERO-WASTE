$('#cloneDiv').click(function () {
  // get the last DIV which ID starts with ^= "klon"
  var $div = $('div[id^="klon"]:last');

  // Read the Number from that DIV's ID (i.e: 3 from "klon3")
  // And increment that number by 1
  var num = parseInt($div.prop('id').match(/\d+/g), 10) + 1;

  // Clone it and assign the new ID (i.e: from num 4 to ID "klon4")
  var $klon = $div.clone().prop('id', 'klon' + num);

  // Finally insert $klon wherever you want
  $div.after($klon.text('klon' + num));
});

// document.getElementById('newsectionbtn').onclick = function () {
//   var container = document.getElementById('container');
//   var section = document.getElementById('mainsection');
//   container.appendChild(section.cloneNode(true));
// };
