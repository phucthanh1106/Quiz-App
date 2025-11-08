function FunkyTitle({ text }) {
    const colors = ['#ff595e', '#ff006e', '#ffca3a', '#8ac926', '#1982c4', '#8ac926', '#8338ec', '#8ac926', '#1982c4', '#6a4c93', '#ff006e', '#ff595e', '#8338ec','#8ac926', '#3a86ff', '#8ac926', '#6a4c93'];

    return (
        <h1 className="funky-title">
        {text.split('').map((char, i) => (
            <span key={i} style={{ color: colors[i] }}>
            {char}
            </span>
        ))}
        </h1>
    );
}

export default FunkyTitle;