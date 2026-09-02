

export default function Toast({ message }) {
    return (
        <div
            className="fixed top-5 right-5 z-50 px-5 py-3 rounded-lg text-white shadow-lg"
        >
            {message}
        </div>
    );
}