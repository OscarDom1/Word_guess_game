import styles from "../Keyboard.module.css"

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps = {
  disabled?: boolean;
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

const Keyboard = ({
  activeLetters,
  disabled = false,
  inactiveLetters,
  addGuessedLetter,
}: KeyboardProps) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(70px, 1fr))",
        gap: ".5rem",
        marginLeft: "4px",
        marginRight: "4px",
        marginBottom: "30px",
      }}
    >
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInActive = inactiveLetters.includes(key);

        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`${styles.btn} ${isActive ? styles.active : ""} ${
              isInActive ? styles.inactive : ""
            }`} disabled={isInActive || isActive || disabled}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
