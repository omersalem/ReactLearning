function TestComponent(props) {
   

    return (
        <div style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
        }}>
            <div style={{
                background: '#fff',
                padding: '2rem',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                minWidth: '300px',
                textAlign: 'center'
            }}>
                <h2>{props.title}</h2>
                <div>{props.children || <p>This is a nice modal component!</p>}</div>
                <button
                    style={{
                        marginTop: '1rem',
                        padding: '0.5rem 1rem',
                        borderRadius: '4px',
                        border: 'none',
                        background: '#007bff',
                        color: '#fff',
                        cursor: 'pointer'
                    }}
                    onClick={props.onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
}


export default TestComponent;