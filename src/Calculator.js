class Calculator {
    static calculate(input) {
        if (input === "") return 0;

        const numbers = this.#parse(input);
        this.#validate(numbers);
        return numbers.reduce((sum, num) => sum + num, 0);
    }

    static #parse(input) {
        let delimiter = /,|:/;
        let numbersPart = input;

        // 커스텀 구분자 처리
        if (input.startsWith("//")) {
            const match = input.match(/^\/\/(.)\n(.*)$/);
            if (!match) throw new Error("[ERROR] 커스텀 구분자 형식이 잘못되었습니다.");
            delimiter = new RegExp(match[1]);
            numbersPart = match[2];
        }

        return numbersPart.split(delimiter).map((num) => {
            if (num.trim() === "") throw new Error("[ERROR] 빈 값은 허용되지 않습니다.");
            return Number(num);
        });
    }

    static #validate(numbers) {
        numbers.forEach((num) => {
            if (Number.isNaN(num) || num < 0) {
                throw new Error("[ERROR] 잘못된 숫자가 입력되었습니다.");
            }
        });
    }
}

export default Calculator;
