console.log('### 0000');

var styleNode = document.createElement('style');
styleNode.type = "text/css";
var styleText = document.createTextNode(`
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto Condensed Light';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVi2ZhZI2eCN5jzbjEETS9weq8-33mZGCkYb8td.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto Condensed Light';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVi2ZhZI2eCN5jzbjEETS9weq8-33mZGCAYb8td.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto Condensed Light';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVi2ZhZI2eCN5jzbjEETS9weq8-33mZGCgYb8td.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto Condensed Light';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVi2ZhZI2eCN5jzbjEETS9weq8-33mZGCcYb8td.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto Condensed Light';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVi2ZhZI2eCN5jzbjEETS9weq8-33mZGCsYb8td.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto Condensed Light';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVi2ZhZI2eCN5jzbjEETS9weq8-33mZGCoYb8td.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto Condensed Light';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVi2ZhZI2eCN5jzbjEETS9weq8-33mZGCQYbw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
`);
styleNode.appendChild(styleText);
document.getElementsByTagName('head')[0].appendChild(styleNode);


define();
console.log('### 1111');
