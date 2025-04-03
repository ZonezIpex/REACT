export default function MyButton() {
    function handleClick() {
      alert(`you clickd me`)
    }

    return (
      <button onClick={handleClick}>
        I'm button
      </button>
    )
  }