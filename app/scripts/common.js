var SCRIPT_FORM_FIELDS = [{
  name: "name",
  label: "Name",
  type: "text",
  value: "",
  placeholder: "",
  required: true,
  errorMessage: "Please enter script's name",
  show: true,
  required: true
}, {
  name: "description",
  label: "Description (optional)",
  type: "textarea",
  value: "",
  placeholder: "",
  required: true,
  errorMessage: "Please enter script's description",
  show: true,
  required: false
}, {
  name: "type",
  label: "Type",
  type: "dropdown",
  value: "",
  errorMessage: "Please enter script's description",
  show: true,
  required: true,
  options: [{
    title: "Executable",
    val: "executable"
  }, {
    title: "Ansible Playbook",
    val: "ansible"
  }]
}, {
  name: "source",
  label: "Source",
  type: "dropdown",
  value: "",
  errorMessage: "Please enter script's source",
  show: true,
  required: true,
  options: [{
    title: "Github",
    val: "github"
  }, {
    title: "URL",
    val: "url"
  }, {
    title: "Inline",
    val: "inline"
  }]
}, {
  name: "entryPoint",
  label: "Entry point (optional)",
  type: "textarea",
  value: "",
  placeholder: "",
  show: false,
  required: false,
  showIf: {
    fieldName: "source",
    fieldValues: ["url", "github"]
  },
  errorMessage: "Please enter script"
}];

var TIME_MAP = {
  SECOND: 1000,
  MINUTE: 60 * 1000,
  HOUR: 60 * 60 * 1000,
  DAY: 24 * 60 * 60 * 1000,
  WEEK: 7 * 24 * 60 * 60 * 1000,
  MONTH: 30 * 24 * 60 * 60 * 1000,
  YEAR: 12 * 30 * 24 * 60 * 60 * 1000,
};

Date.prototype.getMonthName = function(short) {
  if (short) {
    return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
      'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ][this.getMonth()];
  }

  return ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ][this.getMonth()];
}

Date.prototype.getTimeFromNow = function() {
  var now = new Date();
  var diff = now - this;
  var ret = '';

  if (diff < 10 * TIME_MAP.SECOND)
    ret = 'Now';

  else if (diff < TIME_MAP.MINUTE)
    ret = parseInt(diff / TIME_MAP.SECOND) + ' sec';

  else if (diff < TIME_MAP.HOUR)
    ret = parseInt(diff / TIME_MAP.MINUTE) + ' min';

  else if (diff < TIME_MAP.DAY)
    ret = parseInt(diff / TIME_MAP.HOUR) + ' hour';

  else if (diff < 2 * TIME_MAP.DAY)
    ret = 'Yesterday';

  else if (diff < TIME_MAP.YEAR)
    ret = this.getMonthName(true) + ' ' + this.getDate();

  if (ret.indexOf('sec') > -1 ||
    ret.indexOf('min') > -1 ||
    ret.indexOf('hour') > -1) {

    // Add 's' for plural
    if (ret.split(' ')[0] != '1')
      ret = ret + 's';

    ret = ret + ' ago';
  }

  return ret;
}

