import './App.css'

function App() {

const n=1;
console.log(n);

const z = 10;

const x = 2;
const y = 3;

let v1 = n*3+2*z-n;

let w1 = n*1;
let w2 = n*2;
let w3 = n*3;
let w4 = n*4;
let w5 = n*5;
let w6 = n*6;
let w7 = n*7;
let w8 = n*8;
let w9 = n*9;
let w10 = n*10;

let r1 = 15*x**3+1-15*y;
let r2 = 2*x+315-4*x**2;
let r3 = 3*y**2-15*x**2*y-7*y;
let r4 = 2*x*y+15*x*y;
let r5 = 3*x**2+15*y+2;

  return (
      <>
          <header>
              <div class="podpis">Mój komputer ma numer {n}</div>

</header>
    <div class="par">
            <div class="rown ro2">
                <p>
                {n} * 1 = {w1}<br></br>
                {n} * 2 = {w2}<br></br>
                {n} * 3 = {w3}<br></br>
                {n} * 4 = {w4}<br></br>
                {n} * 5 = {w5}<br></br>
                {n} * 6 = {w6}<br></br>
                {n} * 7 = {w7}<br></br>
                {n} * 8 = {w8}<br></br>
                {n} * 9 = {w9}<br></br>
                {n} * 10 = {w10}<br></br>
                </p>
          </div>

              <div class="rown ro1">
                  <p>z = {z}</p><br></br>
                <p>{n} * 3 + 2z - {n} = {v1}</p>
          </div>


              <div class="rown ro3">
                  <p>x = {x} y = {y}</p><br></br>

                  <p>
                    15x<sup>3</sup>+1-15y = {r1}<br></br>
                    2x+315-4x<sup>2</sup> = {r2}<br></br>
                    3y<sup>2</sup>-15x<sup>2</sup>y-7y = {r3}<br></br>
                    2xy+15xy; = {r4}<br></br>
                    3x<sup>2</sup>+15y+2 = {r5}
                  </p>
              </div>
    </div>
  </>

  )
}

export default App
