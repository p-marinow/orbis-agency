/* 
  TODO: Задача 11: Да се създадат 3 променливи - час (целочислен тип), сума пари (число с плаваща запетая),
  TODO: дали съм здрав - булев тип. Съставете програма, която взема решения на базата на тези данни по следния начин:
  * ако съм здрав:
  * ако имам повече от 20 лв ще отида на дискотека.
  * ако съм болен - няма да излизам и: 
  * ако имам пари ще си купя лекарства 
  * ако нямам ще стоя вкъщи и ще пия чай
  * ако имам по-малко от 20 лв ще отида на кафе.

  Полученото решение покажете като съобщение в конзолата.
  Допълнително: Разширете ситуацията с повече променливи и условия.
*/

function solution1(time, cash, goodHealth) {
  const healthy = (cash, time) => {
    if (time >= 12 && time <= 24) {
      return cash >= 20
        ? `Bar/disco time!!`
        : `Short cash .. only ${cash} $ go drink coffee`;
    } else {
      return cash >= 20
        ? `Disco!? At morning ?? Go drink coffee..`
        : `Short cash .. only ${cash} $ go drink coffee`;
    }
  };

  const unhealthy = (cash, time) => {
    if (time >= 12 && time <= 24) {
      return cash >= 20
        ? `It's ${time} PM call your doctor before its closed`
        : `Short cash .. only ${cash} $ go make any tea again`;
    } else {
      return cash >= 20
        ? `It's ${time} AM you have some time to go to doctor`
        : `Short cash .. only ${cash} $ stay in home and drink some tea`;
    }
  };

  if (goodHealth === true) {
    return healthy(cash, time);
  } else {
    return unhealthy(cash, time);
  }
}

console.log(solution1(18, 5, true));
