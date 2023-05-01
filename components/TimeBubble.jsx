const TimeBubble = ({ satuan, nilai }) => {
    return (
        <div className="bg-blue-dark rounded-lg text-white w-24 p-6 text-center">
            <h1>{nilai}</h1>
            <h4>{satuan}</h4>
        </div>
    );
}
 
export default TimeBubble;