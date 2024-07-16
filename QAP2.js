//Programming With JavaScript


//Francis Nwokedi
//July 16,2024

//Problem 1: replace all internal whitespace in a string value with underscore ('_'), and makes it lowercase.
function snake(str) {
str = str.trim();
  str = str.replace(/[\s\.]+/g, '_');
str = str.toLowerCase();
  return str;
}

//Problem 2: create an HTML <video> element for the given url.
function createVideoElement(src, width, height) {
  src = src.trim();
  let videoElement = '<video ';
  if (Number.isInteger(width)) {
    videoElement += `width="${width}" `;
  }

  videoElement += `height="${height}" controls>\n`;
  videoElement += `  <source src="${src}" type="video/mp4">\n`;
  videoElement += '</video>';
  return videoElement;
}

//Problem 3: extract Date from date string

let str = '01/01/2021';  

let parts = str.split('/');  

let date = new Date(
  parseInt(parts[2]),  
  parseInt(parts[1]) - 1, 
  parseInt(parts[0]) 
);

console.log(date.toDateString()); 

//Problem 4: convert Date to date string with specified format.

function toDateString(date) {
  
  let year = date.getFullYear(); 
  let month = date.getMonth() + 1; 
  let day = date.getDate(); 

  if (month < 10) {
    month = '0' + month; 
  }
  if (day < 10) {
    day = '0' + day;
  }

  let dateString = year + '-' + month + '-' + day;

  return dateString;
}

//Problem 5: parse a geographic coordinate

function normalizeCoord(value) {
  
  value = value.replace(/[\[\]\s]/g, '');

  let parts = value.split(',');

  let num1 = parseFloat(parts[0]);
  let num2 = parseFloat(parts[1]);

  if (Math.abs(num1) <= 90 && Math.abs(num2) <= 180) {
    return `(${num1}, ${num2})`;
  }

  if (Math.abs(num1) <= 180 && Math.abs(num2) <= 90) {
    return `(${num2}, ${num1})`;
  }

  throw new Error('Invalid coordinate values');
}

//Problem 6: format any number of coordinates as a list in a string

function formatCoords(...coords) {

  const formattedCoords = coords.filter(coord => normalizeCoord(coord) !== null);
  
  if (formattedCoords.length === 0) {
    return null; 
  }
  
  return `(${formattedCoords.join(', ')})`;
}

//Problem 7: determine MIME type from filename extension

const mimeTypes = {
  'html': 'text/html',
  // ... other entries
  'avi': 'video/x-msvideo'
};

function mimeFromFilename(filename) {
  const ext = filename.split('.').pop().toLowerCase();
  if (!ext) throw new Error('Invalid filename');
  return mimeTypes[ext] || 'application/octet-stream';
}

//Problem 8, Part 1: generate license text and link from license code

function generateLicenseLink(licenseCode, targetBlank) {
  const licenses = {
    'CC-BY-NC-ND': 'by-nc-nd/4.0/',
    'CC-BY-ND': 'by-nd/4.0/', 
    'default': 'no-permission/'
  };
  const texts = { 
    'CC-BY-ND': 'Creative Commons Attribution-NoDerivs License', 
    'CC-BY-NC-ND': 'Creative Commons Attribution-NonCommercial-NoDerivs License',
    'default': 'All Rights Reserved'
  };
  const licenseUrl = `https://creativecommons.org/licenses/${licenses[licenseCode] || licenses['default']}`;
  return `<a href="${licenseUrl}"${targetBlank ? ' target="_blank"' : ''}>${texts[licenseCode] || texts['default']}</a>`;
}

//Problem 9 Part 1: convert a value to a Boolean (true or false)

function pureBool(value) {
  const trueValues = ['yes', 'y', 'oui', '1'];
  const falseValues = ['no', 'n', 'non', '0'];
const lowerCaseValue = String(value).toLowerCase();
if (trueValues.includes(lowerCaseValue)) {
    return true;
  }
if (falseValues.includes(lowerCaseValue)) {
    return false;
  }
 throw new Error('Invalid boolean value');
}

//Check if none of the values are false 
function noneFalse(...values) {
  return values.every(value => value !== false);
}

//Check if any value is false
function any(...values) {
  return values.some(value => pureBool(value));
}

//Check if none of the values are false
function none(...values) {
  return values.every(value => !pureBool(value));
}

//Problem 10 - build a URL
function buildUrl(query, order, count, license) {
 
  if (count < 1 || count > 50) {
      throw new Error("Count must be between 1 and 50.");
  }

  if (order !== "ascending" && order !== "descending") {
      throw new Error("Order must be 'ascending' or 'descending'.");
  }

}































 
 
 
 
 
 
 
 
 
 
 
 
 

 
 























































    
