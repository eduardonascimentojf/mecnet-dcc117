import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
  font-family: 'Lato', sans-serif;;
  line-height: 1.5;
  font-weight: 400;

  background-color: #FFFFFF;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  --color-black: #000000;

  --color-white: #FFFFFF;
  --color-white-secondary: #f3f3f3;
  
  --color-gray: #E4E4E4;
  --color-gray-secondary: #dddddd;
  
  --color-light-blue: #1E5BB4;
  --color-blue: #192F4F;

  --color-light-red:   #f94721  ;
  --color-red:   #c22200  ;
 
  --color-light-green:   #229e03 ;
  --color-green: #009879;

}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button:focus,
button:focus-visible {
  outline: 0px;
}
input{
  background-color: #ffffff;
  border-color: #192F4F;
  outline: none;
  box-sizing: border-box
}
@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}
#root >div:not(.login){

  display: grid;
  grid-template-columns: 200px 1100px;
  background: var(--color-white);
  width: 100%;
  gap: 15px;
  min-height: 100vh;
  > h1 {
    text-align: center;
    width: 100%;
    padding-bottom: 5px;
    border-bottom: 2px solid var(--color-gray);
    margin: 15px 0;
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    overflow-x: auto;
    border-radius: 15px;
    border: 2px solid var(--color-gray);
    margin: 10px 0;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
`;

export default GlobalStyle;
