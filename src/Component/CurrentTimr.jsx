let CurrentTimr=()=>{
    let time=new Date();
    return <div>
        <p>The Current Time And The Date is {time.toLocaleTimeString()}-{time.toLocaleDateString()}</p>
    </div>
}
export default CurrentTimr;