var COUNTRIES = ["Afghanistan", "Åland Islands", "Albania", "Algeria",
  "American Samoa", "Andorra", "Angola", "Anguilla",
  "Antarctica", "Antigua and Barbuda", "Argentina",
  "Armenia", "Aruba", "Australia", "Austria",
  "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh",
  "Barbados", "Belarus", "Belgium", "Belize", "Benin",
  "Bermuda", "Bhutan", "Bolivia",
  "Bosnia and Herzegovina", "Botswana", "Bouvet Island",
  "Brazil", "British Indian Ocean Territory",
  "Brunei Darussalam", "Bulgaria", "Burkina Faso",
  "Burundi", "Cambodia", "Cameroon", "Canada",
  "Cape Verde", "Cayman Islands",
  "Central African Republic", "Chad", "Chile", "China",
  "Christmas Island", "Cocos (Keeling) Islands",
  "Colombia", "Comoros", "Congo",
  "Congo, The Democratic Republic of the",
  "Cook Islands", "Costa Rica", "Cote D'Ivoire",
  "Croatia", "Cuba", "Cyprus", "Czech Republic",
  "Denmark", "Djibouti", "Dominica",
  "Dominican Republic", "Ecuador", "Egypt",
  "El Salvador", "Equatorial Guinea", "Eritrea",
  "Estonia", "Ethiopia", "Falkland Islands (Malvinas)",
  "Faroe Islands", "Fiji", "Finland", "France",
  "French Guiana", "French Polynesia",
  "French Southern Territories", "Gabon", "Gambia",
  "Georgia", "Germany", "Ghana", "Gibraltar", "Greece",
  "Greenland", "Grenada", "Guadeloupe", "Guam",
  "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau",
  "Guyana", "Haiti", "Heard Island and Mcdonald Islands",
  "Holy See (Vatican City State)", "Honduras",
  "Hong Kong", "Hungary", "Iceland", "India",
  "Indonesia", "Iran, Islamic Republic Of", "Iraq",
  "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica",
  "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya",
  "Kiribati", "Korea, Democratic People'S Republic of",
  "Korea, Republic of", "Kuwait", "Kyrgyzstan",
  "Lao People'S Democratic Republic", "Latvia", "Lebanon",
  "Lesotho", "Liberia", "Libyan Arab Jamahiriya",
  "Liechtenstein", "Lithuania", "Luxembourg", "Macao",
  "Macedonia, The Former Yugoslav Republic of",
  "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali",
  "Malta", "Marshall Islands", "Martinique", "Mauritania",
  "Mauritius", "Mayotte", "Mexico",
  "Micronesia, Federated States of",
  "Moldova, Republic of", "Monaco", "Mongolia",
  "Montserrat", "Morocco", "Mozambique", "Myanmar",
  "Namibia", "Nauru", "Nepal", "Netherlands",
  "Netherlands Antilles", "New Caledonia", "New Zealand",
  "Nicaragua", "Niger", "Nigeria", "Niue",
  "Norfolk Island", "Northern Mariana Islands", "Norway",
  "Oman", "Pakistan", "Palau",
  "Palestinian Territory, Occupied", "Panama",
  "Papua New Guinea", "Paraguay", "Peru", "Philippines",
  "Pitcairn", "Poland", "Portugal", "Puerto Rico",
  "Qatar", "Reunion", "Romania", "Russian Federation",
  "RWANDA", "Saint Helena", "Saint Kitts and Nevis",
  "Saint Lucia", "Saint Pierre and Miquelon",
  "Saint Vincent and the Grenadines", "Samoa",
  "San Marino", "Sao Tome and Principe", "Saudi Arabia",
  "Senegal", "Serbia and Montenegro", "Seychelles",
  "Sierra Leone", "Singapore", "Slovakia", "Slovenia",
  "Solomon Islands", "Somalia", "South Africa",
  "South Georgia and the South Sandwich Islands",
  "Spain", "Sri Lanka", "Sudan", "Suriname",
  "Svalbard and Jan Mayen", "Swaziland", "Sweden",
  "Switzerland", "Syrian Arab Republic",
  "Taiwan, Province of China", "Tajikistan",
  "Tanzania, United Republic of", "Thailand",
  "Timor-Leste", "Togo", "Tokelau", "Tonga",
  "Trinidad and Tobago", "Tunisia", "Turkey",
  "Turkmenistan", "Turks and Caicos Islands", "Tuvalu",
  "Uganda", "Ukraine", "United Arab Emirates",
  "United Kingdom", "United States",
  "United States Minor Outlying Islands", "Uruguay",
  "Uzbekistan", "Vanuatu", "Venezuela", "Viet Nam",
  "Virgin Islands, British", "Virgin Islands, U.S.",
  "Wallis and Futuna", "Western Sahara", "Yemen",
  "Zambia", "Zimbabwe"
];
