// BOB's own self-id checkboxes didn't play well with our bob-gui setup, so I wrote this
// it's a huge hack, but that's to be expected with BOB
// (lgsb2, 2021)

var SELFID_CATEGORIES = {
	// label on ballot : label for selfid
	"LGBT+ Officer(s)": "LGBT+",
	"Ethnically Minoritised Communities Officer(s)": "EMC"
};

(function() {
	let votes = document.querySelectorAll("table.vote");
	let container = document.querySelector("div.graybox > form");

	// javacript stupidity
	for (let i=0; i < votes.length; ++i) {
		let before = votes[i].previousElementSibling;
		let ballotLabel = before.innerHTML;

		if (!(ballotLabel in SELFID_CATEGORIES)) {
			continue;
		}
		let groupName = SELFID_CATEGORIES[ballotLabel];

		votes[i].style.display = "none";

		let disclaimer = document.createElement("SPAN");
		disclaimer.innerHTML = "We ask that only those who identify as <strong>"+groupName+
			"</strong> vote for this position." +
			"<br /><input type='checkbox' id='selfid_"+i+"' /> "+
			"<label for='selfid_"+i+"'>I identify as "+
			groupName+
			" and wish to vote for this position.</label>";
		let checkbox = disclaimer.querySelector("input"); // only input in this element is the checkbox
		checkbox.addEventListener("change", function(ev) {
			if (ev.currentTarget.checked) {
				votes[i].style.display = "table";
			} else {
				votes[i].style.display = "none";

				// reset the selections
				let inputs = votes[i].querySelectorAll("select");
				for (let j=0; j < inputs.length; ++j) {
					inputs[j].selectedIndex = 0;
				}
			}
		});

		container.insertBefore(disclaimer, votes[i]);
	}
})();
