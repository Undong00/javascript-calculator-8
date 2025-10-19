import { Console } from "@woowacourse/mission-utils";
import Calculator from "./Calculator.js";

class App {
  async run() {
    try {
      const input = (await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n")).trim();
      const result = Calculator.calculate(input);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      if (error.message && error.message.startsWith("[ERROR]")) {
        Console.print(error.message);
      } else {
        Console.print("[ERROR] 예기치 못한 오류가 발생했습니다.");
      }
    }
  }
}

export default App;
