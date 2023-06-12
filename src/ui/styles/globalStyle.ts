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

  --color-black-rgba: 000, 000, 000;
  --color-black: #000000;

  --color-white-rgba: 255, 255, 255;
  --color-white: #FFFFFF;
  --color-white-secondary: #f3f3f3;
  
  --color-gray-rgba: 228, 228, 228;
  --color-gray: #E4E4E4;
  --color-gray-secondary: #dddddd;
  --color-gray-dark: #383838;
  
  --color-blue-rgba: 025, 047, 079;
  --color-light-blue: #1E5BB4;
  --color-blue: #192F4F;

  --color-red-rgba:   194, 034, 000;
  --color-light-red:   #f94721;
  --color-red:   #c22200;
 
  --color-green-rgba: 034, 158, 003;
  --color-light-green: #229e03;
  --color-green: #009879;

  --color-yellow-rgba: 228, 243, 010;
  --color-light-yellow: #e4f30a

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
  min-width: 20rem;
  min-height: 100vh;
}

h1 {
  margin-top: 0.9rem;
font-weight: bold;
font-size: large;
text-align: center;
}

button:focus,
button:focus-visible {
  outline: 0rem;
}
input{
  background-color: #ffffff;
  border-color: #192F4F;
  outline: none;
  box-sizing: border-box
}
ul, li{
  list-style-type: none;
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
#root >div:not(.login) 
{
&:not(.notification){
  display: grid;
  grid-template-columns: 200px 1100px;
  background: var(--color-white);
  width: 100%;
  gap: 0.9rem;
  min-height: 100vh;
  > h1 {
    text-align: center;
    width: 100%;
    padding-bottom: 0.3rem;
    border-bottom: 0.12rem solid var(--color-gray);
    margin: 0.9rem 0;
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
   
    overflow-x: auto;
    border-radius: 0.9rem;
    border: 0.12rem solid var(--color-gray);
    margin: 0.62rem 0rem;
    width: -moz-available;
    padding: 15px ;
  }
  

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1.56rem;
  }
}
}
@media (max-width: 1350px) {
  #root >div:not(.login) {
    &:not(.notification){
    display: grid;
    grid-template-columns: 200px auto;
    background: var(--color-white);
    width: 100%;
    gap: 0.9rem;
    min-height: 100vh;
    .grid{
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1px;
      width: min-content;
      margin-right: auto;
    }
    main{
      width: 100%;
    }
  }
  }
} 
@media (max-width: 1000px) {
  #root >div:not(.login) &:not(.notification){
    .grid{
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
} 
@media (max-width: 850px) {
  #root >div:not(.login) &:not(.notification){
    .grid{
      grid-template-columns: 1fr 1fr;
    }
  }
}
`;

export default GlobalStyle;
