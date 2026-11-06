function App() {

    function hello() {
        alert("Hello!");
    }

    return (
        <button onClick={hello}>
            Click Me
        </button>
    );
}