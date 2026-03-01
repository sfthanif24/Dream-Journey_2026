// Closure is when a function is able to remember and access its lexical scope even what that function is executing outside its lexical scope.

function deduct(studentName) {
  let life = 3;

  let lifeDeduct = () => {
    if (life > 0) {
      life--;
      console.log(`${studentName}, you lost a life. Life remaining: ${life}`);
    } else {
      console.log(`${studentName}, your life is over!.No Life remain`);
    }
  };
  return lifeDeduct;
}

const sft = deduct("sht");
const sht = deduct("sft");
// console.log(sft);
sft();
sht();
sft();
sft();
sft();
sft();
